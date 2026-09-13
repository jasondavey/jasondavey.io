import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./theme";
import { CssBaseline } from "@mui/material";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ExternalLinkProvider } from "./context/ExternalLinkContext";
import { DocumentModalProvider } from "./context/DocumentModalContext";

const App = () => (
  <ThemeProvider>
    <CssBaseline />
    <ExternalLinkProvider>
      <DocumentModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </DocumentModalProvider>
    </ExternalLinkProvider>
  </ThemeProvider>
);

export default App;
