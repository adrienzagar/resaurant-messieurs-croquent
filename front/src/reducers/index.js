//! == Import : npm
import { combineReducers } from 'redux';

//! == Import : local
import header from './header';
import command from './command';
import footer from './footer';

export default combineReducers({
  header,
  command,
  footer,
});