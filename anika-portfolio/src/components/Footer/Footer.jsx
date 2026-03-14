import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>Anika Anukriti</h2>
          <p>Dance Portfolio</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-nav">
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#achievements">Achievements</a>
          <a href="#Gallery">Gallery</a>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Anika Anukriti
      </div>
      <div className="footer-copy">
        Made with ♥️ All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;