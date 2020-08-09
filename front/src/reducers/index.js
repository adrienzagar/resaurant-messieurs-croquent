//! == Import : npm
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

//! == Import : local
import header from './header';
import home from './home';
import command from './command';
import footer from './footer';

export default combineReducers({
  header,
  home,
  form: formReducer,
  command,
  footer,
});