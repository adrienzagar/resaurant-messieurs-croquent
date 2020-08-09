//! == Import : npm ==
import React from 'react';
// import PropTypes from 'prop-types';

//! == Import : local ==
import './styles.scss';
import { returnTotalPrice } from '../../../selectors';
import Modal from './modal';

//! == Composant ==
const Cart = ({ 
    cart, 
    quantity, 
    addQuantityProduct, 
    removeQuantityProduct,
    listPrice, 
    sendOrder,
}) => {
    return(
    <div className="cart">
    <h2>Vous avez choisi {quantity } {quantity > 1 ? 'produits': 'produit'}</h2>
        { // Displaying every product of the state cart
            cart.map((product) => (
            <div className="cart__container">
                <div className="cart__dishes">
                    <h1 className="cart__dish">{product.name}</h1>
                </div>
                <div className="cart__prices">
                    <p>{product.price}&euro;</p>
                </div>
                <div className="cart__quantity">
                    <button
                     className="cart__remove"
                     onClick={() => {removeQuantityProduct(product)}} // Remove Quantity from the cart on clock -
                     >
                        <i className="fa fa-minus" aria-hidden="true" ></i>
                    </button>
                    <input className="cart__count" type="text" value={product.quantity} readonly />
                    <button 
                        className="cart__add"
                        onClick={() => {addQuantityProduct(product)}} //Add Quantity to the cart on click
                    >
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                    
                </div>
            </div>
        ))}
        <div className="cart__total">
            <p className="cart__total--title">TOTAL</p>
             {/* Displaying the total price of the cart */}
            <p>{returnTotalPrice(listPrice).totalPrice.toFixed(2)}&euro;</p>
        <Modal
            sendOrder={sendOrder}
        />
        </div>
    </div>
)};

//! == Export ==
export default Cart;
