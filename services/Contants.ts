export const CURRENCY_NAME: Record<string, string> = {
	RUB: 'rubles',
	EUR: 'euros',
	USD: 'dollars',
	GBP: 'pounds',
	JPY: 'yens',
} as const;

export const CURRENCY_ID: Record<string, string> = {
	rubles: 'RUB',
	euros: 'EUR',
	dollars: 'USD',
	pounds: 'GBP',
	yens: 'JPY',
} as const;
