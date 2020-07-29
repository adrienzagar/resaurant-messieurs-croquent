//! == Import : npm
import axios from 'axios';

//! == Import : local (actions)
import { GET_PRODUCT, saveProduct } from '../actions/product';

//! == Utils Axios for recupered JSON via API
const productMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PRODUCT:
      axios.get('http://localhost:8000/api/products')
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveProduct(response.data));
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