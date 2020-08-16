//! == Import : npm ==
import React from 'react';

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
    return (
        <div className="cart">
            <p>Vous avez choisi {quantity } {quantity > 1 ? 'produits': 'produit'}</p>
            {cart.map((product) => ( // Displaying every product of the state cart
                <table className="cart__container">
                    <tr>
                        <td className="cart__dishes">
                            <p className="cart__dish">{product.name}</p>
                        </td>
                        <td className="cart__prices">
                            <p>{product.price.toFixed(2)}&euro;</p>
                        </td>
                        <td className="cart__quantity">
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
                        </td>
                    </tr>
                </table>
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
    );
};

//! == Export ==
export default Cart;
