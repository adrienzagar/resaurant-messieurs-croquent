import React from 'react';
import {Card, Row, Container} from 'react-bootstrap';

import './styles.scss'

const Reservation = () => {
    return ( <div className={Container ,'container'}>
        <Card style={{maxWidth:'1200px', width: '90%', marginTop: 10+'px', minHeight:160 }}>
    <Card.Body>
        <Row className={'title_card'}>
       <p>Un evenement  a organiser ?</p> 
       <p> Privatiser le restaurant ?</p>
       <p>Contactez nous.....</p>
        
        
        </Row>
       
</Card.Body>
</Card>
</div>
    )
} 
export default Reservation;