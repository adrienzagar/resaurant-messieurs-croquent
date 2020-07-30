/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './styles.scss';

const MapCard = () => {
        return(
            // eslint-disable-next-line react/react-in-jsx-scope
            <div className='map__card'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.3182216306236!2d-0.5776813844634819!3d44.83545237909859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527c42cf4dbfd%3A0xe38c2783f98a9a4!2s25%20Cours%20Pasteur%2C%2033000%20Bordeaux!5e0!3m2!1sfr!2sfr!4v1596090340846!5m2!1sfr!2sfr" width="400" height="300" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            
        )
}


export default MapCard ;
