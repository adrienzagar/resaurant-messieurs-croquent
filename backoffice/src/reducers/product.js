//! == Import : local (actions)
import { SAVE_PRODUCT, SAVE_CATEGORIES } from '../actions/product';

//! == Initial state
export const initialState = {
    listProduct: [],
    listCategories: [],
}

//! == Actions to modified state
const product = (state = initialState, action = {}) => {
    switch (action.type) {
        case SAVE_PRODUCT:
        return {
            ...state,
            listProduct: action.product,
        };
        case SAVE_CATEGORIES:
        return {
            ...state,
            listCategories: action.categories,
        };
        default:
            return state;
    }
    
};

export default product;