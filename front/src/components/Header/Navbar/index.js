//! == Import : npm ==
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

//! == Import : local ==
import brand from '../../../assets/images/logo-brand.png';
import './styles.scss';

//! == Composant ==
const Navbar = ({ links, socialnetworks }) => {
    const history = useHistory();
    return (
        <nav className="navbar">
            <NavLink
                to="/"
                onClick={() => {history.push('/'); window.location.reload();}}
                exact
            >
                <img className="navbar__brand" src={brand} alt="brand"/>
            </NavLink>
            <ul className="navbar__links">
                {links.map((link) => (
                    <NavLink
                    key={link.id}
                    to={link.path}
                    className="navbar__link"
                    activeClassName="navbar__link--selected"
                    onClick={link.path === '/' ? () => {history.push('/'); window.location.reload();} : null}
                    exact
                    >
                        <span className="navbar__link--a">{link.name}</span>
                    </NavLink>
                ))}
            </ul>
            <ul className="navbar__socialnetworks">
                {socialnetworks.map((socialnetwork) => (
                    <li className="navbar__socialnetwork" key={socialnetwork.id}>
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
        </nav>
    );
};

Navbar.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            path: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    socialnetworks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            path: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

//! == Export ==
export default Navbar;
