import type { NextPage } from 'next';
import Head from 'next/head';
import s from '../styles/Home.module.css';
import { getBaseCurrencyValues } from '../services/Currency';
import Cart from './Cart';
import { CART_PRODUCTS } from '../models/products';
import { TTotalPrice } from '../services/Interfaces';

const Home: NextPage<{ currency: TTotalPrice }, {}> = ({ currency }) => {
	return (
		<div className={s.container}>
			<div className={s.top}>
				<Head>
					<title>Shopping Cart</title>
				</Head>
				<main className={s.main}>
					<Cart products={CART_PRODUCTS} currency={currency} />
				</main>
			</div>
			<footer className={s.footer}>
				<div>
					Created by <b>Askar Musin</b>, 2021
				</div>
			</footer>
		</div>
	);
};

Home.getInitialProps = async () => {
	let currency;
	if (process.env.NODE_ENV === 'development') {
		currency = {
			dollars: 1,
			euros: 0.8489,
			pounds: 0.7246,
			yens: 110.0331,
			rubles: 72.6444,
		};
	} else {
		currency = await getBaseCurrencyValues();
	}
	return { currency };
};

export default Home;
