import React, { useState }  from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './style/styles.css';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
    const handlePageChange = (page) => setCurrentPage(page);

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'portfolio':
        return <Portfolio />;
      case 'resume':
        return <Resume />;
      default:
        return <Home />;
    }
  };

    return (
        <div>
        {/* Passing the currentPage from state and the function to update it */}
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Calling the renderPage method which will return a component  */}
        {renderPage()}
        <Footer />
        </div>
      );
};