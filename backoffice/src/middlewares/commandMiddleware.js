//! == Import : npm
import axios from 'axios';

//! == Import : local (actions)
import { GET_COMMAND, saveCommand } from '../actions/command';

//! == Utils Axios for recupered JSON via API
const commandMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_COMMAND:
      axios.get('http://ec2-54-160-78-162.compute-1.amazonaws.com/api/api/order')
        .then((response) => {
          console.log(response.data, "response");
          store.dispatch(saveCommand(response.data));
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

export default commandMiddleware;