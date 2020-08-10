//! == Import : npm ==
import React from 'react';
import { NavLink } from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Sidebar = ({ links }) => (
    <Menu>
        {links.map((link) => (
            <NavLink
                key={link.id}
                to={`${process.env.PUBLIC_URL}/${link.path}`}
                activeClassName="bm-item-selected"
                exact
            >
                    <i className={link.icon}></i>
                    <span className="bm-item-link">{link.name}</span>
            </NavLink>
        ))}
    </Menu>
);

//! == Export ==
export default Sidebar;
