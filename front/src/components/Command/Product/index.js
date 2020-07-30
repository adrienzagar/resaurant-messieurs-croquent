//! == Import : npm ==
import React from 'react';
// import PropTypes from 'prop-types';

//! == Import : local ==
import Title from './'
import './styles.scss';

//! == Composant ==
const Product = ({ products, categories }) => {
    console.log(products);
    console.log(categories);
    return (
        <div className="product">
            {categories.map((category) => (
                
                <h1 key={category.id} className="product__category">{category.name}</h1>
            ))}
            {products.map((product) => (
            
            <div className="product__container" key={product.id}>
                <img className="product__image" src="https://i.ibb.co/xDQ8NNP/Coq.jpg"></img>
                <p className="product__dish">{product.name}</p>
                <p className="product__description">{product.description}</p>
                <p className="product__price">{product.price}€</p>
                <button className="product__add">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
            </div>
            ))}
        </div>
    );
};

// {products.map((product) => (
//     <ul key={product.id} className="product__dishlist">
//         <li className="product__dish">
//             <p>{product.category.name}</p>  
//             <p>{product.name}</p>  
//             <p>{product.description}</p>  
//             <p>{product.price}</p>  
//         </li>
//     </ul>
// ))}

// Product.propTypes = {};

//! == Export ==
export default Product;
