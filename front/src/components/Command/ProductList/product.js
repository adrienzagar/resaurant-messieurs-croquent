import React from 'react';
// import PropTypes from 'prop-types';

import './styles.scss';

const Product = ({ product, addProductToCart }) => {
    const addProduct = (event) => {
        event.preventDefault();
        // console.log(product);
        addProductToCart(product);
     };
     return (
        <div className="product__container" key={product.id}>
            <img className="product__image" src="https://i.ibb.co/xDQ8NNP/Coq.jpg" alt="croque"></img>
            <p className="product__dish">{product.name}</p>
            <p className="product__description">{product.description}</p>
            <p className="product__price">{product.price}€</p>
            <button 
                className="product__add"
                onClick={addProduct}
            >
                <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
        </div> 
    );
};
export default Product;
