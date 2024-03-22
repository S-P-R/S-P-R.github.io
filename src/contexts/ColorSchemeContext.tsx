import { createContext, useState, useEffect, ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive'

type colorScheme = {
  schemeName: string;
  toggle: () => void;
}

/* Dummy toggle value is provided, actual value will be set by ColorSchemeProvider */
const ColorSchemeContext = createContext<colorScheme>({schemeName: "dark", toggle: () => {}})

/**
 * ColorSchemeProvider
 * 
 * Sets color scheme based off system preferences. Gives child components access
 * to the current color scheme (light or dark) and the ability to switch between
 * them
 *
 */
const ColorSchemeProvider = ({ children } : { children: ReactNode }) => {
    
  const [colorScheme, setColorScheme] = useState<string> ("dark")

  /* 
   * Unlike window.matchMedia, useMediaQuery will reflect in the color-scheme
   * reflecting system preference even if that preference's changed while the 
   * site's open 
   */
  const prefersLightMode = useMediaQuery({ query: '(prefers-color-scheme: light)' })

  const setColorVars = (colorScheme : string) => {
    const root = document.documentElement;
    if (colorScheme === "dark"){
      root.style.setProperty('--background-color', '#000000');
      root.style.setProperty('--color', '#ffffff');
    } else {
      root.style.setProperty('--background-color', '#ffffff');
      root.style.setProperty('--color', '#000000');
    }
  }

  useEffect(() => {
    let newState = prefersLightMode ? "light" : "dark"
    setColorScheme(newState)
    setColorVars(newState)
  }, [prefersLightMode])

  const toggleColorScheme = () => {
    let newColor = colorScheme === "light" ? "dark" : "light"
    setColorScheme(newColor)
    setColorVars(newColor)
  }

  return (
    <ColorSchemeContext.Provider value={{schemeName: colorScheme, toggle: toggleColorScheme}}>
      {children}
    </ColorSchemeContext.Provider>
    )
  }

  export {
    ColorSchemeProvider,
    ColorSchemeContext,
  }