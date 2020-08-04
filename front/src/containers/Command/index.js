//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import Command from '../../components/Command';
import { getProduct, addProductToCart, savePrice } from '../../actions/product';
import { getCategories } from '../../actions/categories';
import { setMailValue, setPhoneValue, setNameValue, setLastnameValue, setUserObject } from '../../actions/form';
import { sendOrder } from '../../actions/order';


const mapStateToProps = (state, ownprops) => ({
    links: state.command.links,
    products: state.command.listProduct,
    categories: state.command.listCategories,
    listPrice: state.command.listPrice,
    quantity: state.command.quantity,
    // quantities: state.command.quantities,
    orderLines: state.command.orderLines,
    email: state.email,
    phone_number: state.phone_number,
    firstname: state.firstname,
    lastname: state.lastname,
});

const mapDispatchToProps = (dispatch, ownprops) => ({
    getProduct: () => dispatch(getProduct()),
    getCategories: () => dispatch(getCategories()),
    sendOrder: () => dispatch(sendOrder()),
    addProductToCart: (product) => dispatch(addProductToCart(product)),
    // addQuantityProduct: (quantities) => dispatch(addQuantityProduct(quantities)),
    savePrice: (price) => dispatch(savePrice(price)),
    setMailValue: (email) => dispatch(setMailValue(email)),
    setPhoneValue: (phone_number) => dispatch(setPhoneValue(phone_number)),
    setNameValue: (firstname) => dispatch(setNameValue(firstname)),
    setLastnameValue: (lastname) => dispatch(setLastnameValue(lastname)),
    setUserObject: (lastname, firstname, phone_number, email) => dispatch(setUserObject(lastname, firstname, phone_number, email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Command);