//! == Import : npm ==
import React from 'react';
import { Route } from 'react-router-dom';

//! == Import : local ==
import './styles.scss';
import Login from '../../containers/Login';
import Header from '../../containers/Header';
import Sidebar from '../../containers/Sidebar';
import Product from '../../containers/Product';

//! == Composant ==
const App = ({ isLogged }) => (
  <div className="App">
    {!isLogged && (
      <Login />
    )}
    {isLogged && (
      <>
        <Header />
        <Sidebar />
        <Route exact path="/produits" component={Product} />
      </>
    )}
  </div>
);

//! == Export ==
export default App;
