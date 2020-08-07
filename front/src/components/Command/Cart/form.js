import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';



const FormToSubmit = ({ 
    email, 
    phone_number,
    firstname,
    lastname,
    comment,
    setMailValue,
    setPhoneValue,
    setNameValue,
    setLastnameValue,
    setCommentValue,
    sendOrder,
    setUserObject,
}) => {
    const handleOnLastnameChange  = (event) => {
        setLastnameValue(event.target.value)
    }
    const handleOnNameChange  = (event) => {
        setNameValue(event.target.value)
    }
    const handleOnMailChange = (event) => {
        setMailValue(event.target.value)
    }
    const handleOnPhoneChange  = (event) => {
        setPhoneValue(event.target.value)
    }
    const handleOnCommentChange = (event) => {
        setCommentValue(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setUserObject(lastname, firstname, phone_number, email)
        sendOrder();
    }
    return(

  <div>


    <Formik

      initialValues={{ email: email, lastname: lastname, firstname: firstname, phone_number: phone_number, comment: comment }}

      validate={values => {

        const errors = {};

        if (!values.email) {

          errors.email = 'Un email valide est requis pour passer le commande';

        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Adresse email invalide';
        }
        if (values.lastname === '') {
            errors.lastname = 'Un nom est requis pour passer la commande';
        }
        if (values.firstname === '') {
             errors.firstname = 'Un prénom est requis pour passer la commande';
        }
        if (values.phone_number === '') {
            errors.phone_number = 'Vous devez rentrez un numéro de téléphone valide';
       }
       if (!values.comment) {
        errors.comment = 'Le commentaire est facultatif';
   }
        return errors;

      }}
      onSubmit={(values, { setSubmitting }) => {

        setTimeout(() => {

          alert(JSON.stringify(values, null, 2));

          setSubmitting(false);

        }, 400);

      }}

    >

      {({ errors, touched, isValidating }) => (

        <Form onSubmit={handleSubmit}>
        <div className="form__container">
            <label htmlFor="lastname">Nom</label>
            <Field name="lastname" as="input" value={lastname} onChange={handleOnLastnameChange} />
            {errors.lastname && touched.lastname ? <div>{errors.lastname}</div> : null}
        </div>
        <div className="form__container">
            <label htmlFor="name">Prénom</label>
            <Field name="firstname" as="input" value={firstname} onChange={handleOnNameChange} />
            {errors.firstname && touched.firstname ? <div>{errors.firstname}</div> : null}
        </div>
        <div className="form__container">
            <label htmlFor="email">Email</label>
            <Field name="email" as="input" value={email} onChange={handleOnMailChange} />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
        </div>
        <div className="form__container">
            <label htmlFor="phone">Téléphone</label>
            <Field name="phone_number" as="input" value={phone_number} onChange={handleOnPhoneChange} />
            {errors.phone_number && touched.phone_number ? <div>{errors.phone_number}</div> : null}
        </div>
        <div className="form__container">
            <label htmlFor="comment">Commentaire</label>
            <Field name="comment" as="input" value={comment} onChange={handleOnCommentChange} />
            {errors.comment && touched.comment ? <div>{errors.comment}</div> : null}
        </div>

        <button className="form__submit"  type="submit disabled={isSubmitting}">Valider votre commande</button>
        </Form>

      )}

    </Formik>

  </div>

)};



export default FormToSubmit;