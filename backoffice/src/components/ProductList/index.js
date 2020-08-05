//! == Import : npm ==
import React, { useEffect } from 'react';

//! == Import : local ==
import Categories from './categories';
import './styles.scss';

//! == Composant ==
const ProductList = ({ products, getProduct, categories, getCategories}) => {
    useEffect(() => { 
        getProduct();
        getCategories();
     }, []);
    return (
        <main className="product">
            <h1 className="product__title">Modifier ou supprimer des produits</h1>
            <Categories 
                categories={categories}
                products={products}
            />
        </main>
    );
};

//! == Export ==
export default ProductList;
