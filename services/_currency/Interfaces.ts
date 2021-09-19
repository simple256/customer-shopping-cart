import { CURRENCY_ID } from './Constants';

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
