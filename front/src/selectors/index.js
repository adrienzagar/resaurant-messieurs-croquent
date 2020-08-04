export const returnTotalPrice = (listPrice) => {
    let totalPrice = 0;
    if (listPrice) {
        listPrice.map(price => (
            totalPrice += price
        ))
    }
    return {
        totalPrice
    };
};