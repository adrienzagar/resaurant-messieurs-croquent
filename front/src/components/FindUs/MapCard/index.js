//! == Import : npm ==
import React from 'react';
import AOS from 'aos';

//! == Import : local ==
import 'aos/dist/aos.css';
import './styles.scss';

//! == Composant ==
const MapCard = () => {
    AOS.init();
    return (
        <div className="mapCard" data-aos="fade-left">
            <iframe 
                className="mapCard__map"
                title="jsx-a11y/iframe-has-title"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.3182216306236!2d-0.5776813844634819!3d44.83545237909859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527c42cf4dbfd%3A0xe38c2783f98a9a4!2s25%20Cours%20Pasteur%2C%2033000%20Bordeaux!5e0!3m2!1sfr!2sfr!4v1596090340846!5m2!1sfr!2sfr" 
                frameBorder="0"
                aria-hidden="false" 
            />
        </div>
    );
};

export default MapCard ;
