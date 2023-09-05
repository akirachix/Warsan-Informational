import React, { useState } from 'react';
import './style.css';

function Navbar() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <nav>
      <div className={`navbar-wrapper ${isNavOpen ? 'nav-open' : ''}`}>
        <span className="brand-container">
          <a className="logo-link" href="#">
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo" className="logo-img" />
          </a>
          <a className="brand-name" href="#">
            RAJO
          </a>
        </span>
        <div className={`hamburger-menu ${isNavOpen ? 'open' : ''} `} onClick={toggleNav}>
          {isNavOpen ? (
            <div className="close-icon">
              <span></span>
              <span></span>
            </div>
          ) : (
            <>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </>
          )}
        </div>
        <ul className={`nav-list ${isNavOpen ? 'open' : ''}`}>
          <div className="centered-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Contact Us</a></li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
