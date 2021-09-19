import React from "react";
import Product from "../Product";
import s from '../../styles/ProductList.module.css';

const ProductList = ({}) => {
  return (
    <>
	  <hr className={s.line}></hr>
	  <Product/>
      <hr className={s.line}></hr>
      <Product/>
	  <hr className={s.line}></hr>
    </>
  );
};

export default ProductList;
