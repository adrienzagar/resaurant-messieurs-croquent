//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Status = ({ status }) => (
    <div className="status">
        <p className="status__store">{status}</p>
        <a href="tel:+33557309139" className="status__infos"><i className="fas fa-phone-alt"></i>05 57 30 91 39</a>
    </div>
);

//! == Export ==
export default Status;
