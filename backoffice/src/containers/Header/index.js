//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import Header from '../../components/Header';
import { getLogout, getOpenClose, modifyStatus } from '../../actions/header';

const mapStateToProps = (state) => ({
    isOpen: state.header.isOpen,
    status: state.header.status,
});

const mapDispatchToProps = (dispatch) => ({
    getLogout: () => dispatch(getLogout()),
    getOpenClose: () => dispatch(getOpenClose()),
    modifyStatus: (store) => dispatch(modifyStatus(store)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);