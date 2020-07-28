//! == Import : npm
import React from 'react';
import { Route } from 'react-router-dom';

//! == Import : local
import Header from '../../containers/Header';
import Footer from '../../containers/Footer'
import Command from '../../containers/Command'
import './styles.scss';

function App() {
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
