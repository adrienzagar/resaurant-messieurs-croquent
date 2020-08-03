//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import './styles.scss';
import Header from '../Header';
import Sidebar from '../../containers/Sidebar';

//! == Composant ==
const App = () => (
    <div className="App">
      <Header />
      <Sidebar />
    </div>
);

//! == Export ==
export default App;
