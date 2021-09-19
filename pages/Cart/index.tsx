import React, { useMemo, useState } from 'react';
import ProductList from '../../components/ProductList';
import s from '../../styles/Cart.module.css';
import TotalPrice from '../../components/TotalPrice';
import { TTotalPrice } from '../../services/currency';
import Label from '../../components/Label';
import { ICartProduct } from '../../models/products';
import CurrencySelector from '../../components/CurrencySelector';

const CURRENCY_NAME: {[key: string]: any}= {
	RUB: 'rubles',
	EUR: 'euros',
	USD: 'dollars',
	GBP: 'pounds',
	JPY: 'yens',
};

interface ICart {
	products: ICartProduct[];
	currency: TTotalPrice;
}

const Cart: React.FC<ICart> = ({ products, currency }) => {
	const [currencySelectorValue, setCurrencySelectorValue] = useState(CURRENCY_NAME.USD);
	const [amount, setAmount] = useState(getTotalPrice(products, +(currency?.[currencySelectorValue] ?? 0)));
	const onChangeHandler = () => {
		setAmount(getTotalPrice(products, +(currency?.[currencySelectorValue] ?? 0)));
	};
	const onCurrencyChanged = (value: string) => {
		setCurrencySelectorValue(value);
		setAmount(getTotalPrice(products, +(currency?.[value] ?? 0)));
	};
	return (
		<div className={s.container}>
			<Label classNames={s.title} size="l" isBold={true} textValue="Shopping Cart" />
			<ProductList onChanged={onChangeHandler} products={products} />
			<div className={s.totals} key={'123123321'}>
				<CurrencySelector currency={currencySelectorValue} onChanged={onCurrencyChanged} />
				<TotalPrice classNames={s.totalPrice} amount={amount} currency={currencySelectorValue} />
			</div>
		</div>
	);
};

function getTotalPrice(products: ICartProduct[], currency: number): number {
	let sum = 0;
	for (const product of products) {
		sum += product.COUNT * product.PRICE * currency;
	}
	return sum;
}

export default Cart;
