//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import Product from '../../components/Product';
import { getProduct } from '../../actions/product';


const mapStateToProps = (state, ownprops) => ({
    listProduct: state.product.listProduct,
});

const mapDispatchToProps = (dispatch, ownprops) => ({
    getProduct: () => dispatch(getProduct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);