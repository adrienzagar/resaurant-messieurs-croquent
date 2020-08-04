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
    orderLines,
    addQuantityToProduct,
    quantities,
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
                orderLines={orderLines} 
                products={products}
                categories={categories}
                addProductToCart={addProductToCart}
                savePrice={savePrice}
             />
             <Cart 
                orderLines={orderLines} 
                quantity={quantity}
                listPrice={listPrice}
                quantities={quantities}
                addQuantityToProduct={addQuantityToProduct}
                mailValue={mailValue}
                phoneValue={phoneValue}
                nameValue={nameValue}
                lastnameValue={lastnameValue}
                setMailValue={setMailValue}
                setPhoneValue={setPhoneValue}
                setNameValue={setNameValue}
                setLastnameValue={setLastnameValue}
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
