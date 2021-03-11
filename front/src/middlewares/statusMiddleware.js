//! == Import : npm
import axios from 'axios';

//! == Import : local (actions)
import { GET_STATUS, saveStatus } from '../actions/status';

//! == Utils Axios for recupered JSON via API
const categoriesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_STATUS:
      axios.get(`${process.env.REACT_APP_BASE_URL}/api/api/store/1`)
        .then((response) => {
          store.dispatch(saveStatus(response.data.status));
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