//! == Import : npm
import { combineReducers } from 'redux';

//! == Import : local
import test from './test';
import header from './header';
import command from './command';

export default combineReducers({
  test,
  header,
  command,
});