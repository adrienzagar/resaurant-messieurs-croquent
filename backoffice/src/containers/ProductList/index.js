//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import ProductList from '../../components/ProductList';
import { getProduct, getCategories } from '../../actions/product';


const mapStateToProps = (state, ownprops) => ({
    products: state.product.listProduct,
    categories: state.product.listCategories,
});

const mapDispatchToProps = (dispatch, ownprops) => ({
    getProduct: () => dispatch(getProduct()),
    getCategories: () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);