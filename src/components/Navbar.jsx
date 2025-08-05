import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Close } from '@mui/icons-material';
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleNavClick = () => {
    // Scroll to top when navigating
    window.scrollTo(0, 0);
    closeMenu();
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Left Side - Logo and Company Name */}
        <div className="navbar-left">
          <Link to="/" className="navbar-logo" onClick={handleNavClick}>
            <img src="/MiniLogo.png" alt="Dholakiya Nexus" className="logo-img" />
            <div className="logo-text">
              <span className="company-name-dholakiya">Dholakiya</span>
              <span className="company-name-nexus">Nexus</span>
            </div>
          </Link>
        </div>
        
        {/* Right Side - Navigation Links */}
        <div className="navbar-right">
          <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={handleNavClick}>
              Home
            </Link>
            <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`} onClick={handleNavClick}>
              Services
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={handleNavClick}>
              About
            </Link>
            <Link to="/portfolio" className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`} onClick={handleNavClick}>
              Portfolio
            </Link>
            <Link to="/blog" className={`nav-link ${isActive('/blog') ? 'active' : ''}`} onClick={handleNavClick}>
              Blog
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={handleNavClick}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="navbar-toggle" onClick={toggleMenu}>
            {isOpen ? <Close /> : <Menu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 