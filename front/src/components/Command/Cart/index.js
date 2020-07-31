import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Cart = ({ cart, quantity }) => {
    console.log(cart, "Panier de produit");
    console.log(quantity, "quantité");
    {cart.map((product) => ( console.log(product.name, "TEST")))}
    return(

  <div className="cart">
    {cart.map((product) => (
        <div className="cart__container">
            <div className="cart__dishes">
                <h1 className="cart__dish">{product.name}</h1>
            </div>
            <div className="cart__prices">
                <p>{product.price}&euro;</p>
            </div>
            <div className="cart__quantity">
                <button className="cart__remove">
                    <i className="fa fa-minus" aria-hidden="true" ></i>
                </button>
                <input className="cart__count" type="text" />
                <button 
                    className="cart__add"
                >
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    ))}
    <div className="cart__total">
        <h1>TOTAL</h1>
        <p>22€</p>
        <button className="cart__submit">CROQUER</button>
    </div>
  </div>
)};
export default Cart;
