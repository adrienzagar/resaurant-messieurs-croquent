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

const ValidationForm = ({ handleSumbit, valid, sendOrder }) => (
  <div>
    <form className="modal__form" onSubmit={handleSumbit} action="">
    <div className="modal__container">
        <i class="fas fa-user"></i>
        <span className="modal__required">*</span>
            <Field
            name="lastname"
            component={renderInput}
            validate={required}
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
        validate={required}
        />
    </div>
    <div className="modal__container">
        <i className="fa fa-envelope" aria-hidden="true"></i>
        <span className="modal__required">*</span>
        <Field
        placeholder="Adresse email"
        name="email"
        component={renderInput}
        validate={required}
        />
    </div>
    <div className="modal__container">
        <i className="fas fa-phone-alt"></i>
        <span className="modal__required">*</span>
        <Field
        placeholder="Téléphone"
        name="phone_number"
        component={renderInput}
        validate={required}
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
    </form>
  </div>
);

export default reduxForm({
    form: 'ValidationForm',
    onSubmit
}) (ValidationForm);

