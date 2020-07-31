//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import Command from '../../components/Command';
import { getProduct, addProductToCart } from '../../actions/product';
import { getCategories } from '../../actions/categories';


const mapStateToProps = (state, ownprops) => ({
    links: state.command.links,
    products: state.command.listProduct,
    categories: state.command.listCategories,
    quantity: state.command.quantity,
    cart: state.command.cart,
});

const mapDispatchToProps = (dispatch, ownprops) => ({
    getProduct: () => dispatch(getProduct()),
    getCategories: () => dispatch(getCategories()),
    addProductToCart: (product) => dispatch(addProductToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Command);