import { createContext, useContext } from "react";

export interface ExternalLinkContextType {
  openExternalLink: (url: string, title: string, description?: string) => void;
}

export const ExternalLinkContext = createContext<ExternalLinkContextType | undefined>(undefined);

export function useExternalLink(): ExternalLinkContextType {
  const context = useContext(ExternalLinkContext);
  if (context === undefined) {
    throw new Error("useExternalLink must be used within an ExternalLinkProvider");
  }
  return context;
}
