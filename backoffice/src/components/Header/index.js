//! == Import : npm ==
import React, { useEffect } from 'react';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Header = ({ getLogout, getStatus, modifyStatus, editStatus, status, isOpen }) => {
   useEffect(() => { getStatus(); });
   const handleLogout = () => {
      getLogout();
   };
   const handleEditStatus = () => {
      if (status === 'FERMÉ') {
         modifyStatus('OUVERT', true);
      } else if (status === 'OUVERT') {
         modifyStatus('FERMÉ', false);
      }
      editStatus();
   }
   return (
      <header className="header">
         <h1 className="header__title">
            MESSIEURS CROQUENT - BackOffice
         </h1>
         <button className={isOpen ? "header__open" : "header__close"} onClick={handleEditStatus}>
            <i className="fa fa-clock"></i>
            {isOpen ? "OUVERT" : "FERMÉ"}
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