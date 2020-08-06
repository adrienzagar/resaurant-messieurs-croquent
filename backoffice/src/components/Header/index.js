//! == Import : npm ==
import React, { useEffect } from 'react';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Header = ({ getLogout, isOpen, getStatus, modifyStatus, status }) => {
   useEffect(() => { getStatus(); }, []);
   const handleLogout = () => {
      getLogout();
   };
   const handleEditStatus = () => {
      if (status === 'FERMÉ') {
         modifyStatus('OUVERT', true);
      } else if (status === 'OUVERT') {
         modifyStatus('FERMÉ', false);
      }
   }
   console.log(status, "status");
   console.log(isOpen, "isOpen");
   return (
      <header className="header">
         <h1 className="header__title">
            MESSIEURS CROQUENT - BackOffice
         </h1>
         <button className={isOpen ? "header__open" : "header__close"} onClick={handleEditStatus}>
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
