//! == Import : npm ==
import React from 'react';
// import PropTypes from 'prop-types';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Product = ({ orderLines, product, addProductToCart, savePrice }) => {
    const addProduct = (product) => {
        // console.log(product, "Produit ajouter au clic");
        console.log(product);
        addProductToCart(product);
        savePrice(product.price)
    };
     return (
        <table className="product__container" key={product.id}>
            <tbody>
                <tr className="product__tr">
                    <td className="product__image--td">
                        <img className="product__image" src="https://i.ibb.co/xDQ8NNP/Coq.jpg" alt="croque"></img>
                    </td>
                    <td className="product__dish--td">
                        <p className="product__dish">{product.name}</p>
                    </td>
                    <td className="product__description--td">
                        <p className="product__description">{product.description}</p>
                    </td>
                    <td className="product__price--td">
                        <p className="product__price">{product.price}€</p>
                    </td>
                    <td className="product__add--td">
                        <button 
                            className="product__add"
                            onClick={()=>{
                                addProduct(product);
                            }}
                        >
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table> 
    );
};

//! == Export ==
export default Product;
