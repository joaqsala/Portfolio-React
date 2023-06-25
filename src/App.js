import React from 'react';

import PortfolioContainer from './components/PortfolioContainer';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <main className="container">
          <PortfolioContainer />
        </main>
        <Footer />
      </div>
  );
}

export default App;