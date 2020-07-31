//! == Import : npm ==
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

//! == Import : local ==
import Delivery from '../Command/Delivery';
import Local from '../Command/Local';
import ProductList from '../Command/ProductList';
import './styles.scss';
import Cart from './Cart';

//! == Composant ==
const Command = ({ 
    getProduct, 
    getCategories, 
    links, 
    products, 
    categories, 
    listPrice,
    addProductToCart, 
    quantity, 
    cart,
    addQuantityToProduct,
    quantities
}) => {
    useEffect(() => {
        // console.log(getProduct)
        getProduct();
        getCategories();
    }, []);

    return(
        <main className="command">
            <Delivery links={links} />
            <Local />
            <ProductList 
                products={products}
                categories={categories}
                addProductToCart={addProductToCart}
             />
             <Cart 
                cart={cart} 
                quantity={quantity}
                listPrice={listPrice}
                quantities={quantities}
                addQuantityToProduct={addQuantityToProduct}
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
