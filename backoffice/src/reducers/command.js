//! == Import : local (actions)
import { SAVE_COMMAND, CHANGE_STATUS, SAVE_ID } from '../actions/command';

//! == Initial state
export const initialState = {
    listCommand: [],
    idCommand: null,
}

//! == Actions to modified state
const product = (state = initialState, action = {}) => {
    switch (action.type) {
        case SAVE_COMMAND:
        return {
            ...state,
            listCommand: action.command,
        };
        case SAVE_ID:
            return {
                ...state,
                idCommand: action.id,
            }
        default:
            return state;
    }
    
};

export default product;