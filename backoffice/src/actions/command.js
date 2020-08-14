// ACTION TYPE
export const GET_COMMAND = 'GET_COMMAND';
export const SAVE_COMMAND = 'SAVE_COMMAND';
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const SAVE_ID = 'SAVE_ID';

// ACTION CREATOR
export const getCommand = () => ({
    type: GET_COMMAND,
  });

  export const saveCommand = (command) => ({
    type: SAVE_COMMAND,
    command
  });

  export const changeStatus = () => ({ 
    type: CHANGE_STATUS,
  });

  export const saveId = (id) => ({
    type: SAVE_ID,
    id
  })