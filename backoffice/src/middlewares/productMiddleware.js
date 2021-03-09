//! == Import : npm
import axios from 'axios';

//! == Import : local (actions)
import { GET_PRODUCT, saveProduct, GET_CATEGORIES, saveCategories } from '../actions/product';

//! == Utils Axios for recupered JSON via API
const productMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PRODUCT:
      axios.get(`${process.env.REACT_APP_BASE_URL}products`)
        .then((response) => {
          store.dispatch(saveProduct(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case GET_CATEGORIES:
      axios.get(`${process.env.REACT_APP_BASE_URL}categories`)
        .then((response) => {
          store.dispatch(saveCategories(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      next(action);
      break;
  }
};

export default productMiddleware;