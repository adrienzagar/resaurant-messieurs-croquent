//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Header = ({ getLogout, isOpen, getToggle }) => {
   const handleLogout = () => {
      getLogout();
   };
   return (
      <header className="header">
         <h1 className="header__title">
            MESSIEURS CROQUENT - BackOffice
         </h1>
         <button className={isOpen ? "header__open" : "header__close"} onClick={getToggle}>
            <i className="fa fa-clock"></i>
            {isOpen ? "FERMER" : "OUVRIR"}
         </button>
         <button className="header__logout" onClick={handleLogout}>
               <i className="fas fa-power-off"></i>
               Logout
         </button>
      </header>
   );
};

//! == Export ==
export default Header;
