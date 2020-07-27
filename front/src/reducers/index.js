//! == Import : npm
import { combineReducers } from 'redux';

//! == Import : local

import test from './test';
import header from './header';
import footer from './footer';

export default combineReducers({
  test,
  header,
  footer,
});