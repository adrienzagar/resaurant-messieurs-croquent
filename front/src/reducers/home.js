//! == Import : local (actions)

//! == Initial state
export const initialState = {
    presentation: [
        'En face du musée d’Aquitaine, Messieurs croquent a ouvert au printemps 2017. Ici, ce sont des produits locaux et de qualité qui se retrouvent dans ces sandwichs définitivement symbole de la Street Food à la française.',
        'Chez Messieurs Croquent, les produits industriels sont bannis au profit du fait maison.',
        'Alors n’attendez plus, venez croquer, savourer et partager.'
    ],
    imagePresentation: [
        {
            id: 1,
            src: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/p960x960/19055885_1791217924523101_5664044721417903390_o.jpg?_nc_cat=104&_nc_sid=dd7718&_nc_ohc=_gVKvrncdyIAX8P1Vu0&_nc_ht=scontent-cdg2-1.xx&_nc_tp=6&oh=c842bb3a7b01d32886daf8352b3c0ee1&oe=5F3E4316',
            alt: 'restaurant'
        }
    ],
};

//! == Actions to modified state
const home = (state = initialState, action = {}) => {
    return state;
};

export default home;