import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggleButton = () => {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} style={{marginLeft: '28vw', marginRight: '20vw', textAlign: 'center', width: '30vw'}}>
      Switch to {isLightTheme ? 'Dark' : 'Light'} Theme
    </button>
  );
};

export default ThemeToggleButton;

