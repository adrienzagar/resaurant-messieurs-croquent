//! == Import : npm ==
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { returnTotalPrice } from '../../selectors/index'

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const ValidationPage = ({ cart, user, listPrice }) => {
    useEffect(() => { document.title = "Messieurs Croquent - Validation"; }, []);
    const totalPrice = returnTotalPrice(listPrice).totalPrice.toFixed(2);
    const history = useHistory();
    const handleClick = (evt) => {
        evt.preventDefault();
        history.push('/');
        window.location.reload();
    };
    return(
        <div className="validation">
            <div className="validation__container">
                <p className="validation__success">Commande validée</p>
                <p className="validation__text">Un message de validation vous a été envoyé à l'adresse suivante : <span className="validation__bold">{user.email}</span></p>
                <p className="validation__text">Votre commande est en cours de préparation, ne tardez pas à venir la récupérer.</p>
                <p className="validation__underline">Récapitulatif de votre commande :</p>
                {cart.map((product) => (
                    <p className="validation__product">{product.quantity} {product.name}</p>
                ))}
                <p className="validation__text">Prix total à régler sur place : <span className="validation__bold">{totalPrice}&euro;</span></p>
                <button className="validation__button" onClick={handleClick}> Retour à l'accueil</button>
            </div>
        </div>
    );
};

//! == Export ==
export default ValidationPage;
