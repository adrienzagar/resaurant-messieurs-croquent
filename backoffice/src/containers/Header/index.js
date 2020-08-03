//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import Header from '../../components/Header';
import { getLogout } from '../../actions/login';

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => ({
    getLogout: () => dispatch(getLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);