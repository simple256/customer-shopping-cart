export const PRODUCTS_ID = {
	TESLA_ROADSTER: 'TESLA_ROADSTER',
	TESLA_MODEL_S: 'TESLA_MODEL_S',
	TESLA_MODEL_X: 'TESLA_MODEL_X',
	TESLA_MODEL_3: 'TESLA_MODEL_3',
	TESLA_MODEL_Y: 'TESLA_MODEL_Y',
	TESLA_CYBERTRUCK: 'TESLA_CYBERTRUCK',
};

export const PRODUCTS = {
	[PRODUCTS_ID.TESLA_ROADSTER]: {
		REMAINS: 23,
		PRICE: 20,
		NAME: 'Tesla Roadster',
		ID: PRODUCTS_ID.TESLA_ROADSTER,
		IMAGE: '/images/Tesla/roadster.png',
		CATEGORY: 'tesla',
	},
	[PRODUCTS_ID.TESLA_MODEL_S]: {
		REMAINS: 1600,
		PRICE: 45,
		NAME: 'Tesla Model S',
		ID: PRODUCTS_ID.TESLA_MODEL_S,
		IMAGE: '/images/Tesla/s.png',
		CATEGORY: 'tesla',
	},
	[PRODUCTS_ID.TESLA_MODEL_X]: {
		REMAINS: 950,
		PRICE: 67,
		NAME: 'Tesla Model X',
		ID: PRODUCTS_ID.TESLA_MODEL_X,
		IMAGE: '/images/Tesla/x.png',
		CATEGORY: 'tesla',
	},
	[PRODUCTS_ID.TESLA_MODEL_3]: {
		REMAINS: 232,
		PRICE: 1305,
		NAME: 'Tesla Model 3',
		ID: PRODUCTS_ID.TESLA_MODEL_3,
		IMAGE: '/images/Tesla/3.png',
		CATEGORY: 'tesla',
	},
	[PRODUCTS_ID.TESLA_MODEL_Y]: {
		REMAINS: 1234,
		PRICE: 1212,
		NAME: 'Tesla Model Y',
		ID: PRODUCTS_ID.TESLA_MODEL_Y,
		IMAGE: '/images/Tesla/y.png',
		CATEGORY: 'tesla',
	},
	[PRODUCTS_ID.TESLA_CYBERTRUCK]: {
		REMAINS: 3232,
		PRICE: 56,
		NAME: 'Tesla Cybertruck',
		ID: PRODUCTS_ID.TESLA_CYBERTRUCK,
		IMAGE: '/images/Tesla/cybertruck.png',
		CATEGORY: 'tesla',
	},
};

export interface ICartProduct {
	COUNT: number;
	PRICE: number;
	NAME: string;
	ID: string;
	CATEGORY: string;
	IMAGE: string;
}

export const CART_PRODUCTS: ICartProduct[] = [
	{
		COUNT: 1,
		PRICE: 20,
		NAME: 'Tesla Roadster',
		ID: PRODUCTS_ID.TESLA_ROADSTER,
		CATEGORY: 'tesla',
		IMAGE: '/images/Tesla/roadster.png',
	},
	{
		COUNT: 1,
		PRICE: 45,
		NAME: 'Tesla Model S',
		ID: PRODUCTS_ID.TESLA_MODEL_S,
		CATEGORY: 'tesla',
		IMAGE: '/images/Tesla/s.png',
	},
	{
		COUNT: 1,
		PRICE: 67,
		NAME: 'Tesla Model X',
		ID: PRODUCTS_ID.TESLA_MODEL_X,
		CATEGORY: 'tesla',
		IMAGE: '/images/Tesla/x.png',
	},
	{
		COUNT: 1,
		PRICE: 1305,
		NAME: 'Tesla Model 3',
		ID: PRODUCTS_ID.TESLA_MODEL_3,
		CATEGORY: 'tesla',
		IMAGE: '/images/Tesla/3.png',
	},
];
