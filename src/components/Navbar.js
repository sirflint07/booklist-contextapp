import React, { useContext } from 'react';
import ThemeContextProvider, { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
  const {isLightTheme, light, dark} = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark
  return (
    <ThemeContextProvider>
    <nav style={{color: theme.syntax, backgroundColor: theme.ui}}>
      <h1 style={{textAlign: 'center', paddingTop: 2}}>BookList App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    </ThemeContextProvider>
  );
}

export default Navbar;