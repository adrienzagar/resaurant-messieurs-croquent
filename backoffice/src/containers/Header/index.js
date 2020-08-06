//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import Header from '../../components/Header';
import { getLogout, getStatus, modifyStatus } from '../../actions/header';

const mapStateToProps = (state) => ({
    isOpen: state.header.isOpen,
    status: state.header.status,
});

const mapDispatchToProps = (dispatch) => ({
    getLogout: () => dispatch(getLogout()),
    getStatus: () => dispatch(getStatus()),
    modifyStatus: (status) => dispatch(modifyStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);