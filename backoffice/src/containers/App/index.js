//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import App from '../../components/App';

const mapStateToProps = (state) => ({
    isLogged: state.login.isLogged,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);