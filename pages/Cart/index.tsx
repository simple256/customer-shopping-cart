import React from 'react';
import ProductList from '../../components/ProductList';
import s from '../../styles/Cart.module.css';
import TotalPrice from '../../components/TotalPrice';
import { CURRENCY_NAME } from '../../services/currency';
import Label from '../../components/Label';

const Cart = () => {
    return (
        <div className={s.container}>
            <Label classNames={s.title} size="l" isBold={true} textValue="Shopping Cart" />
            <ProductList />
            <TotalPrice classNames={s.totalPrice} amount={12333} currency={CURRENCY_NAME.DOLLARS} />
        </div>
    );
};

export default Cart;
