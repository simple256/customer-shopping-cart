import React from 'react';
import Product from '../Product';
import s from '../../styles/ProductList.module.css';
import { ICartProduct } from '../../models/products';

interface IProductList {
	products: ICartProduct[];
	onChanged: () => void;
}

const ProductList: React.FC<IProductList> = ({ products, onChanged }) => {
	return (
		<>
			{products.map((product) => (
				<>
					<hr key={'list-' + product.ID} className={s.line} />
					<Product key={product.ID} product={product} onChanged={onChanged} />
				</>
			))}
			{products.length ? <hr key={'list-' + Math.random()} className={s.line} /> : null}
		</>
	);
};

export default ProductList;
