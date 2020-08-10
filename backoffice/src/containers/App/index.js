//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import App from '../../components/App';
import { checkIsLogged } from '../../actions/log';

const mapStateToProps = (state) => ({
    isLogged: state.login.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
    checkIsLogged: () => dispatch(checkIsLogged()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);