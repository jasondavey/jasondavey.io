import { createContext, useState, useContext, ReactNode, Suspense, lazy } from "react";

const DocumentModal = lazy(() => import("@/components/DocumentModal"));

interface DocumentModalContextProps {
  showDocumentModal: (
    documentUrl: string,
    title: string,
    documentType: "resume" | "patent"
  ) => void;
}

const DocumentModalContext = createContext<DocumentModalContextProps | undefined>(undefined);

interface DocumentModalProviderProps {
  children: ReactNode;
}

export function DocumentModalProvider({ children }: DocumentModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [documentUrl, setDocumentUrl] = useState("");
  const [title, setTitle] = useState("");
  const [documentType, setDocumentType] = useState<"resume" | "patent">("resume");

  const showDocumentModal = (url: string, modalTitle: string, type: "resume" | "patent") => {
    setDocumentUrl(url);
    setTitle(modalTitle);
    setDocumentType(type);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <DocumentModalContext.Provider value={{ showDocumentModal }}>
      {children}
      {isOpen && (
        <Suspense fallback={null}>
          <DocumentModal
            isOpen={isOpen}
            onClose={handleClose}
            documentUrl={documentUrl}
            title={title}
            documentType={documentType}
          />
        </Suspense>
      )}
    </DocumentModalContext.Provider>
  );
}

// Exported as a named function for better React Fast Refresh support
export function useDocumentModal(): DocumentModalContextProps {
  const context = useContext(DocumentModalContext);
  if (context === undefined) {
    throw new Error("useDocumentModal must be used within a DocumentModalProvider");
  }
  return context;
}
