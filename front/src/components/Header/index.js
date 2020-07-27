//! == Import : npm ==
import React from 'react';
import PropTypes from 'prop-types';

//! == Import : local ==
import Navbar from '../Navbar';
import Burger from '../Burger';
import './styles.scss';

//! == Composant ==
const Header = ({ links, isActive }) => (
    <header className="header">
        <Navbar 
            links={links}
        />
        <Burger
            links={links}
            isActive={isActive}
        />
    </header>
);

Header.propTypes = {
    links: PropTypes.array.isRequired,
    isActive: PropTypes.bool.isRequired,
};

//! == Export ==
export default Header;
