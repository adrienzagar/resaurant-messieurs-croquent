//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import Command from '../../components/Command';
import { getProduct, addProductToCart, addQuantityProduct, savePrice, removeQuantityProduct } from '../../actions/product';
import { getCategories } from '../../actions/categories';
import { sendOrder } from '../../actions/order';


const mapStateToProps = (state, ownprops) => ({
    links: state.command.links,
    products: state.command.listProduct,
    categories: state.command.listCategories,
    listPrice: state.command.listPrice,
    quantity: state.command.quantity,
    quantities: state.command.quantities,
    cart: state.command.cart,
    values: state.command.values
});

const mapDispatchToProps = (dispatch, ownprops) => ({
    getProduct: () => dispatch(getProduct()), // Getting Products from API
    getCategories: () => dispatch(getCategories()), // Getting Categories from API
    sendOrder: () => dispatch(sendOrder()), // Send the order via an axios request in Middlewares to API
    addProductToCart: (product) => dispatch(addProductToCart(product)), //Add a product to the cart 
    addQuantityProduct: (quantity,id) => dispatch(addQuantityProduct(quantity,id)), //Add product quantity
    removeQuantityProduct: (quantity,id) => dispatch(removeQuantityProduct(quantity,id)), //Remove quantity Product
    savePrice: (price) => dispatch(savePrice(price)), //Calculate the total price of the cart
});

export default connect(mapStateToProps, mapDispatchToProps)(Command);