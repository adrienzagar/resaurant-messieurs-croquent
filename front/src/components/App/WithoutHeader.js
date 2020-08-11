//! == Import : npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';
//! == Import : local
import ValidationPage from '../../containers/ValidationPage';
import './styles.scss';

//! == Composant ==
const WithoutHeader = () => (
  <div>
        <Switch>
            <Route exact path="/validation" component={ValidationPage} />
        </Switch>
  </div>
);

//! == Export ==
export default WithoutHeader;
