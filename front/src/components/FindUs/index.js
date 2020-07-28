import React from 'react';
import './styles.scss';
import MapCard from '../FindUs/MapCard';
import CardComponent from '../FindUs/Card';
import HowToCome from '../FindUs/HowToCome' ;
import Reservation from '../FindUs/Reservation';



const FindUs = () => (
  <div className="findUs">
    <div className={'container'}>
      <div className={'component'}>
        <CardComponent />
      </div>
      
      <div className={'component'}>
        <MapCard />
      </div>
    </div>
      <div className={'global'}>
        <HowToCome />
      </div>
      <div className={'global'}>
        <Reservation />
    </div>
  </div>
);

export default FindUs;