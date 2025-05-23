import React, { useState } from "react";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";

interface ExternalLinkModalProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const ExternalLinkModal: React.FC<ExternalLinkModalProps> = ({
  href,
  children,
  className = "",
  title,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Restore body scrolling
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <a
        href={href}
        onClick={openModal}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="bg-background text-foreground rounded-xl shadow-xl border border-border max-w-5xl w-[90vw] h-[80vh] p-1 relative transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border p-3">
              <h3 className="text-lg font-semibold truncate">
                {title || href}
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  Open in new tab <FaExternalLinkAlt size={12} />
                </a>
                <button
                  className="text-2xl text-muted-foreground hover:text-foreground transition-colors bg-background/80 w-8 h-8 rounded-full flex items-center justify-center"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
            <iframe
              src={href}
              title={title || "External content"}
              className="w-full h-[calc(100%-56px)] border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default ExternalLinkModal;
