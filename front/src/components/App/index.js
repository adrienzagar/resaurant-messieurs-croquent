//! == Import : npm
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

//! == Import : local
import Header from '../../containers/Header';
import Command from '../../containers/Command';
import Footer from '../../containers/Footer';
import './styles.scss';

const App = ({ getProducts }) => {
  
  useEffect(() => {
    console.log(getProducts())
    getProducts();
  })

  return (
    <div className="app">
      <Header />
        <Route exact path="/commander">
          <Command />
        </Route>
      <Footer />

    </div>
  );
}

export default App;
