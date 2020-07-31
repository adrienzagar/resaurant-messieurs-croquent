//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import Command from '../../components/Command';
import { getProduct, addProductToCart, addQuantityProduct } from '../../actions/product';
import { getCategories } from '../../actions/categories';


const mapStateToProps = (state, ownprops) => ({
    links: state.command.links,
    products: state.command.listProduct,
    categories: state.command.listCategories,
    listPrice: state.command.listPrice,
    quantity: state.command.quantity,
    quantities: state.command.quantities,
    cart: state.command.cart,
});

const mapDispatchToProps = (dispatch, ownprops) => ({
    getProduct: () => dispatch(getProduct()),
    getCategories: () => dispatch(getCategories()),
    addProductToCart: (product) => dispatch(addProductToCart(product)),
    addQuantityProduct: (quantities) => dispatch(addQuantityProduct(quantities)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(Command);