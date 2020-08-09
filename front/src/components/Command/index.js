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
    addQuantityProduct,
    removeQuantityProduct,
    quantities,
    listPrice,
    savePrice,
    sendOrder,
}) => {
    useEffect(() => { getProduct(); }, []); //Getting product from API
    useEffect(() => { getCategories(); }, []); //Getting Categories from API
    useEffect(() => { document.title = "Messieurs Croquent - Commander"; }, []);
        // console.log(getProduct
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
                quantities={quantities}
                sendOrder={sendOrder}
                addQuantityProduct={addQuantityProduct}
                removeQuantityProduct={removeQuantityProduct}
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
