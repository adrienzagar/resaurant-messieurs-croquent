// ACTION TYPE
export const GET_CONNECT = 'GET_CONNECT';
export const GET_LOGIN = 'GET_LOGIN';
export const GET_LOGOUT = 'GET_LOGOUT';

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