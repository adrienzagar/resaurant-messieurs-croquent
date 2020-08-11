//! == Import : npm ==
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';

//! == Import : local ==
import Delivery from '../Command/Delivery';
import Local from '../Command/Local';
import ProductList from '../Command/ProductList';
import Cart from './Cart';
import 'aos/dist/aos.css';
import './styles.scss';

//! == Composant ==
const Command = ({ 
    getProduct, 
    getCategories, 
    links, 
    products, 
    categories, 
    addProductToCart, 
    quantity, 
    cart,
    addQuantityProduct,
    removeQuantityProduct,
    quantities,
    listPrice,
    savePrice,
    sendOrder,
    status
}) => {
    AOS.init();
    useEffect(() => { getProduct(); }, []); //Getting product from API
    useEffect(() => { getCategories(); }, []); //Getting Categories from API
    useEffect(() => { document.title = "Messieurs Croquent - Commander"; }, []);
    return (
        <main className="command">
            <Delivery links={links} />
            <Local />
            {status === 'FERMÉ' && (
                <div className="command__close" data-aos="fade-up">
                    <p className="command__close--title">Le restaurant est fermé</p>
                    <p className="command__close--text">Nous ne prenons pas de commandes pour le moment, revenez ultérieurement</p>
                    <p className="command__close--text">Merci de votre compréhension</p>
                </div>
            )}
            {status === 'OUVERT' && (
                <>
                    <ProductList 
                        cart={cart} 
                        products={products}
                        categories={categories}
                        addProductToCart={addProductToCart}
                        savePrice={savePrice}
                    />
                    <Cart 
                        cart={cart} 
                        quantity={quantity}
                        listPrice={listPrice}
                        quantities={quantities}
                        sendOrder={sendOrder}
                        addQuantityProduct={addQuantityProduct}
                        removeQuantityProduct={removeQuantityProduct}
                    />
                </>
             )}
        </main>
);}

Command.propTypes = {
    getProduct: PropTypes.func.isRequired,
    links: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired,
};

//! == Export ==
export default Command;
