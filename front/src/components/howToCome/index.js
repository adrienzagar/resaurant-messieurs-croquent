import React from 'react' ;
import { Card, Row, Col } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';

import './styles.scss' ;

const HowToCome = () => {
    return (
        <div className={'container'}>
        <Card style={{maxWidth:'1200px', width: '90%', marginTop: 10+'px', minHeight:160 }}>
            <Card.Body>
                <Row className={'title_card'}><h1>Venir en transport en commun</h1></Row>
                <Row className={'margins'}>
                    <Col xs={'1'} sm={'1'} md={'1'}>
                        <MDBIcon className={'icon'} icon="bus-alt" />
                    </Col>
                    <Col>        
                    Ligne B - Arret  Musée d'Aquitaine
                    </Col>
                </Row>
  </Card.Body>
</Card>
</div>
    )
} 
export default HowToCome ;