import * as React from "react";

export const AwsS3Icon = ({ title = "Amazon S3", ...props }: React.SVGProps<SVGSVGElement> & { title?: string }) => (
  <svg
    viewBox="0 0 64 64"
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label={title}
    {...props}
  >
    {title ? <title>{title}</title> : null}
    <ellipse cx="32" cy="52" rx="24" ry="8" fill="#F58536" />
    <rect x="8" y="12" width="48" height="40" rx="8" fill="#F58536" />
    <ellipse cx="32" cy="12" rx="24" ry="8" fill="#FBBF93" />
    <ellipse cx="32" cy="12" rx="20" ry="6" fill="#fff" fillOpacity="0.5" />
    <ellipse cx="32" cy="12" rx="16" ry="4" fill="#fff" fillOpacity="0.3" />
  </svg>
);
