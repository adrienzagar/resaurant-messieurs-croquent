// ACTION TYPE
export const GET_LOGOUT = 'GET_LOGOUT';
export const GET_OPENCLOSE = 'GET_OPENCLOSE';
export const EDIT_STATUS = 'EDIT_STATUS';
export const GET_STATUS = 'GET_STATUS';
export const SAVE_STATUS = 'SAVE_STATUS';
export const MODIFY_STATUS = 'MODIFY_STATUS';

// ACTION CREATOR
export const getLogout = () => ({
  type: GET_LOGOUT,
});

export const getOpenClose = () => ({
    type: GET_OPENCLOSE,
  });

export const editStatus = () => ({
    type: EDIT_STATUS,
  });

  export const getStatus = () => ({
    type: GET_STATUS,
  });

  export const saveStatus = (status) => ({
    type: SAVE_STATUS,
    status,
  });

  export const modifyStatus = () => ({
    type: MODIFY_STATUS,
  });