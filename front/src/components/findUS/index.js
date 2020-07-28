import React from 'react';
import './styles.scss';
import MapCard from '../mapCard';
import CardComponent from '../card';
import HowToCome from '../howToCome' ;
import Reservation from '../reservation';



const Find_Us = () => {
  return(
    <div>
    <div className={'Container'}>
    <div className={'Component'}><CardComponent /></div>
    
    <div className={'Component'}><MapCard /></div>
    </div>
    <div className={'global'}>
   <HowToCome />
   <Reservation />
   </div>
    </div>
  );
}

export default Find_Us;