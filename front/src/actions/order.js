export const SEND_ORDER = 'SEND_ORDER';
export const SET_ORDER_LINES = 'SET_ORDER_LINES';

export const sendOrder = () => ({
    type: SEND_ORDER,
})

export const setOrderLines = (productId, productQuantity) => ({
    type: SET_ORDER_LINES,
    productId,
    productQuantity,
})