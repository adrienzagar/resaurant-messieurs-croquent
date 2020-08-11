//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Input = ({ errorMessage, placeholder, ...props}) => {
    return(
    <>
        <input placeholder={placeholder} className='form__input' {...props} />
        {errorMessage && <span className="form__error">{errorMessage}</span>}
    </>
)};

//! == Export ==
export default Input;
