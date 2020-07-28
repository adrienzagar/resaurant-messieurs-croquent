import React from 'react' ;
import { Card, Row, Col } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';

import './styles.scss' ;

const HowToCome = () => (
    <div className={'container'}>
        <Card style={{maxWidth:'1200px', width: '90%', marginTop: 10+'px', minHeight:160 }}>
            <Card.Body className={ 'reserve'}>
                <Row className={'title_card'}><h3 className={'color'}>Venir en transport en commun</h3></Row>
                <Row className={'margins'}>
                    <Col xs={'1'} sm={'1'} md={'1'}>
                        <MDBIcon className={'icon'} icon="bus-alt" />
                    </Col>
                    <Col className={'color'}>        
                        Ligne B - Arret  Musée d'Aquitaine .
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </div>
);

export default HowToCome ;