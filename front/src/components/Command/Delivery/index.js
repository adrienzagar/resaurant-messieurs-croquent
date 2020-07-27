//! == Import : npm ==
import React from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';

//! == Import : local ==
import 'aos/dist/aos.css';
import './styles.scss';

//! == Composant ==
const Delivery = ({ links }) => {
    AOS.init();
    return (
        <div className="delivery">
            <p className="delivery__text" data-aos="fade-up">
                Pour vos livraisons, voici les liens vers nos partenaires
            </p>
            <div className="delivery__links">
                {links.map((link) => (
                    <a href={link.path} className="delivery__link" data-aos={link.fade}>
                        <img src={link.src} alt={link.name} className="delivery__image"/>
                    </a>
                ))}
            </div>
        </div>
    );
};

Delivery.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired,
            fade: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

//! == Export ==
export default Delivery;
