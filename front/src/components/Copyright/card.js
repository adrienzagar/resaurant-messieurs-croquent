//! == Import : npm ==
import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Card = ({ picture, name, post }) => (
    <Flippy
        className="card__container"
        flipOnHover={true} // default false
        flipOnClick={false} // default false
        flipDirection="horizontal" // horizontal or vertical
    >
        <FrontSide>
            <img src={picture} alt="portrait" className="card__picture"/>
            <p className="card__name">{name}</p>
        </FrontSide>
        <BackSide>
            <p className="card__post">{post}</p>
        </BackSide>
    </Flippy>
);

//! == Export ==
export default Card;
