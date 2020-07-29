//! == Import : npm ==
import React from 'react';
// import PropTypes from 'prop-types';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Product = ({ products, categories }) => {
    console.log(products);
    console.log(categories);
    return (
        <div className="product">
            <h1 className="product__category">Croque monsieur</h1>
            {products.map((product) => (
            
            <div className="product__container">
                <img className="product__image" src="https://i.ibb.co/xDQ8NNP/Coq.jpg"></img>
                <p className="product__dish">{product.name}</p>
                <p className="product__description">Jambon blanc, béchamel maison, fromage Abondance A.O.P,\r\noeuf fermier</p>
                <p className="product__price">8€</p>
                <button className="product__add">
                <i class="fa fa-plus" aria-hidden="true"></i>
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
