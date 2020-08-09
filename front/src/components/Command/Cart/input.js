import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Input = ({ errorMessage, ...props}) => (
  <div>
    <input classname="modal__input" {...props} />
    {errorMessage && <span className="modal__required">{errorMessage}</span>}
  </div>
);
export default Input;
