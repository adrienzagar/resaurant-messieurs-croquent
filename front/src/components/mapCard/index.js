import React from 'react';
import {Card} from 'react-bootstrap';
import './styles.scss';

const MapCard = () => {
        return(
            <div className={'map'}>
            <Card>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.3180348566925!2d-0.5776813842485731!3d44.835456183195696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527c42cf4dbfd%3A0xe38c2783f98a9a4!2s25%20Cours%20Pasteur%2C%2033000%20Bordeaux!5e0!3m2!1sfr!2sfr!4v1595886642627!5m2!1sfr!2sfr" frameBorder="0" height={'360'} allowFullScreen="true" aria-hidden="true" tabIndex="0" />
            </Card>
            </div>
        )
}


export default MapCard ;