//! == Import : local (actions)
import { GET_LOGIN, CHECK_IS_LOGGED, ERROR_LOGGED, SET_USERNAME_VALUE, SET_PASSWORD_VALUE, GET_LOGGED} from '../actions/log';
import { GET_LOGOUT } from '../actions/header';

//! == Initial state
export const initialState = {
    errorLog: false,
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
        case GET_LOGGED:
            return {
                ...state,
            };
        case CHECK_IS_LOGGED:
            if (window.sessionStorage.token !== undefined) {
                return {
                    ...state,
                    isLogged: true,
                };
            } return {
                ...state
            };
        case ERROR_LOGGED:
            return {
                ...state,
                errorLog: true
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