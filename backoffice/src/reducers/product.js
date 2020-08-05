//! == Import : local (actions)
import { SAVE_PRODUCT } from '../actions/product';

//! == Initial state
export const initialState = {
    listProduct: [],
}

//! == Actions to modified state
const product = (state = initialState, action = {}) => {
    switch (action.type) {
        case SAVE_PRODUCT:
        return {
            ...state,
            listProduct: action.product,
        };
        default:
            return state;
    }
    
};

export default product;