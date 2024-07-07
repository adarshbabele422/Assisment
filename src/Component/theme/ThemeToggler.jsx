// ThemeToggler.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './ThemeToggler.css';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-toggler" onClick={toggleTheme}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggler;
