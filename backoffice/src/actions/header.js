// ACTION TYPE
export const GET_LOGOUT = 'GET_LOGOUT';
export const EDIT_STATUS = 'EDIT_STATUS';
export const GET_STATUS = 'GET_STATUS';
export const SAVE_STATUS = 'SAVE_STATUS';
export const MODIFY_STATUS = 'MODIFY_STATUS';

// ACTION CREATOR
export const getLogout = () => ({
  type: GET_LOGOUT,
});

export const editStatus = () => ({
    type: EDIT_STATUS,
  });

  export const getStatus = () => ({
    type: GET_STATUS,
  });

  export const saveStatus = (status, bool) => (
    console.log(status, "status action", bool, "isOpen action"),
    {
    type: SAVE_STATUS,
    status,
    bool,
  });

  export const modifyStatus = (status, bool) => ({
    type: MODIFY_STATUS,
    status,
    bool,
  });