//! == Import : npm
import axios from 'axios';

//! == Import : local (actions)
import { GET_COMMAND, CHANGE_STATUS, saveCommand, changeStatus } from '../actions/command';

//! == Utils Axios for recupered JSON via API
const commandMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_COMMAND:
      axios.get(`${process.env.REACT_APP_BASE_URL}order`)
        .then((response) => {
          store.dispatch(saveCommand(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
      case CHANGE_STATUS:
        const state = store.getState();
        const { idCommand } = state.command;
        axios.put(`${process.env.REACT_APP_BASE_URL}order/${idCommand}`, {
          status: 2,
        })
          .then((response) => {
            console.log(response, "response");
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