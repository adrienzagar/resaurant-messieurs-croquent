export const SET_USER_OBJECT = 'SET_USER_OBJECT';
export const CHANGE_FIELD = 'CHANGE_FIELD';

// ACTION CREATOR

export const changeField = (value, name) => ({
    type: CHANGE_FIELD,
    name,
    value,
  });
  

export const setUserObject = (lastname, firstname, phone_number, email) => ({
    type: SET_USER_OBJECT,
    lastname,
    firstname,
    phone_number,
    email
})