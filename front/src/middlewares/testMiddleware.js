//! == Import : npm
import axios from 'axios';

//! == Import : local (actions)

//! == Utils Axios to get JSON via API
const testMiddleware = (store) => (next) => (action) => {
  console.log(store.getState());
  console.log('Je laisse passer cette action: ', action);
      next(action);

  }

export default testMiddleware;