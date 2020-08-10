import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom'

import './styles.scss';

const ValidationPage = () => {
    const history = useHistory()
    const handleClick = (e) => {
        e.preventDefault()
        history.push('/')
        
    }
    return(
        <div className="validation__container">
            Commande Validé !!
            <button className="validation__button" onClick={handleClick}> Retour à l'accueil</button>
        </div>
)};
export default ValidationPage;
