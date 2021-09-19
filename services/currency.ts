import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

type TValueOf<T> = T[keyof T];
type TTotalPrice = {
	[key: string]: number | null;
};

interface ITotalCartPrice {
	rubles: number;
	euros: number;
	dollars: number;
	pounds: number;
	yens: number;
}

export interface IRates {
	[id: string]: {
		currency_name?: string;
		rate?: string;
		rate_for_amount?: string;
	};
}
export interface IConverterResponseData {
	base_currency_code: typeof CURRENCY_ID;
	base_currency_name: string;
	amount: string;
	updated_date: string;
	rates: IRates;
}
export type { TValueOf, TTotalPrice };

const CURRENCY_NAME: {[key: string]: any}= {
	RUB: 'rubles',
	EUR: 'euros',
	USD: 'dollars',
	GBP: 'pounds',
	JPY: 'yens',
};
const CURRENCY_ID: {[key: string]: any} = {
	rubles: 'RUB',
	euros: 'EUR',
	dollars: 'USD',
	pounds: 'GBP',
	yens: 'JPY',
};
const CURRENCY_ID_NAME = {
	RUB: CURRENCY_NAME.RUB,
	EUR: CURRENCY_NAME.EUR,
	USD: CURRENCY_NAME.USD,
	GBP: CURRENCY_NAME.GBP,
	JPY: CURRENCY_NAME.JPY,
};

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
			return {};
		});
}

/**
 * Возвращает курс относительно доллара
 */
export async function getBaseCurrencyValues(): Promise<TTotalPrice> {
	return await getCurrency(CURRENCY_ID.dollars, [
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
		result[CURRENCY_ID[item as unknown as string] ] = currentRate ? Number(currentRate.rate) : null;
	}
	return result;
}
