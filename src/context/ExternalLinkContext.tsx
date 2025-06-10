import React, { createContext, useContext, useState, ReactNode } from "react";
import ExternalLinkModal from "@/components/ExternalLinkModal";

interface ExternalLinkContextType {
  openExternalLink: (url: string, title: string, description?: string) => void;
}

const ExternalLinkContext = createContext<ExternalLinkContextType | undefined>(undefined);

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
      <ExternalLinkModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        url={linkData.url}
        title={linkData.title}
        description={linkData.description}
      />
    </ExternalLinkContext.Provider>
  );
};

export const useExternalLink = (): ExternalLinkContextType => {
  const context = useContext(ExternalLinkContext);
  if (context === undefined) {
    throw new Error("useExternalLink must be used within an ExternalLinkProvider");
  }
  return context;
};
