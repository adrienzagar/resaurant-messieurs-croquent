//! == Import : npm
import { combineReducers } from 'redux';

//! == Import : local
import header from './header';
import footer from './footer';

export default combineReducers({
  header,
  footer,
});