//! == Import : local (actions)
import { GET_OPENCLOSE, MODIFY_STATUS, SAVE_STATUS } from '../actions/header';

//! == Initial state
export const initialState = {
    isOpen: '',
    status: '',
};

//! == Actions to modified state
const header = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_OPENCLOSE:
           return {
            ...state,
            isOpen: !state.isOpen,
           };
        // case MODIFY_STATUS:
        case SAVE_STATUS:
            return {
                status: action.status,
            };
        default:
           return state;
     }
};

export default header;