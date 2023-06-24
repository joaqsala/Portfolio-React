import React from 'react';

// Use object destructuring to pluck off variables from the props object
// Assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home" //TODO change to <Link> later
          onClick={() => handlePageChange('Home')}
          // Checks to see if the current page is "Home"
          // If it is, set the current page to 'nav-link-active', otherwise set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about" // TODO change to <Link> later
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so set to the active link, otherwise, set to nav-link
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
    </ul>
  );
}

export default NavTabs;
