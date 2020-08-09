import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Input = ({ errorMessage, ...props}) => {
    return(
    <>
    <input className='modal__input' {...props} />
    {errorMessage && <span className="modal__error">{errorMessage}</span>}
    </>
)};
export default Input;
