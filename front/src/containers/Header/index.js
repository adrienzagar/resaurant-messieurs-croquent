//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import Header from '../../components/Header';
import { toggleButton } from '../../actions';
import { getStatus } from '../../actions/status';

const mapStateToProps = (state) => ({
    links: state.header.links,
    socialnetworks: state.header.socialnetworks,
    isActive: state.header.isActive,
    status: state.header.status,
});

const mapDispatchToProps = (dispatch) => ({
    toggleButton: () => dispatch(toggleButton()),
    getStatus: () => dispatch(getStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);