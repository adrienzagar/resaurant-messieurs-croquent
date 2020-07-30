//! == Import : npm ==
import React from 'react';
import AOS from 'aos';

//! == Import : local ==
import 'aos/dist/aos.css';
import './styles.scss' ;

//! == Composant ==
const CardComponent = () => {
    AOS.init();
    return (
        <div className="cardComponent" data-aos="fade-right">
            <h2 className="cardComponent__title">MESSIEURS CROQUENT</h2>
            <div className="cardComponent__infos">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cardComponent__detail">
                    <p className="cardComponent__text">25 Cour Pasteur</p>
                    <p className="cardComponent__text">33 000 Bordeaux</p>
                </div>
            </div>
            <div className="cardComponent__infos">
                <i className="fas fa-phone-alt"></i>
                <a href="tel:+33557309139" className="cardComponent__text">05 57 30 91 39</a>
            </div>
            <div className="cardComponent__infos">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <p className="cardComponent__text">contact@messieurscroquent.fr</p>
            </div>
            <div className="cardComponent__infos">
                <i className="fa fa-clock" aria-hidden="true"></i> 
                <div className="cardComponent__detail">
                    <p className="cardComponent__text">OUVERT DU LUNDI AU SAMEDI</p>
                    <p className="cardComponent__text">10:30 - 14:30 / 18:30 - 22:00</p>
                    <p className="cardComponent__text"> FERMÉ LE DIMANCHE</p>
                </div>
            </div>
        </div>
    );
};
export default CardComponent;