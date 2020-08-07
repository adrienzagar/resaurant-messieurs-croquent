//! == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

//! == Import : local
import rootReducer from '../reducers';
import productMiddleware from '../middlewares/productMiddleware';
import commandMiddleware from '../middlewares/commandMiddleware';
import logMiddleware from '../middlewares/logMiddleware';
import openCloseMiddleware from '../middlewares/openCloseMiddleware';

//! == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    productMiddleware,
    commandMiddleware,
    logMiddleware,
    openCloseMiddleware,
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