//! == Import : npm ==
import React from 'react';
// import PropTypes from 'prop-types';

//! == Import : local ==
import './styles.scss';
import { addQuantityProduct , removeQuantityProduct } from '../../../actions/product'
import { returnTotalPrice } from '../../../selectors';
import ModalExampleModal from './modal';
import { connect } from 'react-redux';

//! == Composant ==
const Cart = ({ 
    cart, 
    quantity, 
    quantities,
    addQuantityProduct, 
    removeQuantityProduct,
    listPrice, 
    email, 
    phone_number,
    firstname,
    lastname,
    setMailValue,
    setPhoneValue,
    setNameValue,
    setLastnameValue,
    sendOrder,
    setUserObject,
    setProductObject
}) => {
    return(
    <div className="cart">
    <h2>VOUS AVEZ CHOISI {quantity } {quantity > 1 ? 'PRODUITS': 'PRODUIT'}</h2>
        {cart.map((product) => (
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
                     onClick={() => {removeQuantityProduct(product)}}
                     >
                        <i className="fa fa-minus" aria-hidden="true" ></i>
                    </button>
                    <input className="cart__count" type="text" value={product.quantity} readonly />
                    <button 
                        className="cart__add"
                        onClick={() => {addQuantityProduct(product)}}
                    >
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        ))}
        <div className="cart__total">
            <h1>TOTAL</h1>
            <p>{returnTotalPrice(listPrice).totalPrice.toFixed(2)}&euro;</p>
        <ModalExampleModal
            email={email}
            phone_number={phone_number}
            firstname={firstname}
            lastname={lastname}
            setMailValue={setMailValue}
            setPhoneValue={setPhoneValue}
            setNameValue={setNameValue}
            setLastnameValue={setLastnameValue}
            sendOrder={sendOrder}
            setUserObject={setUserObject}
            sendOrder={sendOrder}
            setUserObject={setUserObject}
            setProductObject={setProductObject}
        />
        </div>
    </div>
)};
function mapDispatchToProps(dispatch) {
    return {
        addQuantityProduct: (quantities) => dispatch(addQuantityProduct(quantities)),
        removeQuantityProduct: (quantities) => dispatch(removeQuantityProduct(quantities)),
    }

}
//! == Export ==
export default connect(null, mapDispatchToProps)(Cart);
