//! == Import : npm ==
import React from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';

//! == Import : local ==
import 'aos/dist/aos.css';
import './styles.scss';

//! == Composant ==
const Presentation = ({ text, image}) => {
    AOS.init();
    return (
        <div className="presentation">
            <h1 className="presentation__title" data-aos="fade-up">
                    MESSIEURS CROQUENT
                </h1>
            <div className="presentation__container">
                <div className="presentation__presentation" data-aos="fade-right">
                    {text.map((presentation) => (
                        <p className="presentation__text" key={presentation}>{presentation}</p>
                    ))}
                </div>
                {image.map((img) => (
                    <img className="presentation__image" key={img.id} src={img.src} alt={img.alt} data-aos="fade-left" />
                ))}
            </div>
        </div>
    );
};

Presentation.propTypes = {
    text: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

//! == Export ==
export default Presentation;
