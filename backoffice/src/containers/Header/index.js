//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import Header from '../../components/Header';
import { getLogout, getToggle } from '../../actions/header';

const mapStateToProps = (state) => ({
    isOpen: state.header.isOpen,
});

const mapDispatchToProps = (dispatch) => ({
    getLogout: () => dispatch(getLogout()),
    getToggle: () => dispatch(getToggle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);