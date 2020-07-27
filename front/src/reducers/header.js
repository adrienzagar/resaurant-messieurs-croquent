//! == Import : local (actions)
import socialnetworksData from '../assets/data/socialnetworks';
import { TOGGLE_BUTTON } from '../actions';

//! == Initial state
export const initialState = {
    links: [
        {
           id: 1,
           name: 'Accueil',
           path: '/'
        },
        {
            id: 2,
            name: 'Menu',
            path: '/menu'
         },
         {
            id: 3,
            name: 'Commander',
            path: '/commander'
         },
         {
            id: 4,
            name: 'Nous trouver',
            path: '/nous-trouver'
         },
    ],
    socialnetworks: socialnetworksData,
    isActive: false,
};

//! == Actions to modified state
const header = (state = initialState, action = {}) => {
   switch (action.type) {
      case TOGGLE_BUTTON:
         return {
         ...state,
         isActive: !state.isActive,
         };
      default:
         return state;
   }
};

export default header;