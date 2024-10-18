import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/terms">Terms & Conditions</Link>
      </div>
      <p className="footer__copyright">
        &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
