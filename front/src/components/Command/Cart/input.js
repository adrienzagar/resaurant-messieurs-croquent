//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Input = ({ errorMessage, placeholder, type, ...props}) => {
    return(
    <>
        <input placeholder={placeholder} type={type} className="form__input" {...props} />
        {errorMessage && <span className="form__error">{errorMessage}</span>}
    </>
)};

//! == Export ==
export default Input;
