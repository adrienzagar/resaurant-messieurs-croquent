//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import './styles.scss';
import Login from '../../containers/Login';
import Header from '../../containers/Header';
import Sidebar from '../../containers/Sidebar';

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
      </>
    )}
  </div>
);

//! == Export ==
export default App;
