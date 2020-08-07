//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import Header from '../../components/Header';
import { getLogout, getStatus, editStatus, modifyStatus } from '../../actions/header';

const mapStateToProps = (state) => ({
    isOpen: state.header.isOpen,
    status: state.header.status,
});

const mapDispatchToProps = (dispatch) => ({
    getLogout: () => dispatch(getLogout()),
    getStatus: () => dispatch(getStatus()),
    editStatus: () => dispatch(editStatus()),
    modifyStatus: (status, bool) => dispatch(modifyStatus(status, bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);