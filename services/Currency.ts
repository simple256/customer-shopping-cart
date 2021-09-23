import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import {CURRENCY_NAME, CURRENCY_ID} from './Contants';
import { IConverterResponseData, TTotalPrice, TValueOf } from './Interfaces';

/**
 * Возвращает между базовой валютой и выбранной/выбранными
 * @param currencySourceId
 * @param currencyTargetIds
 */
export async function getCurrency(
	currencySourceId: TValueOf<typeof CURRENCY_ID>,
	currencyTargetIds: Array<TValueOf<typeof CURRENCY_ID>>
): Promise<TTotalPrice> {
	const options: AxiosRequestConfig = {
		method: 'GET',
		url: process.env.RAPIDAPI_URL_CURRENCY,
		params: {
			format: 'json',
			from: currencySourceId,
			to: currencyTargetIds.join(', '),
			amount: '1',
			language: 'en',
		},
		headers: {
			'x-rapidapi-host': process.env.RAPIDAPI_HOST_CURRENCY,
			'x-rapidapi-key': process.env.CURRENCY_API_KEY,
		},
	};
	return await axios
		.request<IConverterResponseData>(options)
		.then((response) => {
			return convertResponseData(response);
		})
		.catch((error) => {
			console.error(error);
			return {} as TTotalPrice;
		});
}

/**
 * Возвращает курс относительно доллара
 */
export async function getBaseCurrencyValues(): Promise<TTotalPrice> {
	return getCurrency(CURRENCY_ID.dollars, [
		CURRENCY_ID.rubles,
		CURRENCY_ID.euros,
		CURRENCY_ID.dollars,
		CURRENCY_ID.pounds,
		CURRENCY_ID.yens,
	]);
}

/**
 * Конвертирует данные запроса
 * @param rawData
 */
function convertResponseData(rawData: AxiosResponse<IConverterResponseData>): TTotalPrice {
	const result: TTotalPrice = {};
	for (const item in rawData.data.rates) {
		const currentRate = rawData?.data?.rates[item];
		result[CURRENCY_NAME[item]] = currentRate ? Number(currentRate.rate) : null;
	}
	return result;
}
