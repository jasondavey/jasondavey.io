import React from "react";

/**
 * JDLogo - Theme-aware SVG logo component
 * The text color adapts to light/dark mode using Tailwind's text-foreground class.
 * The background adapts using bg-background via a wrapping div.
 */
const JDLogo: React.FC<{ size?: number; className?: string }> = ({ size = 32, className = "" }) => (
  <div
    className={`inline-flex items-center justify-center bg-background transition-colors rounded ${className}`}
    style={{ width: size, height: size }}
  >
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="6" className="fill-background" />
      <text
        x="6"
        y="24"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="20"
        fontWeight="bold"
        className="fill-foreground"
      >
        JD
      </text>
    </svg>
  </div>
);

export default JDLogo;
