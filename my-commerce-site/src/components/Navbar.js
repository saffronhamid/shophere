// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Assuming you already have a CSS file for Navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Logo - Wrapped in Link to Home */}
        <div className="navbar-logo">
          <Link to="/">
            <img src="path_to_logo" alt="E-Shop Logo" className="logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/kids">Kids</Link>
          <Link to="/home-living">Home & Living</Link>
          <Link to="/beauty">Beauty</Link>
          <Link to="/studio">Studio</Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className="navbar-search">
        <input type="text" placeholder="Search for products, brands and more" />
      </div>

      {/* Right Side Icons */}
      <div className="navbar-right">
        <Link to="/profile" className="nav-icon">👤 Profile</Link>
        <Link to="/wishlist" className="nav-icon">❤️ Wishlist</Link>
        <Link to="/cart" className="nav-icon">🛒 Bag</Link>
      </div>
    </nav>
  );
};

export default Navbar;
