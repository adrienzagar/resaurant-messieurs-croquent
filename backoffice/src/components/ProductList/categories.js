//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import Product from './product';
import './styles.scss';

//! == Composant ==
const Categories = ({ categories, products }) => {
    return (
        <div className="product__container">
            {categories.map((category) => {
                const result = products.filter(product => product.category.id === category.id);
                return (
                    <div className="product__byCategory" key={category.id}>
                        <p className="product__titleCategory">{category.name}</p>
                        <table>
                            <thead>
                                <tr className="product__tr">
                                    <td className="product__image--td">
                                        <p className="product__image--th">Image</p>
                                    </td>
                                    <td className="product__dish--td">
                                        <p className="product__dish--th">Produit</p>
                                    </td>
                                    <td className="product__category--td">
                                        <p className="product__category--th">Catégorie</p>
                                    </td>
                                    <td className="product__description--td">
                                        <p className="product__description--th">Description</p>
                                    </td>
                                    <td className="product__price--td">
                                        <p className="product__price--th">Prix</p>
                                    </td>
                                    <td className="product__status--td">
                                        <p className="product__status--th">Statut</p>
                                    </td>
                                    <td className="product__delete--td">
                                        <p className="product__delete--th">Supprimer</p>
                                    </td>
                                </tr>
                            </thead>
                            {result.map((productCurrent) => (
                                <tbody key={productCurrent.id}>
                                    <Product productCurrent={productCurrent} />
                                </tbody>
                            ))}
                        </table> 
                    </div>
                );
            })}
        </div>
    );
};

//! == Export ==
export default Categories;
