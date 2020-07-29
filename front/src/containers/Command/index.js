//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import Command from '../../components/Command';
import { getProduct } from '../../actions/product'
import { getCategories } from '../../actions/categories'

const mapStateToProps = (state) => ({
    links: state.command.links,
    products: state.command.listProduct,
    categories: state.command.listCategories,
});

const mapDispatchToProps = (dispatch) => ({
    getProduct: () => dispatch(getProduct()),
    getCategories: () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Command);