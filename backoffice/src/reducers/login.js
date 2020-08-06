//! == Import : local (actions)
import { GET_CONNECT } from '../actions/log';
import { GET_LOGOUT } from '../actions/header';

//! == Initial state
export const initialState = {
    isLogged: false,
};

//! == Actions to modified state
const login = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_CONNECT:
           return {
                ...state,
                isLogged: true,
           };
        case GET_LOGOUT:
            return {
                ...state,
                isLogged: false,
            }
        default:
           return state;
     }
};

export default login;