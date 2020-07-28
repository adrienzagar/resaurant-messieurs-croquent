//! == Import : local (actions)
import { SAVE_PRODUCT } from '../actions/product';

//! == Initial state
export const initialState = {
    links: [
        {
           id: 1,
           name: 'ubereats',
           path: 'https://www.ubereats.com/fr/bordeaux/food-delivery/messieurs-croquent/zZEABPXlT7amSdTvZnDiAw?ps=1',
           src: 'https://i2.wp.com/www.adriasbakery.com/wp-content/uploads/2019/01/uber-eats-logo-png.png',
           fade: 'fade-right'
        },
        {
            id: 2,
            name: 'deliveroo',
            path: 'https://deliveroo.fr/fr/menu/bordeaux/bordeaux-saint-genes-victoire/messieurs-croquent',
            src: 'https://img.over-blog-kiwi.com/0/55/35/69/20200209/ob_84bc94_deliveroo-logo-svg.png',
            fade: 'fade-left'
         },
    ],
    listProduct: [],
};

//! == Actions to modified state
const command = (state = initialState, action = {}) => {
    switch (action.type) {
        case SAVE_PRODUCT:
          return {
            ...state,
            listProduct: action.product,
          };
        default:
            return state;
    }
};

export default command;