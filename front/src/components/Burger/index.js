//! == Import : npm ==
import React from 'react';
import PropTypes from 'prop-types';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Burger = ({ links, isActive }) => {
    console.log(links);
    console.log(isActive);
    return (
        <nav className="burger">
            <img src="" alt="" className="burger__brand"/>
            <ul className="burger__links">
            </ul>
        </nav>
    );
};

Burger.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
    isActive: PropTypes.bool.isRequired,
};

//! == Export ==
export default Burger;
