//! == Import : npm ==
import React, { useEffect } from 'react';

//! == Import : local ==
import './styles.scss';
import Card from './card.js';

//! == Composant ==
const Copyright = () => {
    useEffect (() => { document.title = "Messieurs Croquent - Copyright" }, []);
    return(
    <div className="card">
        <Card picture="https://ca.slack-edge.com/TTY8DUCTZ-UUVS83BM3-4dc5e39d9bc5-512" name="Johan" post="Developer Back-End & Product Owner" />
        <Card picture="https://ca.slack-edge.com/TTY8DUCTZ-U0151S58ZS9-7dce0850c70b-512" name="Mohamed" post="Lead Developer Back-End" />
        <Card picture="https://ca.slack-edge.com/TTY8DUCTZ-UUFG6K9RV-aea5c668b138-512" name="Imed" post="Developer Front-End & Git Master" />
        <Card picture="https://media-exp1.licdn.com/dms/image/C5603AQHj89Xuo8ZiJw/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=uXDIsEMWTwVzq0IYCAq06P7fbWF4jJeXsVDXjRPGtGg" name="Thomas" post="Lead Developer Front-End & Integrator" />
        <Card picture="https://ca.slack-edge.com/TBGQ2SW6T-UUK236ZJA-4bae652bc792-192" name="Adrien" post="Developer Front-End & Scrum Master" />
    </div>
)};

//! == Export ==
export default Copyright;
