//! == Import : npm
import axios from 'axios';

//! == Import : local (actions)
import { GET_LOGIN, GET_LOGOUT, checkIsLogged } from '../actions/log';
//! == Utils Axios for recupered JSON via API

const logMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case GET_LOGIN: {
            const state = store.getState()
            const { username, password } = state.login
            console.log(username, password)

            axios.post('http://ec2-54-160-78-162.compute-1.amazonaws.com/api/api/login', {
                username,
                password
            })
            .then((response) => {
                store.dispatch(checkIsLogged())
                console.log(response, 'ceci est la réponse du LOGIN')
            })
            .catch((error) => {
                console.log(error, 'je viens de recevoir une erreur');
            })
            break;
        }
        case GET_LOGOUT:
        axios.post('http://ec2-54-160-78-162.compute-1.amazonaws.com/api/api/logout')
        .then((reponse) => {
            console.log(reponse, 'ceci est la réponse du LOGOUT')
        })
        .catch((error) => {
            console.log(error);
        })
        break;
    default:
        next(action)
        break;
    }
}

export default logMiddleware;