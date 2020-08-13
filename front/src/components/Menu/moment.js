//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import './styles.scss';
import SodaTart from '../../assets/images/moment/moment.jpg';
import Chips from '../../assets/images/trimmings/chips.jpg';
import Nugget from '../../assets/images/moment/nugget.jpg';

//! == Composant ==
const Moment = () => (
    <div className="moment">
        <div className="moment__container">
            <p className="moment__text">Boisson XL + Madame Tarte : 5.5&euro;</p>
            <div className="moment__subcontainer">
                <img src={SodaTart} alt="Soda + Tarte" className="moment__picture"/>
            </div>
        </div>
        <div className="moment__container">
            <p className="moment__text">Frites garnies : 6.5&euro;</p>
            <div className="moment__subcontainer">
                <img src={Chips} alt="Chips" className="moment__picture--chips"/>
                <div className="moment__detail">
                    <p>Jambon blanc</p>
                    <p>Poulet label rouge</p>
                    <p>Confit de canard</p>
                    <p>Oeuf fermier</p>
                    <p>Sauce fromagère</p>
                    <p>Coulis de tomate</p>
                    <p>Compotée d'oignons</p>
                </div>
            </div>
        </div>
        <div className="moment__container--other">
            <p className="moment__text">Vrais nuggets de poulet</p>
            <div className="moment__subcontainer">
                <img src={Nugget} alt="Nugget" className="moment__picture--nugget"/>
                <div className="moment__detail">
                    <p>5 pour 6&euro;</p>
                    <p>10 pour 10&euro;</p>
                    <p>5 nuggets + accompagnement au choix 8&euro;</p>
                </div>
            </div>
        </div>
    </div>
);
//! == Export ==
export default Moment;
