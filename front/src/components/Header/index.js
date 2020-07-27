//! == Import : npm ==
import React from 'react';
import PropTypes from 'prop-types';

//! == Import : local ==
import Navbar from '../Navbar';
import Burger from '../Burger';
import './styles.scss';

//! == Composant ==
const Header = ({ links, socialnetworks, isActive, toggleButton }) => (
    <header className="header">
        <Navbar 
            links={links}
            socialnetworks={socialnetworks}
        />
        <Burger
            links={links}
            socialnetworks={socialnetworks}
            isActive={isActive}
            toggleButton={toggleButton}
        />
    </header>
);

Header.propTypes = {
    links: PropTypes.array.isRequired,
    socialnetworks: PropTypes.array.isRequired,
    isActive: PropTypes.bool.isRequired,
};

//! == Export ==
export default Header;
