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
import Legal from '../Legal';
import Copyright from '../Copyright';
import Footer from '../../containers/Footer';
import './styles.scss';

//! == Composant ==
const WitheHeader = () => (
  <div>
      <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/carte" component={Menu} />
            <Route exact path="/commander" component={Command} />
            <Route exact path="/nous-trouver" component={FindUs} />
            <Route exact path="/mentions-legales" component={Legal} />
            <Route exact path="/copyright" component={Copyright} />
            <Route path="" component={Err404} />
        </Switch>
      <Footer />
  </div>
);

//! == Export ==
export default WitheHeader;
