//! == Import : local (actions)
import socialnetworksData from '../assets/data/socialnetworks';
import { TOGGLE_BUTTON } from '../actions';
import { SAVE_STATUS } from '../actions/status';

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
            name: 'Notre carte',
            path: '/carte'
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
    status: '',
};

//! == Actions to modified state
const header = (state = initialState, action = {}) => {
   switch (action.type) {
      case TOGGLE_BUTTON:
         return {
         ...state,
         isActive: !state.isActive,
         };
      case SAVE_STATUS:
         return {
            ...state,
            status: action.status,
         }
      default:
         return state;
   }
};

export default header;