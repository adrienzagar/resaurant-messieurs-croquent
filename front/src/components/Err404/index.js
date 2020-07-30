//! == Import : npm ==
import React from 'react';
import AOS from 'aos';

//! == Import : local ==
import 'aos/dist/aos.css';
import './styles.scss';

//! == Composant ==
const Err404 = () => {
    AOS.init();
    return (
        <main className="error">
            <h1 className="error__title">
                <span className="error__start" data-aos="fade-right">
                    4
                </span>
                <span className="error__center" data-aos="fade-down">
                    0
                </span>
                <span className="error__end" data-aos="fade-left">
                    4
                </span>
            </h1>
            <p className="error__text" data-aos="fade-up">
                La page que vous cherchez n'existe pas
            </p>
        </main>
    );
};

//! == Export ==
export default Err404;
