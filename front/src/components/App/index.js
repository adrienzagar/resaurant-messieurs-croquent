//! == Import : npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//! == Import : local
import WithHeader from './WithHeader'
import WithoutHeader from './WithoutHeader'
import './styles.scss';

//! == Composant ==
const App = () => (
  <div className="app">
      <Switch>
        <Route exact path="/" component={WithHeader} />
        <Route exact path="/carte" component={WithHeader} />
        <Route exact path="/commander" component={WithHeader} />
        <Route exact path="/nous-trouver" component={WithHeader} />
        <Route exact path="/mentions-legales" component={WithHeader} />
        <Route exact path="/copyright" component={WithHeader} />
        <Route exact path="/validation" component={WithoutHeader} />
        <Route path="" component={WithHeader} />
      </Switch>
  </div>
);

//! == Export ==
export default App;
