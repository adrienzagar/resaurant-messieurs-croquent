//! == Import : npm ==
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

//! == Import : local ==
import './styles.scss';
import Login from '../../containers/Login';
import Header from '../../containers/Header';
import Sidebar from '../../containers/Sidebar';
import ProductList from '../../containers/ProductList';
import CommandList from '../../containers/CommandList';
import Home from '../../containers/Home'

//! == Composant ==
const App = ({ isLogged, checkIsLogged }) => {
  useEffect(() => { checkIsLogged() }, []);
  return (
    <div className="App">
      {!isLogged && (
        <Login />
      )}
      {isLogged && (
        <>
          <Header />
          <Sidebar />
          <Switch />
             <Route exact path="/backoffice" component={Home} />
             <Route exact path={`${process.env.PUBLIC_URL}/produits`} component={CommandList} />
             <Route exact path={`${process.env.PUBLIC_URL}/commandes`} component={ProductList} />
          <Switch />
          {/* <Route exact path="/commandes" component={CommandList} /> */}
        </>
      )}
    </div>
  );
};

//! == Export ==
export default App;
