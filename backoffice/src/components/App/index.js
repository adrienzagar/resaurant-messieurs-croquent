//! == Import : npm ==
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

//! == Import : local ==
import './styles.scss';
import Login from '../../containers/Login';
import Header from '../../containers/Header';
import Sidebar from '../../containers/Sidebar';
import ProductList from '../../containers/ProductList';
import CommandList from '../../containers/CommandList';

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
        <Route exact path="/produits" component={ProductList} />
        <Route exact path="/commandes" component={CommandList} />
      </>
    )}
  </div>
);

//! == Export ==
export default App;
