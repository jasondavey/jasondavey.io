import React, { createContext, useContext } from 'react';

// Create theme context
export type ThemeContextType = {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  toggleTheme: () => {},
});

// Hook to use the theme context
export const useThemeContext = () => useContext(ThemeContext);
