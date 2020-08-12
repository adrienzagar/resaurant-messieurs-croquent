//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import './styles.scss';
import Chips from '../../assets/images/trimmings/chips.jpg';
import Coleslaw from '../../assets/images/trimmings/coleslaw.jpg';
import Salad from '../../assets/images/trimmings/salad.jpg';
import Vegetable from '../../assets/images/trimmings/vegetable.jpg';

//! == Composant ==
const Trimmings = () => (
    <div className="trimming">
        <p className="trimming__text">Au choix</p>
        <div className="trimming__container">
            <img src={Chips} alt="" className="trimming__picture"/>
            <p className="trimming__detail">Frites</p>
        </div>
        <div className="trimming__container">
            <img src={Coleslaw} alt="" className="trimming__picture"/>
            <p className="trimming__detail">Coleslaw</p>
        </div>
        <div className="trimming__container">
            <img src={Salad} alt="" className="trimming__picture"/>
            <p className="trimming__detail">Salade</p>
        </div>
        <div className="trimming__container">
            <img src={Vegetable} alt="" className="trimming__picture"/>
            <p className="trimming__detail">Légumes</p>
        </div>
    </div>
);

//! == Export ==
export default Trimmings;
