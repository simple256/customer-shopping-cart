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
				<div key={product.ID}>
					<hr className={s.line} />
					<Product product={product} onChanged={onChanged} />
				</div>
			))}
			{products.length ? <hr className={s.line} /> : null}
		</>
	);
};

export default ProductList;
