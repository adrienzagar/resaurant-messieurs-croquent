//! == Import : local (actions)
import socialnetworks from '../assets/data/socialnetworks';

//! == Initial state
let y = new Date();
export const initialState = {
    links: [
        {
            id: 1,
            name: 'Mentions légales',
            path: '/mentions-legales'
         },
        {
           id: 2,
           name: ` © ${y.getFullYear()} - Messieurs Croquent - Tous droits réservés`,
           path: '/copyright'
        },
    ],
    socialnetworks: socialnetworks,
    };

//! == Actions to modified state
const footer = (state = initialState, action = {}) => {
    return state;
};

export default footer;