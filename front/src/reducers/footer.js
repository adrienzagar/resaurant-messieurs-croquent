//! == Import : local (actions)

import socialnetworks from '../data.js';
//! == Initial state
export const initialState = {
    socialnetworks: socialnetworks,
    };

//! == Actions to modified state
const footer = (state = initialState, action = {}) => {
    console.log(state);
    return state;
};

export default footer;