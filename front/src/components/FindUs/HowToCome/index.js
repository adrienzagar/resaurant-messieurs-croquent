//! == Import : npm ==
import React from 'react' ;
import AOS from 'aos';

//! == Import : local ==
import 'aos/dist/aos.css';
import './styles.scss' ;

//! == Composant ==
const HowToCome = () => {
    AOS.init();
    return (
        <div className="howToCome">
            <h2 className="howToCome__title" data-aos="fade-right">VENIR EN TRANSPORT EN COMMUN</h2>
            <div className="howToCome__container" data-aos="fade-left">
                <i className="fa fa-subway" aria-hidden="true"></i>
                <p className="howToCome__text">Ligne B - Arret Musée d'Aquitaine</p>
            </div>
        </div>
    );
};

export default HowToCome ;