//! == Import : npm ==
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

//! == Import : local ==
import Delivery from '../Command/Delivery';
import Local from '../Command/Local';
import ProductList from '../Command/ProductList';
import Cart from './Cart';
import './styles.scss';

//! == Composant ==
const Command = ({ 
    getProduct, 
    getCategories, 
    links, 
    products, 
    categories, 
    addProductToCart, 
    quantity, 
    cart,
    addQuantityToProduct,
    // quantities,
    listPrice,
    savePrice,
    mailValue, 
    phoneValue,
    nameValue,
    lastnameValue,
    setMailValue,
    setPhoneValue,
    setNameValue,
    setLastnameValue,
    sendOrder,
}) => {
    useEffect(() => { getProduct(); }, []);
    useEffect(() => { getCategories(); }, []);
    useEffect(() => { document.title = "Messieurs Croquent - Commander"; }, []);
        // console.log(getProduct)
    return(
        <main className="command">
            <Delivery links={links} />
            <Local />
            <ProductList 
                cart={cart} 
                products={products}
                categories={categories}
                addProductToCart={addProductToCart}
                savePrice={savePrice}
             />
             <Cart 
                cart={cart} 
                quantity={quantity}
                listPrice={listPrice}
                // quantities={quantities}
                addQuantityToProduct={addQuantityToProduct}
                mailValue={mailValue}
                phoneValue={phoneValue}
                nameValue={nameValue}
                lastnameValue={lastnameValue}
                setMailValue={setMailValue}
                setPhoneValue={setPhoneValue}
                setNameValue={setNameValue}
                setLastnameValue={setLastnameValue}
                sendOrder={sendOrder}
             />
        </main>
);}

Command.propTypes = {
    getProduct: PropTypes.func.isRequired,
    links: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired,
};

//! == Export ==
export default Command;
