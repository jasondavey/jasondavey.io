import { IconButton, Link, SxProps, Theme } from "@mui/material";
import { useExternalLink } from "@/context/ExternalLinkContext";
import { useDocumentModal } from "@/context/DocumentModalContext";

// Interface for LinkedIconButton props (local to this file).
interface LinkedIconButtonProps {
  href: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  "aria-label": string;
  title?: string;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

// Helper component for wrapping IconButton with a Link (mailto, download, etc.)
export const LinkedIconButton = ({
  href,
  download,
  target,
  rel,
  "aria-label": ariaLabel,
  title,
  children,
  sx,
}: LinkedIconButtonProps) => {
  return (
    <Link href={href} download={download} target={target} rel={rel} underline="none">
      <IconButton aria-label={ariaLabel} title={title} sx={sx}>
        {children}
      </IconButton>
    </Link>
  );
};

// Helper component for external links rendered through the ExternalLink modal.
export const LinkedIconButtonWithModal = ({
  href,
  "aria-label": ariaLabel,
  title,
  description,
  children,
  sx,
}: LinkedIconButtonProps & { description?: string }) => {
  const { openExternalLink } = useExternalLink();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openExternalLink(href, title || ariaLabel, description);
  };

  return (
    <Link href={href} onClick={handleClick} underline="none">
      <IconButton aria-label={ariaLabel} title={title} sx={sx}>
        {children}
      </IconButton>
    </Link>
  );
};

// Helper component for document links rendered through the DocumentModal.
export const DocumentIconButton = ({
  documentUrl,
  "aria-label": ariaLabel,
  title,
  documentType,
  children,
  sx,
}: Omit<LinkedIconButtonProps, "href"> & {
  documentUrl: string;
  documentType: "resume" | "patent";
}) => {
  const { showDocumentModal } = useDocumentModal();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    showDocumentModal(documentUrl, title || ariaLabel, documentType);
  };

  return (
    <Link href={documentUrl} onClick={handleClick} underline="none">
      <IconButton aria-label={ariaLabel} title={title} sx={sx}>
        {children}
      </IconButton>
    </Link>
  );
};
