//! == Import : local (actions)
import { GET_LOGIN, CHECK_IS_LOGGED, SET_USERNAME_VALUE, SET_PASSWORD_VALUE} from '../actions/log';
import { GET_LOGOUT } from '../actions/header';

//! == Initial state
export const initialState = {
    isLogged: false,
    username: '',
    password: ''
};

//! == Actions to modified state
const login = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_LOGIN:
           return {
                ...state,
           };
        case CHECK_IS_LOGGED:
            return {
                ...state,
                isLogged: true
            }
        case GET_LOGOUT:
            return {
                ...state,
                isLogged: false,
            }
        case SET_USERNAME_VALUE:
            return {
                ...state,
                username: action.username
            }
        case SET_PASSWORD_VALUE:
            return {
                ...state,
                password: action.password
            }
        default:
           return state;
     }
};

export default login;