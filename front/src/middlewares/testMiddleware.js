//! == Import : npm
import axios from 'axios';

//! == Import : local (actions)

const testMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    default:
      next(action);
      break;
  }
};

export default testsMiddleware;