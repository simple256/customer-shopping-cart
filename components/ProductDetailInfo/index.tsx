import React from 'react';
import s from '../../styles/ProductDetailInfo.module.css';
import Label from '../Label';
import cn from 'classnames';

interface IProductDetailInfo {
	description: string;
	currencyNameShort: string;
	price: number;
	availableQuantity: number;
}

const ProductDetailInfo: React.FC<IProductDetailInfo> = ({
	description,
	price,
	availableQuantity,
	currencyNameShort,
}) => {
	return (
		<div className={s.container}>
			<div className={cn(s.row, s.between)}>
				<Label size="m" textValue="Name: " />
				<Label size="m" isBold={true} textValue={description} />
			</div>
			<div className={cn(s.row, s.between)}>
				<Label size="m" textValue="Price: " />
				<Label size="m" textValue={price.toFixed(2).toString() + ' ' + currencyNameShort} />
			</div>
			<div className={cn(s.row, s.between)}>
				<Label size="m" textValue="Available Quantity: " />
				<Label size="m" textValue={availableQuantity + ' pcs'} />
			</div>
		</div>
	);
};

export default ProductDetailInfo;
