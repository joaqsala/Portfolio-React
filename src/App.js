import React from 'react';

import PortfolioContainer from './components/PortfolioContainer';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <PortfolioContainer />
        </div>
        <Footer />
      </div>
  );
}

export default App;