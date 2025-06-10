import React from "react";
import { useExternalLink } from "@/context/ExternalLinkContext";
import { Link, LinkProps } from "@mui/material";
import { SxProps, Theme } from "@mui/system";

interface ExternalLinkProps extends Omit<LinkProps, 'title' | 'href'> {
  href: string;
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
  underline?: "none" | "hover" | "always";
  sx?: SxProps<Theme>;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  title,
  description,
  className,
  children,
  underline,
  sx,
  ...props
}) => {
  const { openExternalLink } = useExternalLink();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openExternalLink(href, title, description);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={className}
      underline={underline || "hover"}
      sx={sx}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ExternalLink;
