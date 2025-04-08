import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './ThemeSwitcher.css'; // Import your CSS file

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Effect to apply the selected theme to the body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <button onClick={toggleTheme} className="theme-switcher">
      {theme === 'light' ? (
        <FontAwesomeIcon icon={faMoon} className="moon-icon" />
      ) : (
        <FontAwesomeIcon icon={faSun} className="sun-icon" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
