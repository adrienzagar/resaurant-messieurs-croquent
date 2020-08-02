//! == Import : npm ==
import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
// import PropTypes from 'prop-types';

//! == Import : local ==
import 'react-accessible-accordion/dist/fancy-example.css';
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
                        <Accordion allowZeroExpanded={true}>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton key={category.id}>
                                        {category.name}
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    {result.map((productMap) => (
                                        <Product
                                            key={productMap.id}
                                            product={productMap}
                                            addProductToCart={addProductToCart}
                                        />
                                    ))}
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    )
                })}
        </div>
    );
};

//! == Export ==
export default ProductList;