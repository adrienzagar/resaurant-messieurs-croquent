//! == Import : npm
import React from 'react';

//! == Import : local
import Header from '../../containers/Header';
import Footer from '../../containers/Footer'
import './styles.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
