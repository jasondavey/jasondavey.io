import React, { useState, useEffect } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import { lightThemeOptions, darkThemeOptions } from "./theme";
import { ThemeContext } from "./useTheme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

// Main theme provider component
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<"light" | "dark">("dark");

  // Create the theme based on the current mode
  const theme = React.useMemo(
    () => createTheme(mode === "dark" ? darkThemeOptions : lightThemeOptions),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    // Save preference to localStorage
    localStorage.setItem("theme", mode === "light" ? "dark" : "light");
  };

  // Set mounted to true after first render and get preferred theme from localStorage
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
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
      <MuiThemeProvider theme={cleanTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
