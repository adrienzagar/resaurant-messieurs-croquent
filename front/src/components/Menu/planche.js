//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import './styles.scss';
import Apero from '../../assets/images/moment/planche.jpg';

//! == Composant ==
const Planche = () => (
    <div className="planche">
        <p className="planche__text">Deux croques au choix + 1L de bière pour 2 personnes</p>
        <img src={Apero} alt="Planche Apero" className="planche__picture"/>
        <span className="planche__price">20&euro;</span>
    </div>
);

//! == Export ==
export default Planche;
