//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import Sidebar from '../../components/Sidebar';

const mapStateToProps = (state) => ({
    links: state.sidebar.links,
});

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);