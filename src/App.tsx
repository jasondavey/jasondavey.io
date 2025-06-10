import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { M3ThemeProvider } from "./theme";
import { CssBaseline } from "@mui/material";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ExternalLinkProvider } from "./context/ExternalLinkContext";
import { DocumentModalProvider } from "./context/DocumentModalContext";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <M3ThemeProvider>
      <CssBaseline />
      <ExternalLinkProvider>
        <DocumentModalProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </DocumentModalProvider>
      </ExternalLinkProvider>
    </M3ThemeProvider>
  </QueryClientProvider>
);

export default App;
