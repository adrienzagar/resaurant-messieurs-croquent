//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import Login from '../../components/Login';
import { getLogin, setUsernameValue, setPasswordValue } from '../../actions/log';

const mapStateToProps = (state) => ({
    username: state.login.username,
    password: state.login.password,
});

const mapDispatchToProps = (dispatch) => ({
    getLogin: () => dispatch(getLogin()),
    setUsernameValue: (username) => dispatch (setUsernameValue(username)),
    setPasswordValue: (password) => dispatch (setPasswordValue(password)),
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);