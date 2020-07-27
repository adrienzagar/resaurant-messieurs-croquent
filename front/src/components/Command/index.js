//! == Import : npm ==
import React from 'react';
import PropTypes from 'prop-types';

//! == Import : local ==
import Delivery from '../Command/Delivery';
import Local from '../Command/Local';
import './styles.scss';

//! == Composant ==
const Command = ({ links }) => (
    <main className="command">
        <Delivery links={links} />
        <Local />
    </main>
);

Command.propTypes = {
    links: PropTypes.array.isRequired,
};

//! == Export ==
export default Command;
