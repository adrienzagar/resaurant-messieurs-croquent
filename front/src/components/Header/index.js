//! == Import : npm ==
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

//! == Import : local ==
import Status from './status';
import Navbar from '../Header/Navbar';
import Burger from '../Header/Burger';
import './styles.scss';

//! == Composant ==
const Header = ({ links, socialnetworks, isActive, toggleButton, getStatus, status }) => {
    useEffect(() => { getStatus()});
    return (
        <header className="header">
            <Status status={status} />
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
};

Header.propTypes = {
    links: PropTypes.array.isRequired,
    socialnetworks: PropTypes.array.isRequired,
    isActive: PropTypes.bool.isRequired,
    toggleButton: PropTypes.func.isRequired,
};

//! == Export ==
export default Header;
