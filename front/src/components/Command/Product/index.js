//! == Import : npm ==
import React from 'react';
// import PropTypes from 'prop-types';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Product = ({ products }) => {
    console.log(products);
    return (
        <div className="product">
            {products.map((product) => (
                <ul key={product.id}>
                    <li>{product.name}</li>
                    <li>{product.description}</li>
                    <li>{product.price}€</li>
                    <li></li>
                </ul>
            ))}
        </div>
    );
};

// Product.propTypes = {};

//! == Export ==
export default Product;
