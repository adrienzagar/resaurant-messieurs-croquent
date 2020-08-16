import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types';

import './styles.scss';

const Copyright = () => (
    <div>
        <div className="container">
            <img src="https://ca.slack-edge.com/TTY8DUCTZ-UUVS83BM3-4dc5e39d9bc5-512" alt="" className="container__image"/>
            <h1 className="container__content">Johan</h1>
            <p className="container__content">Product Owner et Développeur Back-End </p>
        </div>
        <div className="container">
            <img src="https://ca.slack-edge.com/TTY8DUCTZ-U0151S58ZS9-7dce0850c70b-512" alt="" className="container__image"/>
            <h1 className="container__content">Mohamed</h1>
            <p className="container__content">Lead Développeur Back-End </p>
        </div>
        <div className="container">
            <img src="https://ca.slack-edge.com/TTY8DUCTZ-UUFG6K9RV-e5f6a25b4c5d-512" alt="" className="container__image"/>
            <h1 className="container__content">Imed</h1>
            <p className="container__content">Git Master et Développeur Front-End </p>
        </div>
        <div className="container">
            <img src="https://ca.slack-edge.com/TTY8DUCTZ-UUBMYJBL1-6cc5911edd1e-512" alt="" className="container__image"/>
            <h1 className="container__content">Thomas</h1>
            <p className="container__content">Lead Développeur Front-End et Intégrateur </p>
        </div>
        <div className="container">
            <img src="https://ca.slack-edge.com/TTY8DUCTZ-UUFGF1V63-7a841b36070c-512" alt="" className="container__image"/>
            <h1 className="container__content">Adrien</h1>
            <p className="container__content">Scrum Master et Développeur Front-End</p>
        </div>
    </div>
);
export default Copyright;
