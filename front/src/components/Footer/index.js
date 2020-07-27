import React from 'react';

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

            <div className="footer__socialnetwork">
            <ul>
                <li>
                    <a href="https://fr-fr.facebook.com/Messieurscroquent/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/messieurscroquent/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                </li>
                <li>
                    <a href="https://www.tripadvisor.fr/Restaurant_Review-g187079-d12474378-Reviews-Messieurs_Croquent-Bordeaux_Gironde_Nouvelle_Aquitaine.html" target="_blank" rel="noopener noreferrer"><i className="fab fa-tripadvisor"></i></a>
                </li>
             </ul>
            </div>
        </div>
  </footer>
);
export default Footer;
