// ACTION TYPE
export const GET_PRODUCT = 'GET_PRODUCT';
export const SAVE_PRODUCT = 'SAVE_PRODUCT';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';

// ACTION CREATOR
export const getProduct = () => ({
    type: GET_PRODUCT,
  });

  export const saveProduct = (product) => ({
    type: SAVE_PRODUCT,
    product,
  });

  export const addProductToCart = (product) => ({
    type: ADD_PRODUCT_TO_CART,
    product,
    quantity: 1
  });
