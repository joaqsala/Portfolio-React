import React from 'react';
import Navigation from '../components/Navigation';

function Header() {

  return (
    <header className="header sm:h-18 md:h-12 m-3 flex flex-col md:flex-row items-center justify-between">
      {/* <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center"> */}
        <div className="logo-container text-3xl md:ml-5 sm:items-center">
          JOAQUIN SALAZAR
        </div>
      {/* </div> */}
      <Navigation />
    </header>
  );
}

export default Header;
