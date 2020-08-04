//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import Command from './command';
import Archivate from './archivate';
import './styles.scss';

//! == Composant ==
const CommandList = () => (
    <main className="commandList">
        <h1 className="commandList__command">Les commandes en cours</h1>
        <Command/>
        <h1 className="commandList__archivate">Les commandes archivées</h1>
        <Archivate/>
    </main>
);

//! == Export ==
export default CommandList;
