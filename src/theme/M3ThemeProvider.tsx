import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { lightThemeOptions, darkThemeOptions } from './m3Theme';
import { ThemeContext } from './useM3Theme';



interface M3ThemeProviderProps {
  children: React.ReactNode;
}

// Main theme provider component
const M3ThemeProvider: React.FC<M3ThemeProviderProps> = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  // Create the theme based on the current mode
  const theme = React.useMemo(
    () => createTheme(mode === 'dark' ? darkThemeOptions : lightThemeOptions),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    // Save preference to localStorage
    localStorage.setItem('theme', mode === 'light' ? 'dark' : 'light');
  };

  // Set mounted to true after first render and get preferred theme from localStorage
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setMode(savedTheme);
    }
  }, []);

  // Wait until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  // Create a clean theme object without any development attributes
  const cleanTheme = { ...theme };
  
  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={cleanTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default M3ThemeProvider;
