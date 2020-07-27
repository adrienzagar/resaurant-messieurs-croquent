//! == Import : local (actions)

//! == Initial state
export const initialState = {
    links: [
        {
           id: 1,
           link: 'Accueil',
           path: '/'
        },
        {
            id: 2,
            link: 'Menu',
            path: '/menu'
         },
         {
            id: 3,
            link: 'Commander',
            path: '/commander'
         },
         {
            id: 4,
            link: 'Nous trouver',
            path: '/nous-trouver'
         },
    ],
    isActive: false,
};

//! == Actions to modified state
const header = (state = initialState, action = {}) => {
    return state;
};

export default header;