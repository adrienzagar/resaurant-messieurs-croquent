//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Croque = ({ product }) => (
    <div className="croque__products">
            <div className="croque__product">
                <p className="croque__name">{product.name}</p>
                <p className="croque__price">{product.price}&euro;</p>
            </div>
            <p className="croque__description">{product.description}</p>
    </div>
);

//! == Export ==
export default Croque;
