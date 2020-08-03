//! == Import : local (actions)
import { ADD_PRODUCT_TO_CART, SAVE_PRODUCT, ADD_QUANTITY_PRODUCT, SAVE_PRICE } from '../actions/product';
import { SAVE_CATEGORIES } from '../actions/categories';
import { SET_MAIL_VALUE, SET_PHONE_VALUE, SET_NAME_VALUE, SET_LASTNAME_VALUE } from '../actions/form';

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
    listPrice: [],
    quantity: 0,
    // quantities: 0,
    cart: [],
    email: '',
    phone_number: '',
    firstname: '',
    lastname: '',
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
          // case ADD_QUANTITY_PRODUCT:
          //   return {
          //     ...state,
          //     quantities: state.quantities +1
          //   }
            case SAVE_PRICE:
            state.listPrice.push(action.price)
            return {
              ...state,
              listPrice: state.listPrice,
            };
            case SET_MAIL_VALUE:
              return {
                ...state,
                email: action.email,
              };
            case SET_PHONE_VALUE:
              return {
                ...state,
                phone_number: action.phone_number,
              };
            case SET_NAME_VALUE:
              return {
                ...state,
                firstname: action.firstname,
              };
            case SET_LASTNAME_VALUE:
              return {
                ...state,
                lastname: action.lastname,
              };
        default:
            return state;
    }
    
};

export default command;