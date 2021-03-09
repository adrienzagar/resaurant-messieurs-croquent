//! == Import : npm
import axios from 'axios';

//! == Import : local (actions)
import { GET_LOGIN, checkIsLogged, errorLogged } from '../actions/log';
//! == Utils Axios for recupered JSON via API

const logMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case GET_LOGIN: {
            const state = store.getState();
            const { username, password } = state.login;

            axios.post(`${process.env.REACT_APP_BASE_URL}login`, {
                username,
                password
            })
            .then((response) => {
                console.log(response.data.token);
                const { token } = response.data;
                window.sessionStorage.setItem('token', token)
                store.dispatch(checkIsLogged());
            })
            .catch((error) => {
                store.dispatch(errorLogged());
                console.log(error);
            })
            break;
        }
    default:
        next(action)
        break;
    }
}

export default logMiddleware;