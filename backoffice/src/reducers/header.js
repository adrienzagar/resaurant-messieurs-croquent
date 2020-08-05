//! == Import : local (actions)
import { GET_TOGGLE } from '../actions/header';

//! == Initial state
export const initialState = {
    isOpen: false,
};

//! == Actions to modified state
const header = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_TOGGLE:
           return {
            ...state,
            isOpen: !state.isOpen,
           };
        default:
           return state;
     }
};

export default header;