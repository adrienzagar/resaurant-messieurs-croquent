//! == Import : local (actions)
import { ADD_PRODUCT_TO_CART, SAVE_PRODUCT, ADD_QUANTITY_PRODUCT, REMOVE_QUANTITY_PRODUCT, SAVE_PRICE } from '../actions/product';
import { SET_ORDER_LINES } from '../actions/order';
import { SAVE_CATEGORIES } from '../actions/categories';
import { SET_MAIL_VALUE, SET_PHONE_VALUE, SET_NAME_VALUE, SET_LASTNAME_VALUE, SET_USER_OBJECT } from '../actions/form';


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
  id: {},
  quantities: 0,
  cart: [],
  user: {},
  orderLines: {},
  price: 14,
  status: 1,
  comment: "coucou"
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
      state.cart.push(action.product) //push product to card
      state.cart = state.cart.map(product => {
        if (product.id === action.product.id) {
          state.cart.pop(action.product) // if the product exists remove it and increment qty
          return { ...product, quantity: product.quantity == null ? 1 : product.quantity + 1 }
        }
        else {
          return product
        }
      })
      return {
        ...state,
        quantity: state.quantity + 1,
        cart: state.cart
      };
    case ADD_QUANTITY_PRODUCT:
      state.cart = state.cart.map(product => {
        if (product.id === action.quantity.id) {
          state.listPrice.push(action.quantity.price) // if the product exists increment the quantity and multiply the price
          return { ...product, quantity: product.quantity + 1 }
        }
        return product
      })
      return {
        ...state,
        cart: state.cart
      };
    case REMOVE_QUANTITY_PRODUCT:
      console.log(action.quantity)
      state.cart = state.cart.map(product => {
        if (product.id === action.quantity.id) {
          state.listPrice.pop(action.quantity.price) // decrement quantity from product + price update
          if (product.quantity > 0){
            return { ...product, quantity: product.quantity - 1 } // the quantity must be >0
          }
        }
        return product
      })
      return {
        ...state,
      };
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
    case SET_USER_OBJECT:
      return {
        ...state,
        user: {
          lastname: state.lastname,
          firstname: state.firstname,
          email: state.email,
          phone_number: state.phone_number,
        }
      };
    case SET_ORDER_LINES:
      return {
        ...state,
        orderLines: {
          product: {
            id: action.productId,
          },
          quantity: action.productQuantity,
        }
      };
    default:
      return state;
  }

};

export default command;