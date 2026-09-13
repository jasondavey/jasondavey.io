import React, { useState, Suspense, lazy } from "react";
const CarbonInfoModal = lazy(() => import("./CarbonInfoModal"));

// Carbon badge component that opens a modal with detailed information
const CarbonBadge: React.FC<{ darkMode?: boolean }> = ({ darkMode = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bgColor = darkMode ? "#0E0E10" : "#1A3A38";
  const hoverColor = darkMode ? "#1B1B1D" : "#2F5753";
  const linkColor = "#24BE74"; // Consistent green color for link
  const textColor = "#FFFFFF";

  return (
    <div className="mt-4 flex justify-center">
      {/* Show modal when open */}
      {isModalOpen && (
        <Suspense fallback={null}>
          <CarbonInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </Suspense>
      )}

      {/* Badge that triggers the modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        title="Website Carbon: low carbon website"
        style={{
          display: "inline-flex",
          alignItems: "center",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          color: textColor,
          textDecoration: "none",
          backgroundColor: bgColor,
          padding: "4px 4px",
          borderRadius: "6px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
          margin: "0 auto",
        }}
        className="hover:opacity-90"
      >
        <span
          style={{
            backgroundColor: hoverColor,
            padding: "3px 6px",
            borderRadius: "4px",
            color: linkColor,
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            fontSize: "11px",
          }}
        >
          Low carbon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{
              width: "13px",
              height: "13px",
              fill: "currentColor",
              marginLeft: "4px",
              transform: "translateY(1px)",
            }}
          >
            <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7S150.9 65.3 256 65.3 446.7 150.9 446.7 256 361.1 446.7 256 446.7z"></path>
            <path d="M213.3 134.5v118.8H128L298.7 377V258.2H384"></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default CarbonBadge;
