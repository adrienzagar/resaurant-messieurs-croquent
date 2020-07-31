//! == Import : local (actions)
import { SAVE_PRODUCT } from '../actions/product';
import { ADD_PRODUCT_TO_CART } from '../actions/product';
import { SAVE_CATEGORIES } from '../actions/categories';

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
    listCategories: [],
    quantity: 0,
    cart: []
};

//! == Actions to modified state
const command = (state = initialState, action = {}) => {
    switch (action.type) {
        case SAVE_PRODUCT:
          return {
            ...state,
            listProduct: action.listProduct,
          };
        case SAVE_CATEGORIES:
          return {
            ...state,
            listCategories: action.categories,
          };
          case ADD_PRODUCT_TO_CART:
            state.cart.push(action.product)
            return {
              ...state,
              quantity: state.quantity + 1,
              cart: state.cart,
            };
        default:
            return state;
    }
    
};

export default command;