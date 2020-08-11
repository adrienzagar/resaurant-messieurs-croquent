// ACTION TYPE
export const GET_STATUS = 'GET_STATUS';
export const SAVE_STATUS = 'SAVE_STATUS';

// ACTION CREATOR
export const getStatus = () => ({
    type: GET_STATUS,
  });

  export const saveStatus = (status) => ({
    type: SAVE_STATUS,
    status
  });