// ACTION TYPE
export const GET_PRODUCT = 'GET_PRODUCT';
export const SAVE_PRODUCT = 'SAVE_PRODUCT';
export const ADD_PRODUCT_FROM_CART = 'ADD_PRODUCT_FROM_CART';
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

  export const addProductToCart = (product,id) => ({
    type: ADD_PRODUCT_FROM_CART,
    product,
    quantity: 1,
    id
    }
  );
  
  export const addQuantityProduct = (quantity,id) => ({
    type: ADD_QUANTITY_PRODUCT,
    quantity,
    id
  })
  export const removeQuantityProduct  = (quantity,id) => ({
    type: REMOVE_QUANTITY_PRODUCT,
    quantity,
    id
  })

  export const savePrice = (price) => ({
    type: SAVE_PRICE,
    price,
  })

