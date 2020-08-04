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
const Cart = ({ orderLines, 
    quantity, 
    quantities,
    addQuantityProduct, 
    removeQuantityProduct,
    listPrice, 
    mailValue, 
    phoneValue,
    nameValue,
    lastnameValue,
    setMailValue,
    setPhoneValue,
    setNameValue,
    setLastnameValue,
}) => {
    return(
    <div className="orderLines">
    <h2>VOUS AVEZ CHOISI {quantity } PRODUIT(S)</h2>
        {orderLines.map((product) => (
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
            <p>{returnTotalPrice(listPrice).totalPrice}&euro;</p>
        <ModalExampleModal
            mailValue={mailValue}
            setMailValue={setMailValue}
            mailValue={mailValue}
            phoneValue={phoneValue}
            nameValue={nameValue}
            lastnameValue={lastnameValue}
            setMailValue={setMailValue}
            setPhoneValue={setPhoneValue}
            setNameValue={setNameValue}
            setLastnameValue={setLastnameValue}
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
