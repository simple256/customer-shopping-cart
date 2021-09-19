import React from 'react';
import Image from 'next/image';
import s from '../../styles/Product.module.css';
import ProductDetailInfo from '../ProductDetailInfo';
import ChangeAmount from '../ChangeAmount';

const Product = () => {
	return (
		<div className={s.container}>
			<Image className={s.rounded} height={170} width={170} src="/images/Tesla/3.png" />
			<ProductDetailInfo
				description={'Tesla Roadster'}
				availableQuantity={10002}
				price={24505}
				currencyNameShort={'USD'}
			/>
			<ChangeAmount />
		</div>
	);
};

export default Product;
