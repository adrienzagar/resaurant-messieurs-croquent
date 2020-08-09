// ACTION TYPE
export const GET_LOGIN = 'GET_LOGIN';
export const GET_LOGGED = 'GET_LOGGED';
export const CHECK_IS_LOGGED = 'CHECK_IS_LOGGED';
export const ERROR_LOGGED = 'ERROR_LOGGED';
export const GET_LOGOUT = 'GET_LOGOUT';
export const SET_USERNAME_VALUE = 'SET_USERNAME_VALUE';
export const SET_PASSWORD_VALUE = 'SET_PASSWORD_VALUE';

// ACTION CREATOR
export const getLogin = () => ({
  type: GET_LOGIN,
});

export const getLogged = () => ({
  type: GET_LOGGED,
});

export const checkIsLogged = () => ({
  type: CHECK_IS_LOGGED,
});

export const errorLogged = () => ({
  type: ERROR_LOGGED,
});

export const getLogout = () => ({
  type: GET_LOGOUT,
});

export const setUsernameValue = (username) => ({
  type: SET_USERNAME_VALUE,
  username,
});

export const setPasswordValue = (password) => ({
  type: SET_PASSWORD_VALUE,
  password
});
