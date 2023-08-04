import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="flex space-x-8 md:space-x-10 md:mr-5 pt-4">
      <NavLink to="/" className="nav-link">
        About
      </NavLink>
      <NavLink to="/portfolio" className="nav-link">
        Portfolio
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
      <NavLink to="/resume" className="nav-link">
        Resume
      </NavLink>
    </nav>
  );
}

export default Navigation;
