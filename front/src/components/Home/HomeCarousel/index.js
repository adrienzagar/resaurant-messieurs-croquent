//! == Import : npm ==
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
// import PropTypes from 'prop-types';

//! == Import : local ==
import carousel1 from '../../../assets/images/carousel/carousel1.jpg';
import carousel2 from '../../../assets/images/carousel/carousel2.jpg';
import carousel3 from '../../../assets/images/carousel/carousel3.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import './styles.scss';

//! == Composant ==
const HomeCarousel = () => (
    <Carousel infiniteLoop stopOnHover={false} autoPlay className="carousel">
        <div className="carousel__container">
            <img className="carousel__image" src={carousel1} alt="restaurant"/>
        </div>
        <div className="carousel__container">
            <img className="carousel__image" src={carousel2} alt="restaurant"/>
        </div>
        <div className="carousel__container">
            <img className="carousel__image" src={carousel3} alt="restaurant"/>
        </div>
    </Carousel>
);

// HomeCarousel.propTypes = {};

//! == Export ==
export default HomeCarousel;
