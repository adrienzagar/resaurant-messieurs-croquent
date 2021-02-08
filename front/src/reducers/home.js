//! == Import : local (actions)

//! == Initial state
export const initialState = {
    presentation: [
        'En face du musée d’Aquitaine, Messieurs Croquent a ouvert au printemps 2017. Ici, ce sont des produits locaux et de qualité qui se retrouvent dans ces sandwichs définitivement symbole de la Street Food à la française.',
        'Chez Messieurs Croquent, les produits industriels sont bannis au profit du fait maison.',
        'Alors n’attendez plus, venez croquer, savourer et partager.'
    ],
    imagePresentation: [
        {
            id: 1,
            src: 'https://www.tintamarre.net/wp-content/uploads/2017/11/devantureMessieurscroquent_preview.jpeg',
            alt: 'restaurant'
        }
    ],
};

//! == Actions to modified state
const home = (state = initialState, action = {}) => {
    return state;
};

export default home;