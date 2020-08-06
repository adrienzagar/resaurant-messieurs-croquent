//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import Login from '../../components/Login';
import { getConnect, setUsernameValue, setPasswordValue } from '../../actions/log';

const mapStateToProps = (state) => ({
    username: state.login.username,
    password: state.login.password,
});

const mapDispatchToProps = (dispatch) => ({
    getConnect: () => dispatch(getConnect()),
    setUsernameValue: (username) => dispatch (setUsernameValue(username)),
    setPasswordValue: (password) => dispatch (setPasswordValue(password))
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);