//! == Import : local (actions)

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
            name: 'Produits',
            path: '/produits'
         },
         {
            id: 3,
            name: 'Commander',
            path: '/commander'
         },
    ],
};

//! == Actions to modified state
const sidebar = (state = initialState, action = {}) => {
    return state;
};

export default sidebar;