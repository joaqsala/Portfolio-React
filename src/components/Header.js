import React from 'react';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <div className="container">
        <NavLink exact to="/" className="logo">JOAQSALA</NavLink>
        <button type="button">
        <span className="hamburger-icon"></span>
        </button>
        <div className="collapse-content">
          <ul className="nav-links">
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeClassName="active">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio" className="nav-link" activeClassName="active">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/resume" className="nav-link" activeClassName="active">
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
