import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom'
import { returnTotalPrice } from '../../selectors/index'


import './styles.scss';

const ValidationPage = ({ cart, listPrice }) => {

    const totalPrice = returnTotalPrice(listPrice).totalPrice.toFixed(2)

    console.log(cart, totalPrice)

    const history = useHistory()

    const handleClick = (e) => {
        e.preventDefault()
        history.push('/')
        window.location.reload()
    }
    
    return(
        <div className="validation__container">
            <div className="validation__info">
                <h1 >Commande validée</h1>
                <p>Un message de validation vous a été envoyé sur votre adresse mail</p>
                <p>Votre commande est maintenant en cours de préparation, ne tardez pas à venir la récupérer</p>
            </div>
            <button className="validation__button" onClick={handleClick}> Retour à l'accueil</button>
        </div>
)};
export default ValidationPage;
