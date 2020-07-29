//! == Import : npm ==
import React from 'react';
import PropTypes from 'prop-types';

//! == Import : local ==
import HomeCarousel from './HomeCarousel';
import Presentation from './Presentation';
import HomeTripadvisor from './HomeTripadvisor';
import './styles.scss';

//! == Composant ==
const Home = ({ presentation, imagePresentation }) => (
    <main className="home">
        <HomeCarousel />
        <Presentation text={presentation} image={imagePresentation} />
        <HomeTripadvisor />
    </main>
);

Home.propTypes = {
    presentation: PropTypes.string.isRequired,
    imagePresentation: PropTypes.array.isRequired,
};

//! == Export ==
export default Home;
