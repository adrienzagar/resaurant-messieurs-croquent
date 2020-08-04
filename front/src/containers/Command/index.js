//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import Command from '../../components/Command';
import { getProduct, addProductToCart, addQuantityProduct, savePrice, removeQuantityProduct } from '../../actions/product';
import { getCategories } from '../../actions/categories';
import { setMailValue, setPhoneValue, setNameValue, setLastnameValue } from '../../actions/form';


const mapStateToProps = (state, ownprops) => ({
    links: state.command.links,
    products: state.command.listProduct,
    categories: state.command.listCategories,
    listPrice: state.command.listPrice,
    quantity: state.command.quantity,
    quantities: state.command.quantities,
    cart: state.command.cart,
    mailValue: state.mailValue,
    phoneValue: state.phoneValue,
    nameValue: state.nameValue,
    lastnameValue: state.lastnameValue,
});

const mapDispatchToProps = (dispatch, ownprops) => ({
    getProduct: () => dispatch(getProduct()),
    getCategories: () => dispatch(getCategories()),
    addProductToCart: (product) => dispatch(addProductToCart(product)),
    addQuantityProduct: (quantity,id) => dispatch(addQuantityProduct(quantity,id)),
    removeQuantityProduct: (quantity,id) => dispatch(removeQuantityProduct(quantity,id)),
    savePrice: (price) => dispatch(savePrice(price)),
    setMailValue: (mailValue) => dispatch(setMailValue(mailValue)),
    setPhoneValue: (phoneValue) => dispatch(setPhoneValue(phoneValue)),
    setNameValue: (nameValue) => dispatch(setNameValue(nameValue)),
    setLastnameValue: (lastnameValue) => dispatch(setLastnameValue(lastnameValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Command);