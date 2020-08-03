//! == Import : npm ==
import React, { useEffect } from 'react';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Product = ({ listProduct, getProduct }) => {
    useEffect(() => { getProduct(); }, []);
    return (
        <main className="product">
            <h1 className="product__title">Modifier ou supprimer des produits</h1>
            <div className="product__container">
                <table>
                    <thead>
                        <tr className="product__tr">
                            <td className="product__image--td">
                                <p className="product__image--th">Image</p>
                            </td>
                            <td className="product__dish--td">
                                <p className="product__dish--th">Produit</p>
                            </td>
                            <td className="product__description--td">
                                <p className="product__description--th">Description</p>
                            </td>
                            <td className="product__price--td">
                                <p className="product__price--th">Prix</p>
                            </td>
                            <td className="product__modify--td">
                                <p className="product__modify--th">Modifer</p>
                            </td>
                            <td className="product__delete--td">
                                <p className="product__delete--th">Supprimer</p>
                            </td>
                        </tr>
                    </thead>
                    {listProduct.map((product) => (
                        <tbody key={product.id}>
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
                                <td className="product__modify--td">
                                    <button className="product__modify">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                </td>
                                <td className="product__delete--td">
                                    <button className="product__delete">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table> 
            </div>
        </main>
    );
};

//! == Export ==
export default Product;
