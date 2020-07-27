import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Footer = ({ socialnetworksData }) => {
    console.log(socialnetworksData);
return(
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
            <div className="footer__socialnetwork">
            <ul>
                {socialnetworksData.map((link) => (
                    
                <li key={link.id}>
                    <a href={link.path} target="_blank" rel="noopener noreferrer"><i className={link.icon}></i></a>
                </li>
                ))}
             </ul>
            </div>
        </div>
  </footer>
);
}

Footer.propTypes = {
    socialnetworks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            path: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}
export default Footer;
