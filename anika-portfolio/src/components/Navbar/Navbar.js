import React, { useState } from 'react';
import logo from '../../assets/ChatGPT Image Mar 7, 2026, 12_49_59 AM.png';
import './Navbar.css'; // Assuming you've moved navbar styles to its own file
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper to close menu when a link is clicked
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <a href="#home" onClick={closeMenu}>
        <img src={logo} className="logo" alt="Logo" />
      </a>

      <div 
      className={`nav-overlay ${menuOpen ? "active" : ""}`} 
      onClick={closeMenu}
    ></div>

      {/* Animated Hamburger Icon */}
      <div 
        className={`hamburger ${menuOpen ? "active" : ""}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#achievements" onClick={closeMenu}>Achievements</a></li>
        <li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
        <li><a href="#videos" onClick={closeMenu}>Videos</a></li>
      {/* SOCIAL ICONS */}
        <li className="social-icon">
          <a href="https://www.instagram.com/anika_anukriti_10ve/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </li>

        <li className="social-icon">
          <a href="https://www.youtube.com/@funwithme2328" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;