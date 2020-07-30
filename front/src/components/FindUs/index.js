//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import MapCard from './MapCard';
import CardComponent from './Card';
import HowToCome from './HowToCome';
import Reservation from './Reservation';
import './styles.scss';

//! == Composant ==
const FindUs = () => (
  <div className="findUs">
    <div className="findUs__container">
      <CardComponent />
      <MapCard />
    </div>
      <HowToCome />
      <Reservation />
  </div>
);

export default FindUs;