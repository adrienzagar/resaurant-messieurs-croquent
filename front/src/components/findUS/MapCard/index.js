/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './styles.scss';

const MapCard = () => {
        return(
            // eslint-disable-next-line react/react-in-jsx-scope
            <div className='map__card'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.3182216306286!2d-0.577681384511866!3d44.8354523790985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527c42cf4dbfd%3A0xe38c2783f98a9a4!2s25%20Cours%20Pasteur%2C%2033000%20Bordeaux!5e0!3m2!1sfr!2sfr!4v1596031336863!5m2!1sfr!2sfr" width="800" height="600" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            
        )
}


export default MapCard ;
