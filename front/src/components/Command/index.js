//! == Import : npm ==
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

//! == Import : local ==
import Delivery from '../Command/Delivery';
import Local from '../Command/Local';
import Product from '../Command/Product';
import './styles.scss';

//! == Composant ==
const Command = ({ getProduct, links, products }) => {
    useEffect(() => {
        // console.log(getProduct)
        getProduct();
    }, [])
    return(
        <main className="command">
            <Delivery links={links} />
            <Local />
            <Product products={products} />
        </main>
);}

Command.propTypes = {
    links: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired,
};

//! == Export ==
export default Command;
