//! == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

//! == Import : local
import rootReducer from '../reducers';
import productMiddleware from '../middlewares/productMiddleware';
import categoriesMiddleware from '../middlewares/categoriesMiddleware';
import sendOrderMiddleware from '../middlewares/sendOrderMiddleware';
import statusMiddleware from '../middlewares/statusMiddleware';

//! == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    productMiddleware,
    categoriesMiddleware,
    sendOrderMiddleware,
    statusMiddleware,
  ),
);

//! == Store
const store = createStore(
  rootReducer,
  //? preloadedState,
  enhancers,
);

//! == Export
export default store;