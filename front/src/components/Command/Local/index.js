//! == Import : npm ==
import React from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos';

//! == Import : local ==
import 'aos/dist/aos.css';
import './styles.scss';

//! == Composant ==
const Local = () => {
    AOS.init();
    return (
        <>
            <div className="local">
                <p className="local__text" data-aos="fade-up">Vous pouvez commander en ligne et venir récupérer votre commande dans votre restaurant</p>
                <Link
                    to="triangle"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                >
                    <button className="local__button">Commencer</button>
                </Link>
            </div>
            <svg id="bigTriangleShadow" class="triangle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path id="trianglePath1" d="M0 0 L50 100 L100 0 Z"></path>
                <path id="trianglePath2" d="M50 L100 40 L100 0 Z"></path>
            </svg>
        </>
    );
};

//! == Export ==
export default Local;
