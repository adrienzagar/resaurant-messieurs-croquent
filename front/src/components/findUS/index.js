import React from 'react';
import './styles.scss';
import MapCard from './MapCard/';
import CardComponent from './Card';
import HowToCome from './HowToCome' ;
import Reservation from './Reservation';



const Find_Us = () => {
  return(
    <div>
        <div className='find__us'>
            <CardComponent />
            <MapCard />
        </div>
        <div className=''>
        <HowToCome />
        <Reservation />
        </div>
    </div>
  );
}

export default Find_Us;