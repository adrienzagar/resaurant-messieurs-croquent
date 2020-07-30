//! == Import : npm ==
import React from 'react';
import AOS from 'aos';

//! == Import : local ==
import 'aos/dist/aos.css';
import './styles.scss';

//! == Composant ==
const Reservation = () => {
    AOS.init();
    return (
        <div className="reservation" data-aos="fade-up">
            <h2 className="reservation__title">UN ÉVÊNEMENT À ORGANISER ?</h2> 
            <h2 className="reservation__title">PRIVATISER LE RESTAURANT ?</h2>
            <p className="reservation__text">Contactez nous via mail à l'adresse notée ci-dessus et racontez-nous votre projet</p>
        </div>
    );
};

export default Reservation;