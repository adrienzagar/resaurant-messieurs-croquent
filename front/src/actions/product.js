// ACTION TYPE
export const GET_PRODUCT = 'GET_PRODUCT';
export const SAVE_PRODUCT = 'SAVE_PRODUCT';
export const ADD_PRODUCT_TO_ORDERLINES = 'ADD_PRODUCT_TO_ORDERLINES';
export const ADD_QUANTITY_PRODUCT = 'ADD_QUANTITY_PRODUCT';
export const REMOVE_QUANTITY_PRODUCT = 'REMOVE_QUANTITY_PRODUCT';
export const SAVE_PRICE = 'SAVE_PRICE';

// ACTION CREATOR
export const getProduct = () => ({
    type: GET_PRODUCT,
  });

  export const saveProduct = (listProduct) => ({
    type: SAVE_PRODUCT,
    listProduct
  });

  export const addProductToCart = (product) => ({
    type: ADD_PRODUCT_TO_ORDERLINES,
    product,
    quantity: 1
    }
  );
  
  export const addQuantityProduct = (quantity) => ({
    type: ADD_QUANTITY_PRODUCT,
    quantity,
  })
  export const removeQuantityProduct  = (quantity) => ({
    type: REMOVE_QUANTITY_PRODUCT,
    quantity,
  })

  export const savePrice = (price) => ({
    type: SAVE_PRICE,
    price,
  })