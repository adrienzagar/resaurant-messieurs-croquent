import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Footer = () => (
  <footer className="footer">
        <div className="footer__container">
            <div className="footer__schedule">
                <p className="footer__infos">Horaires :</p>
                <p className="footer__infos">10:30 à 14:30 - 18:30 à 22:00</p>
            </div>
            <div className="footer__phone">
                <p className="footer__infos">Téléphone : 05 57 30 91 39</p>
            </div>
            <div className="footer__adress">
                <p className="footer__infos">25 Cours Pasteur,</p>
                <p className="footer__infos">33000 BORDEAUX</p>
            </div>
        </div>
  </footer>
);
export default Footer;
