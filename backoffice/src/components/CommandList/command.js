//! == Import : npm ==
import React, { useEffect } from 'react';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Command = ({ getCommand, commands, changeStatus, saveId }) => {
    useEffect(() => { getCommand(); }, []);
    const handleArchivate = (command) => {
        saveId(command.id);
        changeStatus();
    }
    const handleChangeClass = (evt) => {
        evt.currentTarget.parentNode.classList.add('command__container--none');
    }
    return (
        <div className="command">
            {commands.map((command) => {
                if (command.status === 1) {
                    return (
                        <div className="command__container">
                            <p className="command__number">Commande n°{command.id}</p>
                            <p className="command__infosUser">Informations du client :</p>
                            <div className="command__user">
                                <p className="command__infos">Prénom: {command.user.firstname}</p>
                                <p className="command__infos">Nom: {command.user.lastname}</p>
                                <p className="command__infos">Email: {command.user.email}</p>
                                <p className="command__infos">Téléphone: 0{command.user.phoneNumber}</p>
                            </div>
                            <p className="command__infosCommand">Détail de la commande :</p>
                            {command.orderLines.map((order) => (
                                <p className="command__detail">{order.quantity} {order.product.name}</p>
                            ))}
                            <p className="command__infosComment">Commentaire :</p>
                            <p className="command__comment">{command.comment}</p>
                            <p className="command__infosPrice">Prix total de la commande :</p>
                            <p className="command__price">{command.price} &euro;</p>
                            <button 
                                className="command__archivate"
                                onClick={(event) => {(handleArchivate(command)); handleChangeClass(event);}}
                            >

{/* <link href="#" onClick={(event) => { func1(event); func2();}}>Trigger here</link> */}
                                <i className="fas fa-archive"></i>
                                Archiver
                            </button>
                        </div>
                    )
                };
            })}
        </div>
    );
};

//! == Export ==
export default Command;
