import type { NextPage } from 'next';
import Head from 'next/head';
import s from '../styles/Home.module.css';
import { getBaseCurrencyValues, TTotalPrice } from '../services/currency';
import Cart from './Cart';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Home: NextPage<{ currency: TTotalPrice }, {}> = ({ currency }) => {
    return (
        <div className={s.container}>
            <div className={s.top}>
                <Head>
                    <title >Shopping Cart</title>
                </Head>
                <main>
                    <Cart />
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
    // const currency = await getBaseCurrencyValues();
    const currency = {
        dollars: 1,
        euros: 0.8489,
        pounds: 0.7246,
        yens: 110.0331,
        rubles: 72.6444,
    };
    return { currency };
};

export default Home;
