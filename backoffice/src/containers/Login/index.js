//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import Login from '../../components/Login';
import { getConnect } from '../../actions/login';

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => ({
    getConnect: () => dispatch(getConnect()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);