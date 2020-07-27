//! == Import : npm
import { combineReducers } from 'redux';

//! == Import : local
import test from './test';
import header from './header';

export default combineReducers({
  test,
  header,
});