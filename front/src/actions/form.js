export const SET_MAIL_VALUE = 'SET_MAIL_VALUE';
export const SET_PHONE_VALUE = 'SET_PHONE_VALUE';
export const SET_NAME_VALUE = 'SET_NAME_VALUE';
export const SET_LASTNAME_VALUE = 'SET_LASTNAME_VALUE';

// ACTION CREATOR
export const setMailValue = (email) => ({
    type: SET_MAIL_VALUE,
    email
  });

export const setPhoneValue = (phone_number) => ({
    type: SET_PHONE_VALUE,
    phone_number
});

export const setNameValue = (firstname) => ({
    type: SET_NAME_VALUE,
    firstname
});

export const setLastnameValue = (lastname) => ({
    type: SET_LASTNAME_VALUE,
    lastname
});