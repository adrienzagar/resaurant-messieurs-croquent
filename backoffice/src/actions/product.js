// ACTION TYPE
export const GET_PRODUCT = 'GET_PRODUCT';
export const SAVE_PRODUCT = 'SAVE_PRODUCT';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';

// ACTION CREATOR
export const getProduct = () => ({
    type: GET_PRODUCT,
  });

  export const saveProduct = (product) => ({
    type: SAVE_PRODUCT,
    product
  });

  export const getCategories = () => ({
    type: GET_CATEGORIES,
  });

  export const saveCategories = (categories) => ({
    type: SAVE_CATEGORIES,
    categories
  });