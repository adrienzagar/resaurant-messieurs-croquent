// ACTION TYPE
export const GET_CONNECT = 'GET_CONNECT';
export const GET_LOGIN = 'GET_LOGIN';
export const GET_LOGOUT = 'GET_LOGOUT';
export const SET_USERNAME_VALUE = 'SET_USERNAME_VALUE';
export const SET_PASSWORD_VALUE = 'SET_PASSWORD_VALUE';

// ACTION CREATOR
export const getConnect = () => ({
    type: GET_CONNECT,
  });

export const getLogin = () => ({
  type: GET_LOGIN,
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
})
