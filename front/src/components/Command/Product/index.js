//! == Import : npm ==
import React from 'react';
// import PropTypes from 'prop-types';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const ProductList = ({ products, categories, addProduct, cartNumber }) => {
    // console.log(products);
    // console.log(addProduct);
    const addProduct = (event) => {
        // console.log(event.currentTarget.parentNode);

     };
    return (
        <div className="product">
                {categories.map((category) => {
                    const result = products.filter(product => product.category.id === category.id);
                    return (
                        <div>
                            <h1 key={category.id} className="product__category">{category.name}</h1>
                            {result.map((productMap) => (
                                <div className="product__container" key={productMap.id}>
                                    <img className="product__image" src="https://i.ibb.co/xDQ8NNP/Coq.jpg" alt="croque"></img>
                                    <p className="product__dish">{productMap.name}</p>
                                    <p className="product__description">{productMap.description}</p>
                                    <p className="product__price">{productMap.price}€</p>
                                    <button 
                                        className="product__add"
                                        onClick={addProduct}
                                    >
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </button>
                                <div>{cartNumber}</div>
                                </div> 
                            ))}
                        </div>
                    )
                })}
        </div>
    );
};


//! == Export ==
export default ProductList;
