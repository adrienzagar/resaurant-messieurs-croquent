//! == Import : npm ==
import React from 'react';
// import PropTypes from 'prop-types';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Product = ({ products, categories }) => {
    // console.log(products);
    // console.log(categories);

    return (
        <div className="product">
                {categories.map((category) => {
                    const result = products.filter(product => product.category.id === category.id);
                        console.log(result)
                    return (
                        <div>
                            <h1 key={category.id} className="product__category">{category.name}</h1>
                            {result.map((productMap) => (
                                <div className="product__container" key={productMap.id}>
                                    <img className="product__image" src="https://i.ibb.co/xDQ8NNP/Coq.jpg" alt="croque"></img>
                                    <p className="product__dish">{productMap.name}</p>
                                    <p className="product__description">{productMap.description}</p>
                                    <p className="product__price">{productMap.price}€</p>
                                    <button className="product__add">
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </button>
                                </div> 
                            ))}
                        </div>
                    )
                })}
        </div>
    );
};

// {categories.map((category) => (
                
//     <h1 key={category.id} className="product__category">{category.name}</h1>
// ))}
// {products.map((product) => (

// <div className="product__container" key={product.id}>
//     <img className="product__image" src="https://i.ibb.co/xDQ8NNP/Coq.jpg"></img>
//     <p className="product__dish">{product.name}</p>
//     <p className="product__description">{product.description}</p>
//     <p className="product__price">{product.price}€</p>
//     <button className="product__add">
//         <i className="fa fa-plus" aria-hidden="true"></i>
//     </button>
// </div>
// ))}

//! == Export ==
export default Product;
