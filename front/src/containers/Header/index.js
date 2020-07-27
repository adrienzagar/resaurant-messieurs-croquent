//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import Header from '../../components/Header';

const mapStateToProps = (state) => ({
    links: state.header.links,
    socialnetworks: state.header.socialnetworks,
    isActive: state.header.isActive,
});

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);