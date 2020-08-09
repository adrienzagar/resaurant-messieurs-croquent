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
    // sendOrder()
}

const required = v => {
    if (!v || v ==='') {
        return 'Ce champs est requis';
    }
    return undefined;
}

// const checkEmail = v => {
//     const regex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/
//     if(v !== regex) {
//         return 'Veuillez entrer une adress email valide'
//     }
//     return undefined
// }

const Testform = ({ handleSumbit, valid, sendOrder }) => (
  <div>
    <form className="modal__form" onSubmit={handleSumbit} action="">
    <div className="modal__container">
    <label htmlFor="lastname">Nom</label>
    <i class="fas fa-user"></i>
    <span className="modal__required">*</span>
        <Field
        name="lastname"
        component={renderInput}
        validate={required}
        />
    </div>
    <div className="modal__container">
    <label htmlFor="name">Prénom</label>
        <Field
        name="firstname"
        component={renderInput}
        validate={required}
        />
    </div>
    <div className="modal__container">
    <label htmlFor="name">Adresse email</label>
        <Field
        name="email"
        component={renderInput}
        validate={required}
        />
    </div>
    <div className="modal__container">
    <label htmlFor="name">Téléphone</label>
        <Field
        name="phone_number"
        component={renderInput}
        validate={required}
        />
    </div>
    <div className="modal__container">
    <label htmlFor="name">Commentaire</label>
        <Field
        name="comment"
        component={renderInput}
        />
    </div>
        <button className="form__submit" disabled={!valid} type="submit">Valider votre commande</button>
    </form>
  </div>
);

export default reduxForm({
    form: 'TestForm',
    onSubmit
}) (Testform);

