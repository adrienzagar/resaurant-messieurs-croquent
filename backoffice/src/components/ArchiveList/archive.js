//! == Import : npm ==
import React, { useEffect } from 'react';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Archive = ({ getCommand, commands }) => {
    useEffect(() => { getCommand(); }, []);
    return (
        <div className="archive">
            {commands.map((command) => {
                if (command.status === 2) {
                    return (
                        <div className="archive__container">
                            <p className="archive__number">Commande n°{command.id}</p>
                            <p className="archive__infosUser">Informations du client :</p>
                            <div className="archive__user">
                                <p className="archive__infos">Prénom: {command.user.firstname}</p>
                                <p className="archive__infos">Nom: {command.user.lastname}</p>
                                <p className="archive__infos">Email: {command.user.email}</p>
                                <p className="archive__infos">Téléphone: 0{command.user.phoneNumber}</p>
                            </div>
                            <p className="archive__infosCommand">Détail de la commande :</p>
                            {command.orderLines.map((order) => (
                                <p className="archive__detail">{order.quantity} {order.product.name}</p>
                            ))}
                            <p className="archive__infosComment">Commentaire :</p>
                            <p className="archive__comment">{command.comment}</p>
                            <p className="archive__infosPrice">Prix total de la commande :</p>
                            <p className="archive__price">{command.price} &euro;</p>
                        </div>
                    )
                };
            })}
        </div>
    );
};

//! == Export ==
export default Archive;