//! == Import : npm
import { combineReducers } from 'redux';

//! == Import : local
import header from './header';
import home from './home';
import command from './command';
import footer from './footer';

export default combineReducers({
  header,
  home,
  command,
  footer,
});