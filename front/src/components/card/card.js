import React from 'react'
import {Card, Row, Col} from 'react-bootstrap'
import { MDBIcon } from 'mdbreact';

import './styles.scss'

const CardComponent = () => {
    return (
        <Card style={{maxWidth:'570px', width: '90%', marginTop: 10+'px', minHeight:360 }}>
            <Card.Body>
                <Row className={'title_card'}>MONSIEURS CROQUENT</Row>
                <Row className={'margins'}>
                    <Col xs={'1'} sm={'1'} md={'1'}>
                        <MDBIcon className={'icon'} icon="map-marker-alt" />
                    </Col>
                    <Col>        
                    25 Cour Pasteur {'\n'}
                    33 000 Bordeaux
                    </Col>
                </Row>
                <Row className={'margins'}>
                    <Col xs={'1'} sm={'1'} md={'1'}>
                        <MDBIcon className={'icon'} icon="phone-alt" />
                    </Col>
                    <Col>05 57 30 91 39</Col>
                </Row>
                <Row className={'spacing'}>
                <Col xs={'1'} sm={'1'} md={'1'}>
                    <MDBIcon className={'icon'} icon="envelope" />
                </Col>
                <Col>contact@messieurscroquent.fr</Col>
            </Row>
    <Row className={'margins'} >
    <Col className={'iconClock'} xs={'1'} sm={'1'} md={'1'}>
                    <MDBIcon className={'icon'} icon="clock" />                
    </Col>
    <Col>
    OUVERT DU LUNDI AU SAMEDI {'\n'}
    12:00 - 14:00  /  19:00 - 22:30{'\n'}
    FERME DIMANCHE ET LUNDI
    </Col>
    </Row>
  </Card.Body>
</Card>
    )
} 
export default CardComponent