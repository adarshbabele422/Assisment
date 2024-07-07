import React, { useState , useContext } from 'react';
import { ThemeContext } from './theme/ThemeContext';
import './Header.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-brand">
        <a href="/"><img src='./images/logo.png' alt='logo' height={20} /></a>
        
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''} ${theme}`}>
        <li className="navbar-item">
          <a href="/" className={`navbar-link ${theme}`}>Home</a>
        </li>
        <li className="navbar-item">
          <a href="/service" className={`navbar-link ${theme}`}>Service</a>
        </li>
        <li className="navbar-item">
          <a href="/features" className={`navbar-link ${theme}`}>Features</a>
        </li>
        <li className="navbar-item">
          <a href="/product" className={`navbar-link ${theme}`}>Product</a>
        </li>
        <li className="navbar-item">
          <a href="/testimonial" className={`navbar-link ${theme}`}>Testimonial</a>
        </li>
        <li className="navbar-item">
          <a href="/faq" className={`navbar-link ${theme}`}>FAQ</a>
        </li>
        <li className='navbar-spacer'></li>
        <li className="navbar-item">
          <a href="/login" className="navbar-link1 color">Login</a>
        </li>
        <li className="navbar-item">
          <a href="/signup" className="navbar-link1 bg-color">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
