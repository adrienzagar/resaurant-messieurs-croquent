//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import Command from '../../components/Command';
import { getProduct } from '../../actions/product'

const mapStateToProps = (state) => ({
    links: state.command.links,
    products: state.command.listProduct,
});

const mapDispatchToProps = (dispatch) => ({
    getProduct: () => dispatch(getProduct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Command);