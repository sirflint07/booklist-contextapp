import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();


export const ThemeContextProvider = ({children}) => {
  const [isLightTheme, setIsLightTheme] = useState(true)
  return (
    <ThemeContext.Provider value={{
      isLightTheme,
      light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
      dark: { syntax: '#ddd', ui: '#333', bg: '#555'},
      toggleTheme: () => {
        setIsLightTheme(!isLightTheme)
      }
    }
    }>
      {children}
    </ThemeContext.Provider>
  )
}
 
export default ThemeContextProvider;
