//! == Import : npm
import { combineReducers } from 'redux';

//! == Import : local
import login from './login';
import sidebar from './sidebar';

export default combineReducers({
  login,
  sidebar,
});