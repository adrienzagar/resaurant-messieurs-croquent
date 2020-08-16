//! == Import : npm ==
import React, { useEffect } from 'react';

//! == Import : local ==
import Archive from './archive';
import './styles.scss';

//! == Composant ==
const ArchiveList = ({ getCommand, commands}) => {
    useEffect (() => { document.title = "Messieurs Croquent || Back Office - Archives" }, []);
    return (
        <main className="archiveList">
            <h1 className="archiveList__command">Les commandes archivées</h1>
            <Archive
                getCommand={getCommand}
                commands={commands}
            />
        </main>
    );
};

//! == Export ==
export default ArchiveList;