//! == Import : npm ==
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HamburgerSpin } from 'react-animated-burgers';

//! == Import : local ==
import brand from '../../../assets/images/logo-brand.png';
import './styles.scss';

//! == Composant ==
const Burger = ({ links, socialnetworks ,isActive, toggleButton }) => {
    console.log(links);
    console.log(isActive);
    return (
        <>
            <nav className="burger">
                <NavLink
                    to="/"
                    exact
                >
                    <img className="burger__brand" src={brand} alt="brand"/>
                </NavLink>
                <HamburgerSpin
                    isActive={isActive}
                    toggleButton={toggleButton}
                    buttonColor="transparent"
                    barColor="white"
                />
            </nav>
            <div className={ isActive === false ? 'burger__toggle--close' : 'burger__toggle--open'}>
                <ul className="burger__links">
                {links.map((link) => (
                    <NavLink
                        key={link.id}
                        to={link.path}
                        className="burger__link"
                        activeClassName="burger__link--selected"
                        onClick={toggleButton}
                        exact
                    >
                        {link.name}
                    </NavLink>
                ))}
                </ul>   
                <ul className="burger__socialnetworks">
                    {socialnetworks.map((socialnetwork) => (
                        <li className="burger__socialnetwork" key={socialnetwork.id}>
                            <a 
                                href={socialnetwork.path} 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className={socialnetwork.icon}></i>
                            </a>
                        </li>
                    ))}
                </ul>   
            </div>
        </>
    );
};

Burger.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
    isActive: PropTypes.bool.isRequired,
    toggleButton: PropTypes.func.isRequired,
};

//! == Export ==
export default Burger;
