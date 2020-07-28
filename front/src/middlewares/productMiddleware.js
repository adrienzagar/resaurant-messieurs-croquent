//! == Import : npm
import axios from 'axios';

//! == Import : local (actions)
import { GET_PRODUCT, saveProduct } from '../actions/product';

//! == Utils Axios for recupered JSON via API
const productMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PRODUCT:
      axios.get('192.168.56.101/Fantasy/projet-perso/sandwicherie/back/sandwicherieBack/public/api/products')
        .then((response) => {
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