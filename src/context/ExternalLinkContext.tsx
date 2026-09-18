import React, { useState, ReactNode, Suspense, lazy } from "react";
import { ExternalLinkContext } from "./useExternalLink";

const ExternalLinkModal = lazy(() => import("@/components/ExternalLinkModal"));

interface ExternalLinkProviderProps {
  children: ReactNode;
}

export const ExternalLinkProvider: React.FC<ExternalLinkProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [linkData, setLinkData] = useState({
    url: "",
    title: "",
    description: "",
  });

  const openExternalLink = (url: string, title: string, description?: string) => {
    setLinkData({ url, title, description: description || "" });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ExternalLinkContext.Provider value={{ openExternalLink }}>
      {children}
      {isModalOpen && (
        <Suspense fallback={null}>
          <ExternalLinkModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            url={linkData.url}
            title={linkData.title}
            description={linkData.description}
          />
        </Suspense>
      )}
    </ExternalLinkContext.Provider>
  );
};
