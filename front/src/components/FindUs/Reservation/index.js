import React from 'react';
import {Card, Row, Container} from 'react-bootstrap';

import './styles.scss'

const Reservation = () => ( 
    <div className={'container'}>
        <Card >
            <Card.Body>
                <Row className={'title_card' }>
                    <h3>Un événement  a organiser ?</h3> 
                    <p> Privatiser le restaurant ?</p>
                    <p>Contactez nous.....</p>
                </Row>
            </Card.Body>
        </Card>
    </div>
);

export default Reservation;