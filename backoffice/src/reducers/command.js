//! == Import : local (actions)
import { SAVE_COMMAND } from '../actions/command';

//! == Initial state
export const initialState = {
    listCommand: [],
}

//! == Actions to modified state
const product = (state = initialState, action = {}) => {
    switch (action.type) {
        case SAVE_COMMAND:
        return {
            ...state,
            listCommand: action.command,
        };
        default:
            return state;
    }
    
};

export default product;