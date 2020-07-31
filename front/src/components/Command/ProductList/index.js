//! == Import : npm ==
import React from 'react';
// import PropTypes from 'prop-types';

//! == Import : local ==
import './styles.scss';
import Product from './product'
//! == Composant ==
const ProductList = ({ products, categories, addProductToCart }) => {
    // console.log(categories, products, 'COUCOU');
    // console.log(addProduct);
        return (
            <div className="product">
                    {categories.map((category) => {
                        const result = products.filter(product => product.category.id === category.id);
                        return (
                            <div>
                                <h1 key={category.id} className="product__category">{category.name}</h1>
                                {result.map((productMap) => (
                                    <Product
                                        key={productMap.id}
                                        product={productMap}
                                        addProductToCart={addProductToCart}
                                    />
                                ))}
                            </div>
                        )
                    })}
            </div>
        );
};


//! == Export ==
export default ProductList;
