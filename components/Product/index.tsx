import React from 'react';
import Image from 'next/image';
import s from '../../styles/Product.module.css';
import ProductDetailInfo from '../ProductDetailInfo';
import ChangeAmount from '../ChangeAmount';
import cn from 'classnames';
import { ICartProduct } from '../../models/products';
import { PRODUCTS } from '../../models/products';

interface IProduct {
	product: ICartProduct;
	onChanged: () => void;
}

const Product: React.FC<IProduct> = ({ product, onChanged }) => {
	const onAmountChangeHandler = (count: number) => {
		product.COUNT = count;
		onChanged();
	};
	return (
		<div className={s.container}>
			<Image className={cn(s.rounded, s.image)} height={170} width={170} src={product.IMAGE} />
			<ProductDetailInfo
				description={product.NAME}
				availableQuantity={PRODUCTS[product.ID].REMAINS}
				price={PRODUCTS[product.ID].PRICE}
				currencyNameShort={'USD'}
			/>
			<ChangeAmount amount={product.COUNT} onChanged={onAmountChangeHandler} />
		</div>
	);
};

export default Product;
