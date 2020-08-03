//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Header = () => (
   <header className="header">
        <h1 className="header__title">
           MESSIEURS CROQUENT - BackOffice
        </h1>
        <button className="header__logout">
            <i class="fas fa-power-off"></i>
            Logout
        </button>
   </header>
);

//! == Export ==
export default Header;
