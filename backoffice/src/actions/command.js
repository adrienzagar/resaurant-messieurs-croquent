// ACTION TYPE
export const GET_COMMAND = 'GET_COMMAND';
export const SAVE_COMMAND = 'SAVE_COMMAND';

// ACTION CREATOR
export const getCommand = () => ({
    type: GET_COMMAND,
  });

  export const saveCommand = (command) => ({
    type: SAVE_COMMAND,
    command
  });