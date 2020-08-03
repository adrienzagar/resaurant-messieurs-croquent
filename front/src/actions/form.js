export const SET_MAIL_VALUE = 'SET_MAIL_VALUE';
export const SET_PHONE_VALUE = 'SET_PHONE_VALUE';
export const SET_NAME_VALUE = 'SET_NAME_VALUE';
export const SET_LASTNAME_VALUE = 'SET_LASTNAME_VALUE';

// ACTION CREATOR
export const setMailValue = (mailValue) => ({
    type: SET_MAIL_VALUE,
    mailValue
  });

export const setPhoneValue = (phoneValue) => ({
    type: SET_PHONE_VALUE,
    phoneValue
});

export const setNameValue = (nameValue) => ({
    type: SET_NAME_VALUE,
    nameValue
});

export const setLastnameValue = (lastnameValue) => ({
    type: SET_LASTNAME_VALUE,
    lastnameValue
});