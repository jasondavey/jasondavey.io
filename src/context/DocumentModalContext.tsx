import { useState, ReactNode, Suspense, lazy } from "react";
import { DocumentModalContext } from "./useDocumentModal";

const DocumentModal = lazy(() => import("@/components/DocumentModal"));

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
