//! == Import : npm
// import axios from 'axios';

//! == Import : local (actions)

//! == Utils Axios for recupered JSON via API
const testMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    default:
      next(action);
      break;
  }
};

export default testMiddleware;