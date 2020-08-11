//! == Import : npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//! == Import : local
import Header from '../../containers/Header';
import Home from '../../containers/Home';
import Menu from '../../containers/Menu';
import Command from '../../containers/Command';
import FindUs from '../FindUs';
import Err404 from '../Err404';
import Footer from '../../containers/Footer';
import ValidationPage from '../../containers/ValidationPage';

import './styles.scss';

//! == Composant ==
const App = () => (
  <div className="app">
    {window.location.pathname !== '/validation' ? <Header /> : null}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/carte" component={Menu} />
        <Route exact path="/commander" component={Command} />
        <Route exact path="/nous-trouver" component={FindUs} />
        <Route exact path="/validation" component={ValidationPage} />
        <Route path="" component={Err404} />
      </Switch>
      {window.location.pathname !== '/validation' ? <Footer /> : null}
  </div>
);

export default App;
