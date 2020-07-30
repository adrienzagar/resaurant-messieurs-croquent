//! == Import : npm ==
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

//! == Import : local ==
import Delivery from '../Command/Delivery';
import Local from '../Command/Local';
import Product from '../Command/Product';
import './styles.scss';
import Cart from './Cart';

//! == Composant ==
const Command = ({ getProduct, getCategories, links, products, categories }) => {
    useEffect(() => {
        // console.log(getProduct)
        getProduct();
        getCategories();
    }, []);
    return(
        <main className="command">
            <Delivery links={links} />
            <Local />
            <Product 
                products={products}
                categories={categories}
             />
             <Cart />
        </main>
);}

Command.propTypes = {
    getProduct: PropTypes.func.isRequired,
    links: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired,
};

//! == Export ==
export default Command;
