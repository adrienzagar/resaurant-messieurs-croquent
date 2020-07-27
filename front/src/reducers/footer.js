//! == Import : local (actions)

import socialnetworksData from '../assets/data/socialnetworks';
//! == Initial state
export const initialState = {
    socialnetworksData: socialnetworksData,
    };

//! == Actions to modified state
const footer = (state = initialState, action = {}) => {
    console.log(state);
    return state;
};

export default footer;