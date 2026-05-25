import { ReactElement, ReactNode } from "react";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { MemoryRouter } from "react-router-dom";
import { ThemeContext } from "@/theme/useM3Theme";
import { ExternalLinkProvider } from "@/context/ExternalLinkContext";
import { DocumentModalProvider } from "@/context/DocumentModalContext";

const testTheme = createTheme({ palette: { mode: "light" } });

function AllProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeContext.Provider value={{ mode: "light", toggleTheme: () => {} }}>
      <ThemeProvider theme={testTheme}>
        <MemoryRouter>
          <ExternalLinkProvider>
            <DocumentModalProvider>{children}</DocumentModalProvider>
          </ExternalLinkProvider>
        </MemoryRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function render(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) {
  return rtlRender(ui, { wrapper: AllProviders, ...options });
}

export * from "@testing-library/react";
