//! == Import : npm ==
import React from 'react';
import { reduxForm, Field } from 'redux-form'
import { useHistory } from "react-router-dom";

import Input from './input'

//! == Import : local ==
import './styles.scss';

//! == Condition Required Form ==
const renderInput = ({ input, meta, placeholder, type }) => ( //Display <Input /> component that have props
    <Input {...input}  placeholder={placeholder} type={type} errorMessage={meta.touched && meta.error} />
)
const onSubmit = values => { 
    alert(JSON.stringify(values))
}
const requiredFirstName = value => {
    // const nameRegex = /[^0-9]/
    if (!value || value ==='') { //Field should not be empty, otherwise send message error
        return 'Ce champ est requis';
    }
    if (!value || !isNaN(value)) {
        return 'Le prénom est incorrect'
    }
    return undefined;
}
const requiredLastname = value => {
    // const nameRegex = /[^0-9]/
    if (!value || value ==='') { //Field should not be empty, otherwise send message error
        return 'Ce champ est requis';
    }
    if (!value || !isNaN(value)) {
        return 'Le nom est incorrect'
    }
    return undefined;
}
const requiredPhoneNumber = value => {
    const phoneNumberRegex = /^[0][0-9]{9}$/ // Regex that accept only ten number format and first character must be equal to 0
    if (!value || value === '') { //Field should not be empty, otherwise send message error
        return 'Ce champ est requis';
    }

    if (!value || !phoneNumberRegex.test(value)) { // If regex doest match with value return message error
        return 'Veuillez entrer un numéro de téléphone valide'
    }
    return undefined;
}
const requiredEmail = value => {
    const emailRegex = /^[\w-\:.]+@([\w-]+\.)+[\w-]{2,4}$/ // Regex that accept only format equal to "exemple@exemple.exemple"
    if (!value || value ==='') { //Field should not be empty, otherwise send message error
        return 'Ce champ est requis';
    }
    if (!value || !emailRegex.test(value) ) { // If regex doest match with value return message error
        return 'Votre adresse email doit être valide'
    }
    return undefined;
}

//! == Composant ==
const ValidationForm = ({ valid, sendOrder }) => {
  const history = useHistory();

    const handleSubmiting = (event) => {
        event.preventDefault();
        history.push("/validation")
        sendOrder();
    }
    return (
        <form className="form" onSubmit={handleSubmiting} action="">
            <div className="form__container">
                <i class="fas fa-user"></i>
                <span className="form__required">*</span>
                <div className="form__column">
                    <Field
                        name="lastname"
                        placeholder="Nom"
                        type="text"
                        component={renderInput}
                        validate={requiredLastname}
                    />
                </div>
            </div>
            <div className="form__container">
                <i class="fas fa-user"></i>
                <span className="form__required">*</span>
                <div className="form__column">
                    <Field
                        placeholder="Prénom"
                        name="firstname"
                        type="text"
                        component={renderInput}
                        validate={requiredFirstName}
                    />
                </div>
            </div>
            <div className="form__container">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span className="form__required">*</span>
                <div className="form__column">
                    <Field
                        placeholder="Adresse email"
                        name="email"
                        type="email"
                        component={renderInput}
                        validate={requiredEmail}
                    />
                </div>
            </div>
            <div className="form__container">
                <i className="fas fa-phone-alt"></i>
                <span className="form__required">*</span>
                <div className="form__column">
                    <Field
                        placeholder="Téléphone"
                        name="phone_number"
                        type="tel"
                        component={renderInput}
                        validate={requiredPhoneNumber}
                    />
                </div>
            </div>
            <div className="form__container">
                <i class="fas fa-comment"></i>
                <div className="form__column">
                    <Field
                        placeholder="Commentaire"
                        name="comment"
                        type="text"
                        component={renderInput}
                    />
                </div>
            </div>
            <p className="form__text">* Les champs sont obligatoires</p>
            <button disabled={!valid} className="form__submit" type="submit">Valider votre commande</button>
        </form>
    );
}

//! == Export ==
export default reduxForm({ form: 'ValidationForm', onSubmit })(ValidationForm);

