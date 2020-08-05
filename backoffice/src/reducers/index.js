//! == Import : npm
import { combineReducers } from 'redux';

//! == Import : local
import login from './login';
import header from './header';
import sidebar from './sidebar';
import product from './product';
import command from './command';

export default combineReducers({
  login,
  header,
  sidebar,
  product,
  command,
});