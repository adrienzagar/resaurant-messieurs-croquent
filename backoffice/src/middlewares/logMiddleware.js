//! == Import : npm
import axios from 'axios';

//! == Import : local (actions)
import { GET_LOGIN, GET_LOGOUT } from '../actions/log';
//! == Utils Axios for recupered JSON via API

const logMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case GET_LOGIN:
            axios.post('http://ec2-54-160-78-162.compute-1.amazonaws.com/api/api/login')
            .then((reponse) => {
                console.log(reponse, 'ceci est la réponse du LOGIN')
            })
            .catch((error) => {
                console.log(error);
            })
            break;
        default:
            next(action)
            break;
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