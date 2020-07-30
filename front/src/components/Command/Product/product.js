import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ProductList = ({ products, category}) => (
  <div>
    {products.map((product) => (
            
            <div className="product__container" key={product.id}>
                <img className="product__image" src="https://i.ibb.co/xDQ8NNP/Coq.jpg"></img>
                <p className="product__dish">{product.name}</p>
                <p className="product__description">{product.description}</p>
                <p className="product__price">{product.price}€</p>
                <button className="product__add">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
            </div>
            ))}
  </div>
);
export default ProductList;
