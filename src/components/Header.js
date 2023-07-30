import React, { useState } from 'react';
import Navigation from '../components/Navigation';

function Header() {

  return (
    <nav className="header h-12 m-5 flex items-center">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="logo text-3xl ml-5 mb-2 sm:mb-0">
          JOAQSALA
        </div>
      </div>
      <Navigation />
    </nav>
  );
}

export default Header;
