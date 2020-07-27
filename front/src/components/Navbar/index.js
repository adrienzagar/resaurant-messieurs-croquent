//! == Import : npm ==
import React from 'react';
import PropTypes from 'prop-types';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Navbar = ({ links }) => {
    console.log(links);
    return (
        <nav className="navbar">
            <img src="" alt="" className="navbar__brand"/>
            <ul className="navbar__links">
            </ul>
        </nav>
    );
};

Navbar.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
};

//! == Export ==
export default Navbar;
