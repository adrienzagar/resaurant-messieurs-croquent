// ACTION TYPE
export const SEND_ORDER = 'SEND_ORDER';
export const SAVE_USER = 'SAVE_USER';

// ACTION CREATOR
export const sendOrder = () => ({
    type: SEND_ORDER,
});

export const saveUser = (values) => ({
    type: SAVE_USER,
    values,
});