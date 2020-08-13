//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import './styles.scss';
import Soda from '../../assets/images/extra/soda.jpg';
import Beer from '../../assets/images/extra/beer.jpg';
import Cake from '../../assets/images/extra/cake.jpg';

//! == Composant ==
const Extra = () => (
    <div className="extra">
        <p className="extra__title">Petits +</p>
        <div className="extra__container">
            <span className="extra__price">+1&euro;</span>
            <img src={Soda} alt="Soda" className="extra__picture"/>
            <p className="extra__text">Boisson</p>
        </div>
        <div className="extra__container">
            <span className="extra__price">+3&euro;</span>
            <img src={Beer} alt="Beer" className="extra__picture"/>
            <p className="extra__text">Bière <span className="extra__text--small">25CL</span></p>
        </div>
        <div className="extra__container--other">
            <span className="extra__price--other">+3.5&euro;</span>
            <img src={Cake} alt="Cake" className="extra__picture"/>
            <p className="extra__text--other">Madame Tarte</p>
        </div>
    </div>
);

//! == Export ==
export default Extra;
