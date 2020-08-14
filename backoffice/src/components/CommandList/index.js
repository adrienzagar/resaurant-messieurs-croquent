//! == Import : npm ==
import React, { useEffect } from 'react';

//! == Import : local ==
import Command from './command';
import './styles.scss';

//! == Composant ==
const CommandList = ({ getCommand, commands, changeStatus, saveId }) => {
    useEffect (() => { document.title = "Messieurs Croquent || Back Office - Commandes" }, []);
    setTimeout(() => {window.location.reload()}, 60000); // reload all 60s
    return (
        <main className="commandList">
            <h1 className="commandList__command">Les commandes en cours</h1>
            <Command
                getCommand={getCommand}
                commands={commands}
                changeStatus={changeStatus}
                saveId={saveId}
            />
        </main>
    );
};

//! == Export ==
export default CommandList;
