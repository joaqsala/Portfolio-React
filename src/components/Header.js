import React from 'react';
import './style/styles.css'

// Use object destructuring to pluck off variables from the props object
// Assign them to their own variable names
function Header({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <div className="container">
        <a className="navbar-brand logo" 
          href="#home"  // TODO: change to <Link> later
          onClick={() => handlePageChange('Home')}>JOAQSALA</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                href="#about" //TODO change to <Link> later
                onClick={() => handlePageChange('About')}
                // Checks to see if the current page is "About"
                // If it is, set the current page to 'nav-link-active', otherwise set it to 'nav-link'
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                About me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio" // TODO change to <Link> later
                onClick={() => handlePageChange('Portfolio')}
                // Check to see if the currentPage is `Portfolio`, and if set to the active link class, otherwise, set to nav-link
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact" // TODO change to <Link> later
                onClick={() => handlePageChange('Contact')}
                // Check to see if the currentPage is `Portfolio`, and if set to the active link class, otherwise, set to nav-link
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume" // TODO change to <Link> later
                onClick={() => handlePageChange('Resume')}
                // Check to see if the currentPage is `Resume`, and if set to the active link class, otherwise, set to nav-link
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
