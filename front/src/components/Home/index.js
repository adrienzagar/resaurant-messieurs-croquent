//! == Import : npm ==
import React from 'react';
// import PropTypes from 'prop-types';

//! == Import : local ==
import HomeCarousel from './HomeCarousel';
import Presentation from './Presentation';
import HomeTripadvisor from './HomeTripadvisor';
import './styles.scss';

//! == Composant ==
const Home = () => (
    <main className="home">
        <HomeCarousel />
        <Presentation />
        <HomeTripadvisor />
    </main>
);

// Home.propTypes = {};

//! == Export ==
export default Home;
