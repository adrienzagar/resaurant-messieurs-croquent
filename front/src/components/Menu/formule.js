//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import './styles.scss';
import CroqueFormule from './croqueFormule';
import Trimmings from './trimmings';

//! == Composant ==
const Formule = () => (
    <div className="formule">
        <div className="formule__card">
            <div className="formule__header">
                Menu Messieurs = <span className="formule__header--small">1 croque-monsieur + 1 accompagnement au choix</span>
                <svg version="1.1" id="croc-reverse-left-min" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 204 117.5">
                    <rect x="0.2" y="0.1" class="st0" width="203.7" height="117.2"/>
                    <ellipse transform="matrix(0.1347 -0.9909 0.9909 0.1347 70.9974 247.2497)" class="st1" cx="177.1" cy="83" rx="22.3" ry="27"/>
                    <ellipse class="st1" cx="136.4" cy="82.3" rx="18.6" ry="15.1"/>
                    <ellipse class="st1" cx="108.8" cy="57.3" rx="33.5" ry="29.4"/>
                    <ellipse class="st1" cx="69.4" cy="33.3" rx="37.1" ry="27.6"/>
                    <path class="st1" d="M57.1,6c0,11.3-11.9,20.5-26.6,20.5S4,17.3,4,6S4.2,3.9,23.3,3C38.9,2.2,57.1-5.3,57.1,6z"/>
                    <rect x="47.7" y="0" class="st1" width="156.2" height="54.6"/>
                    <rect x="122.7" y="30.1" class="st1" width="81.4" height="54.6"/>
                    <rect x="4.2" y="0" class="st1" width="52.5" height="9"/>
                </svg>
            </div>
            <div className="formule__main">
                <CroqueFormule />
                <Trimmings />
                <div className="extra">
                    <p className="extra__title">Petits +</p>
                    <div className="extra__container"></div>
                    <div className="extra__container"></div>
                    <div className="extra__container--other"></div>
                </div>
            </div>
        </div>
    </div>
);

//! == Export ==
export default Formule;
