import { CURRENCY_ID, CURRENCY_NAME } from './Contants';

interface IRate {
	currency_name?: string;
	rate?: string;
	rate_for_amount?: string;
}

export interface IConverterResponseData {
	base_currency_code: typeof CURRENCY_ID;
	base_currency_name: string;
	amount: string;
	updated_date: string;
	rates: TRates;
}

export type TRates = Record<TValueOf<typeof CURRENCY_NAME>, IRate>;

export type TValueOf<T> = T[keyof T];

export type TTotalPrice = Record<string, number | null>;
