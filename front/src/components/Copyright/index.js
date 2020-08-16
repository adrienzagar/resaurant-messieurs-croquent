//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import './styles.scss';
import Card from './card.js';

//! == Composant ==
const Copyright = () => (
    <div className="card">
        <Card picture="https://ca.slack-edge.com/TTY8DUCTZ-UUVS83BM3-4dc5e39d9bc5-512" name="Johan" post="Product Owner & Developer Back-End" />
        <Card picture="https://ca.slack-edge.com/TTY8DUCTZ-U0151S58ZS9-7dce0850c70b-512" name="Mohamed" post="Lead Developer Back-End" />
        <Card picture="https://ca.slack-edge.com/TTY8DUCTZ-UUFG6K9RV-e5f6a25b4c5d-512" name="Imed" post="Git Master & Developer Front-End" />
        <Card picture="https://ca.slack-edge.com/TTY8DUCTZ-UUBMYJBL1-6cc5911edd1e-512" name="Thomas" post="Lead Developer Front-End & Integrator" />
        <Card picture="https://ca.slack-edge.com/TBGQ2SW6T-UUK236ZJA-4bae652bc792-192" name="Adrien" post="Scrum Master & Developer Front-End" />
    </div>
);

//! == Export ==
export default Copyright;
