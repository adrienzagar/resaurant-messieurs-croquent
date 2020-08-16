//! == Import : local (actions)
import socialnetworks from '../assets/data/socialnetworks';

//! == Initial state
export const initialState = {
    links: [
        {
           id: 1,
           name: 'Copyright 2020 © - Messieurs Croquent',
           path: '/copyright'
        },
        {
            id: 2,
            name: 'Mentions légales',
            path: '/mentions-legales'
         },
    ],
    socialnetworks: socialnetworks,
    };

//! == Actions to modified state
const footer = (state = initialState, action = {}) => {
    return state;
};

export default footer;