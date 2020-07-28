//! == Import : npm
import React from 'react';
import { Route } from 'react-router-dom';

<<<<<<< HEAD
=======
//! == Import : local
import Header from '../../containers/Header';
import Command from '../../containers/Command';
import Footer from '../../containers/Footer';
>>>>>>> master
import './styles.scss';
import FindUs from '../findUS';



<<<<<<< HEAD
function App() {
  return (
    <div>
    <FindUs />
 
    </div>
  );
}
=======
const App = () => (
  <div className="app">
    <Header />
      <Route exact path="/commander">
        <Command />
      </Route>
    <Footer />
  </div>
);
>>>>>>> master

export default App;
