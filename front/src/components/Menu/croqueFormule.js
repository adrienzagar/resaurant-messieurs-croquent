//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import './styles.scss';
import MrCroque from '../../assets/images/croques/mrcroque.jpg';
import Transformiste from '../../assets/images/croques/transformiste.jpg';
import Coq from '../../assets/images/croques/coq.jpg';
import Seguin from '../../assets/images/croques/seguin.jpg';
import Confit from '../../assets/images/croques/confit.jpg';
import Mystere from '../../assets/images/croques/mystere.jpg';

//! == Composant ==
const CroqueFormule = () => (
    <div className="croqueFormule">
        <div className="croqueFormule__container">
            <img className="croqueFormule__picture" src={MrCroque} alt="MrCroque"/>
            <div className="croqueFormule__product">
                <div className="croqueFormule__detail">
                    <p className="croqueFormule__name">MONSIEUR CROQUE</p>
                    <p className="croqueFormule__price">9.5&euro;</p>
                </div>
                <p className="croqueFormule__description">Jambon blanc, béchamel maison, fromage Abondance A.O.P</p> 
            </div>
        </div>
        <div className="croqueFormule__container">
            <img className="croqueFormule__picture" src={Transformiste} alt="MrCroque"/>
            <div className="croqueFormule__product">
                <div className="croqueFormule__detail">
                    <p className="croqueFormule__name">LE TRANSFORMISTE</p>
                    <p className="croqueFormule__price">10&euro;</p>
                </div>
                <p className="croqueFormule__description">Jambon blanc, béchamel maison, fromage Abondance A.O.P, oeuf fermier</p> 
            </div>
        </div>
        <div className="croqueFormule__container">
            <img className="croqueFormule__picture" src={Coq} alt="MrCroque"/>
            <div className="croqueFormule__product">
                <div className="croqueFormule__detail">
                    <p className="croqueFormule__name">COQ MONSIEUR</p>
                    <p className="croqueFormule__price">10&euro;</p>
                </div>
                <p className="croqueFormule__description">Poulet Label Rouge, béchamel maison, coulis de tomate maison, fromage Abondance A.O.P, compotée d’oignons maison</p> 
            </div>
        </div>
        <div className="croqueFormule__container">
            <img className="croqueFormule__picture" src={Seguin} alt="MrCroque"/>
            <div className="croqueFormule__product">
                <div className="croqueFormule__detail">
                    <p className="croqueFormule__name">MONSIEUR SEGUIN</p>
                    <p className="croqueFormule__price">10&euro;</p>
                </div>
                <p className="croqueFormule__description">Fromage frais, fromage de chèvre A.O.P, compotée d’oignons maison, poire fraîche, noix, miel</p> 
            </div>
        </div>
        <div className="croqueFormule__container">
            <img className="croqueFormule__picture" src={Confit} alt="MrCroque"/>
            <div className="croqueFormule__product">
                <div className="croqueFormule__detail">
                    <p className="croqueFormule__name">MONSIEUR CONFIT</p>
                    <p className="croqueFormule__price">10&euro;</p>
                </div>
                <p className="croqueFormule__description">Confit de canard du sud-ouest, compotée d’oignons maison, poire fraiche, fromage Ossau-Iraty A.O.P</p> 
            </div>
        </div>
        <div className="croqueFormule__container">
            <img className="croqueFormule__picture" src={Mystere} alt="MrCroque"/>
            <div className="croqueFormule__product">
                <div className="croqueFormule__detail">
                    <p className="croqueFormule__name">CROQUE MYSTÈRE</p>
                    <p className="croqueFormule__price">11&euro;</p>
                </div>
                <p className="croqueFormule__description">Croque du moment, voir avec le chef</p> 
            </div>
        </div>
    </div>
);

//! == Export ==
export default CroqueFormule;
