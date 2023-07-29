import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
      <ul className="flex space-x-10 mr-5">
        <li>
          <NavLink to="/" className="nav-link" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className="nav-link" activeClassName="active">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" className="nav-link" activeClassName="active">
            Resume
          </NavLink>
        </li>
      </ul>
  );
}

export default Navigation;
