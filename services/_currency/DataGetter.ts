import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CURRENCY_ID, CURRENCY_ID_NAME, CURRENCY_NAME } from "./Constants";
import { TValueOf, TTotalPrice, IConverterResponseData } from './Interfaces';

/**
 *
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
            // console.log(response);
            return convertResponseData(response, currencyTargetIds)
        })
        .catch((error) => {
            console.error(error);
            return {};
        });
}

export async function getBaseCurrencyValues(): Promise<TTotalPrice> {
    return await getCurrency(CURRENCY_ID[CURRENCY_NAME.DOLLARS], [
        CURRENCY_ID[CURRENCY_NAME.RUBLES],
        CURRENCY_ID[CURRENCY_NAME.EUROS],
        CURRENCY_ID[CURRENCY_NAME.DOLLARS],
        CURRENCY_ID[CURRENCY_NAME.POUNDS],
        CURRENCY_ID[CURRENCY_NAME.YENS],
    ]);
}

/**
 *
 * @param rawData
 */
function convertResponseData(rawData: AxiosResponse<IConverterResponseData>, currencyTargetIds: string[]): TTotalPrice {
    const result: TTotalPrice = {};
    for (const item in rawData.data.rates) {
        const currentRate = rawData?.data?.rates[item];
        result[CURRENCY_ID_NAME[item]] = currentRate ? Number(currentRate.rate) : null;
    }
    return result;
}
