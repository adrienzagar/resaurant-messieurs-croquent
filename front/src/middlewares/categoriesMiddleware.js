//! == Import : npm
import axios from 'axios';

//! == Import : local (actions)
import { GET_CATEGORIES, saveCategories } from '../actions/categories';

//! == Utils Axios for recupered JSON via API
const categoriesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      axios.get('http://localhost/Fantasy/apotheose/sandwicherie/back/sandwicherieBack/public/api/categories')
        .then((response) => {
          // console.log(response.data);
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

export default categoriesMiddleware;