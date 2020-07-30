//! == Import : npm ==
import React from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';

//! == Import : local ==
import 'aos/dist/aos.css';
import './styles.scss';

//! == Composant ==
const TripadvisorMin = () => {
    AOS.init();
    return (
        <div className="tripadvisorMin" data-aos="fade-up">
            <div id="TA_selfserveprop4" className="TA_selfserveprop">
                <ul id="tqOftg6" className="TA_links GRCBTq">
                    <li id="QNuGnLFaGj" className="qMhSoz">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.tripadvisor.fr/Restaurant_Review-g187079-d12474378-Reviews-Messieurs_Croquent-Bordeaux_Gironde_Nouvelle_Aquitaine.html">
                            <img src="https://www.tripadvisor.fr/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg" alt="TripAdvisor"/>
                        </a>
                    </li>
                </ul>
            </div>
            <Helmet>
                <script async src="https://www.jscache.com/wejs?wtype=selfserveprop&amp;uniq=4&amp;locationId=12474378&amp;lang=fr&amp;rating=true&amp;nreviews=3&amp;writereviewlink=true&amp;popIdx=false&amp;iswide=false&amp;border=true&amp;display_version=2" data-loadtrk onload="this.loadtrk=true"></script>
            </Helmet>
        </div>
    );
};


//! == Export ==
export default TripadvisorMin;