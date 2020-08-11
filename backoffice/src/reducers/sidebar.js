//! == Import : local (actions)

//! == Initial state
export const initialState = {
    links: [
        {
           id: 1,
           name: 'Accueil',
           path: `${process.env.PUBLIC_URL}/`,
           icon: 'fas fa-home',
        },
        {
            id: 2,
            name: 'Produits',
            path: `${process.env.PUBLIC_URL}/produits`,
            icon:'fas fa-box'
         },
         {
            id: 3,
            name: 'Commandes',
            path: `${process.env.PUBLIC_URL}/commandes`,
            icon:'fas fa-shopping-cart',
         },
    ],
};

//! == Actions to modified state
const sidebar = (state = initialState, action = {}) => {
    return state;
};

export default sidebar;