//! == Import : npm ==
import React from 'react';
import AOS from 'aos';

//! == Import : local ==
import TripadvisorMax from './TripadvisorMax';
import TripadvisorMin from './TripadvisorMin';
import 'aos/dist/aos.css';
import './styles.scss';

//! == Composant ==
const HomeTripadvisor = () => {
    AOS.init();
    return (
        <div className="homeTripadvisor">
            <h2 className="homeTripadvisor__title" data-aos="fade-up">
                Parce que votre avis compte
            </h2>
            <TripadvisorMax />
            <TripadvisorMin />
        </div>
    );
};

//! == Export ==
export default HomeTripadvisor;
