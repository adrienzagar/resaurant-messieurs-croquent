//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import Menu from '../../components/Menu';
import { getProduct } from '../../actions/product';
import { getCategories } from '../../actions/categories';


const mapStateToProps = (state) => ({
    products: state.command.listProduct,
    categories: state.command.listCategories,
});

const mapDispatchToProps = (dispatch) => ({
    getProduct: () => dispatch(getProduct()), // Getting Products from API
    getCategories: () => dispatch(getCategories()), // Getting Categories from API
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);