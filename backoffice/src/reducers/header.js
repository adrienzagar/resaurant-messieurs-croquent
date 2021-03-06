//! == Import : local (actions)
import { MODIFY_STATUS, SAVE_STATUS } from '../actions/header';

//! == Initial state
export const initialState = {
    isOpen: '',
    status: '',
};

//! == Actions to modified state
const header = (state = initialState, action = {}) => {
    switch (action.type) {
        case MODIFY_STATUS:
            return {
                ...state,
                status: action.status,
                isOpen: action.bool
            }
        case SAVE_STATUS:
            return {
                ...state,
                status: action.status,
                isOpen: action.bool,
            }
        default:
           return state;
     }
};

export default header;