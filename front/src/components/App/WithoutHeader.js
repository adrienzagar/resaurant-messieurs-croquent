import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ValidationPage from '../../containers/ValidationPage';

import './styles.scss';

const WithoutHeader = () => (
  <div>
        <Switch>
            <Route exact path="/validation" component={ValidationPage} />
        </Switch>
  </div>
);
export default WithoutHeader;
