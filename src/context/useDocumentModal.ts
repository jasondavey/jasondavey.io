import { createContext, useContext } from "react";

export interface DocumentModalContextProps {
  showDocumentModal: (
    documentUrl: string,
    title: string,
    documentType: "resume" | "patent"
  ) => void;
}

export const DocumentModalContext = createContext<DocumentModalContextProps | undefined>(undefined);

export function useDocumentModal(): DocumentModalContextProps {
  const context = useContext(DocumentModalContext);
  if (context === undefined) {
    throw new Error("useDocumentModal must be used within a DocumentModalProvider");
  }
  return context;
}
