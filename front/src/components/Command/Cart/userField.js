import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const UserField = ({
    value,
    type,
    name,
    label,
    onChange,
  }) => {
    const handleChange = (evt) => {
        console.log(evt.target.value)
        onChange(evt.target.value, name);
    };

    const inputId = `register-field-${name}`;
    
    return(
        <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
            <label
            htmlFor={inputId}
            className="register-field-label"
            >
            {label}
            </label>
            <input
            value={value}
            onChange={handleChange}
            id={inputId}
            type={type}
            className="register-field-input"
            placeholder={label}
            name={name}
        />
        </div>
)}

UserField.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

UserField.defaultProps = {
value: '',
type: 'text',
};

export default UserField;
