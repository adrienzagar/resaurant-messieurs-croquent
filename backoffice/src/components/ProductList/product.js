//! == Import : npm ==
import React from 'react';
import { Checkbox } from 'semantic-ui-react';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Product = ({ productCurrent }) => {
    console.log(productCurrent)
    return (
        <tr className="product__tr">
            <td className="product__image--td">
                <img className="product__image" src={productCurrent.picture} alt="croque"></img>
            </td>
            <td className="product__dish--td">
                <p className="product__dish">{productCurrent.name}</p>
            </td>
            <td className="product__category--td">
                <p className="product__category">{productCurrent.category.name}</p>
            </td>
            <td className="product__description--td">
                <p className="product__description">{productCurrent.description}</p>
            </td>
            <td className="product__price--td">
                <p className="product__price">{productCurrent.price}€</p>
            </td>
            <td className="product__satus--td">
                <Checkbox onClick={() => (console.log('coucou'))} toggle className="product__status"/>
            </td>
            <td className="product__delete--td">
                <button className="product__delete">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </td>
        </tr>
    );
};

//! == Export ==
export default Product;
