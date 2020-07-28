//! == Import : npm
import { connect } from 'react-redux';
import { getProducts } from '../../actions/index';

//! == Import : local (actions)
import App from '../../components/App';

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => ({
    getProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);