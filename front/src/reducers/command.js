//! == Import : local (actions)
import { ADD_PRODUCT_TO_ORDERLINES, SAVE_PRODUCT, ADD_QUANTITY_PRODUCT, REMOVE_QUANTITY_PRODUCT, SAVE_PRICE } from '../actions/product';
import { SAVE_CATEGORIES } from '../actions/categories';
import { SET_MAIL_VALUE, SET_PHONE_VALUE, SET_NAME_VALUE, SET_LASTNAME_VALUE } from '../actions/form';
import { waitForDomChange } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

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
  quantities: 0,
  orderLines: [],
  mailValue: '',
  phoneValue: '',
  nameValue: '',
  lastnameValue: '',
};

//! == Actions to modified state
const command = (state = initialState, action = {}) => {
  var uniqueProds = [];

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
    case ADD_PRODUCT_TO_ORDERLINES:
      state.orderLines.push(action.product)
      state.orderLines = state.orderLines.map(product => {
        if (product.id === action.product.id) {
          return { ...product, quantity: product.quantity == null ? 1 : product.quantity + 1 }
        }
        else {
          return product
        }
      })
      state.orderLines.map(prod => {
        console.log(prod.id)
        console.log(uniqueProds.includes(prod.id))
        if (!uniqueProds.includes(prod.id)) {
          uniqueProds.push(prod)
        }
        return uniqueProds
      }
      )
      console.log("me", uniqueProds)
      return {
        ...state,
        quantity: state.quantity + 1,
        orderLines: state.orderLines
      };
    case ADD_QUANTITY_PRODUCT:
      console.log(action.quantity)
      state.orderLines = state.orderLines.map(product => {
        if (product.id === action.quantity.id) {
          state.listPrice.push(action.quantity.price)
          return { ...product, quantity: product.quantity + 1 }
        }
        return product
      })
      return {
        ...state,
        orderLines: state.orderLines
      };
    case REMOVE_QUANTITY_PRODUCT:
      console.log(action.quantity)
      state.orderLines = state.orderLines.map(product => {
        if (product.id === action.quantity.id) {
          state.listPrice.pop(action.quantity.price)
          if (product.quantity > 0){
            return { ...product, quantity: product.quantity - 1 }
          }
        }
        return product
      })
      return {
        ...state,
        quantities: state.quantities -= 1
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
        mailValue: action.mailValue,
      };
    case SET_PHONE_VALUE:
      return {
        ...state,
        phoneValue: action.phoneValue,
      };
    case SET_NAME_VALUE:
      return {
        ...state,
        nameValue: action.nameValue,
      };
    case SET_LASTNAME_VALUE:
      return {
        ...state,
        lastnameValue: action.lastnameValue,
      };
    default:
      return state;
  }

};

export default command;