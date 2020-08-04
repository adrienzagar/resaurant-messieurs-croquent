//! == Import : npm ==
import React from 'react';
// import PropTypes from 'prop-types';

//! == Import : local ==
import './styles.scss';
import { returnTotalPrice } from '../../../selectors';
import ModalExampleModal from './modal';

//! == Composant ==
const Cart = ({ orderLines, 
    quantity, 
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
    setUserObject
}) => {
    console.log(listPrice, "priceList");
    // const addQuantity = (quantities) => {
    //     addQuantityToProduct(quantities)
    // }
    return(
    <div className="cart">
        {orderLines.map((product) => (
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
                        // onClick={() => {addQuantity(quantities)}}
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
        />
        </div>
    </div>
)};

//! == Export ==
export default Cart;
