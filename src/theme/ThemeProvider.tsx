import React, { useState } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import { lightThemeOptions, darkThemeOptions } from "./theme";
import { ThemeContext } from "./useTheme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const readInitialMode = (): "light" | "dark" => {
  if (typeof window === "undefined") return "dark";
  const saved = window.localStorage.getItem("theme");
  return saved === "light" || saved === "dark" ? saved : "dark";
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Lazy initializer reads localStorage on first render only, avoiding
  // the dark-to-light flash that a useEffect-based read would cause.
  const [mode, setMode] = useState<"light" | "dark">(readInitialMode);

  const theme = React.useMemo(
    () => createTheme(mode === "dark" ? darkThemeOptions : lightThemeOptions),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => {
      const next = prevMode === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        window.localStorage.setItem("theme", next);
      }
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
