import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form'
import Input from './input'

import './styles.scss';

const renderInput = ({ input, meta }) => (
    <Input {...input} type="text" errorMessage={meta.touched && meta.error} />
)

const onSubmit = values => { 
    alert(JSON.stringify(values))
}

const requiredFirstName = value => {
    if (!value || value ==='') {
        return 'Ce champ est requis';
    }
    if (!value || value.length < 2 ) { // firstname should have at least two characters
        return 'Votre prénom doit comporter au moins 2 lettres'
    }
    return undefined;
}

const requiredLastname = value => {
    if (!value || value ==='') {
        return 'Ce champ est requis';
    }
    if (!value || value.length < 2 ) { // lastname should have at least two characters
        return 'Votre nom doit comporter au moins 2 lettres'
    }
    return undefined;
}

const requiredPhoneNumber = value => {
    const phoneNumberRegex = /^[0-9]{10}$/ // Regex thath accept only ten number format 
    if (!value || value === '') {
        return 'Ce champ est requis';
    }

    if (!value || !phoneNumberRegex.test(value)) { // If regex doest match with value return message error
        return 'Veuillez entrer un numéro de téléphone valide'
    }
    return undefined;
}

const requiredEmail = value => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ // Regex that accept only format equal to "exemple@exemple.exemple"
    if (!value || value ==='') {
        return 'Ce champ est requis';
    }
    if (!value || !emailRegex.test(value) ) { // If regex doest match with value return message error
        return 'Votre adresse email doit être valide'
    }
    return undefined;
}

const ValidationForm = ({ handleSumbit, valid }) => (
  <div>
    <form className="modal__form" onSubmit={handleSumbit} action="">
        <div className="modal__container">
            <i class="fas fa-user"></i>
            <span className="modal__required">*</span>
            <Field
            name="lastname"
            component={renderInput}
            validate={requiredLastname}
            placeholder="Nom"
            />
        </div>
        <div className="modal__container">
            <i class="fas fa-user"></i>
            <span className="modal__required">*</span>
            <Field
            placeholder="Prénom"
            name="firstname"
            component={renderInput}
            validate={requiredFirstName}
            />
        </div>
        <div className="modal__container">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <span className="modal__required">*</span>
            <Field
            placeholder="Adresse email"
            name="email"
            component={renderInput}
            validate={requiredEmail}
            />
        </div>
        <div className="modal__container">
            <i className="fas fa-phone-alt"></i>
            <span className="modal__required">*</span>
            <Field
            placeholder="Téléphone"
            name="phone_number"
            component={renderInput}
            validate={requiredPhoneNumber}
            />
        </div>
        <div className="modal__container">
            <i class="fas fa-comment"></i>
                <Field
                placeholder="Commentaire"
                name="comment"
                component={renderInput}
                />
        </div>
        <p className="modal__text">* Les champs sont obligatoires</p>
        <button disabled={!valid} className="modal__submit"  type="submit">Valider votre commande</button>
    </form>
  </div>
);

export default reduxForm({
    form: 'ValidationForm',
    onSubmit
}) (ValidationForm);

