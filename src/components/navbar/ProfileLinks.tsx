import { Box } from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import {
  LinkedIconButton,
  LinkedIconButtonWithModal,
  DocumentIconButton,
} from "./styles";

// Small wrapper that applies the hover/tap scale animation used on every icon in the
// desktop social "island". Kept inline here so the desktop ProfileLinks component
// stays declarative.
const MotionItem = ({
  scaleHover = 1.15,
  children,
}: {
  scaleHover?: number;
  children: React.ReactNode;
}) => (
  <Box
    component={motion.div}
    whileHover={{ scale: scaleHover }}
    whileTap={{ scale: 0.95 }}
    style={{ display: "inline-block" }}
  >
    {children}
  </Box>
);

// Desktop variant. Renders the row of profile/social icon buttons used inside the
// AppBar's M3-style "social island". Each item is wrapped in a motion div for
// hover/tap scale animations, icons are rendered at `fontSize="small"`, and the
// row ends with a divider followed by the "Buy me a coffee" action — matching the
// original layout.
export const DesktopProfileLinks = () => {
  return (
    <>
      <MotionItem>
        <LinkedIconButtonWithModal
          aria-label="GitHub"
          href="https://github.com/jasondavey/"
          title="GitHub Profile"
          description="Visit Jason's GitHub profile to see his open source projects and contributions."
        >
          <GitHubIcon fontSize="small" />
        </LinkedIconButtonWithModal>
      </MotionItem>

      <MotionItem>
        <LinkedIconButtonWithModal
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/jasondavey/"
          title="LinkedIn Profile"
          description="Connect with Jason on LinkedIn to see his professional experience and background."
        >
          <LinkedInIcon fontSize="small" sx={{ color: (theme) => theme.palette.info.main }} />
        </LinkedIconButtonWithModal>
      </MotionItem>

      {/* Preserve the empty motion.div placeholder from the original layout — it
          produced subtle horizontal spacing in the island. */}
      <Box
        component={motion.div}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        style={{ display: "inline-block" }}
      />

      <MotionItem>
        <LinkedIconButton
          aria-label="Email"
          href={`mailto:${import.meta.env.VITE_EMAIL_ADDRESS_HELLO}`}
        >
          <EmailIcon fontSize="small" sx={{ color: (theme) => theme.palette.error.light }} />
        </LinkedIconButton>
      </MotionItem>

      <MotionItem>
        <DocumentIconButton
          aria-label="Resume"
          documentUrl="/jasonrdavey.pdf"
          title="Jason Davey's Resume"
          documentType="resume"
        >
          <DescriptionIcon fontSize="small" />
        </DocumentIconButton>
      </MotionItem>

      <MotionItem>
        <DocumentIconButton
          aria-label="View Patent"
          documentUrl="/JasonDaveyPatent.pdf"
          title="Jason's US Patent"
          documentType="patent"
        >
          <WorkspacePremiumIcon fontSize="small" />
        </DocumentIconButton>
      </MotionItem>

      <Box
        component="span"
        sx={{
          height: "24px",
          width: "1px",
          bgcolor: "divider",
          mx: 0.5,
        }}
      />

      <MotionItem>
        <LinkedIconButtonWithModal
          aria-label="Buy me a coffee"
          href="https://www.buymeacoffee.com/jasondavey"
          title="Buy Me a Coffee"
          description="Support Jason's work or schedule a cappuccino chat."
        >
          <LocalCafeIcon fontSize="small" sx={{ color: "#FFDD00" }} />
        </LinkedIconButtonWithModal>
      </MotionItem>
    </>
  );
};

// Drawer variant. Renders the same profile/social icon buttons but in the original
// drawer ordering (GitHub, LinkedIn, Buy me a coffee, Email, Resume, Patent), with
// default-sized icons and no per-item motion wrappers.
export const DrawerProfileLinks = () => {
  return (
    <>
      <LinkedIconButtonWithModal
        aria-label="GitHub"
        href="https://github.com/jasondavey/"
        title="GitHub Profile"
        description="Visit Jason's GitHub profile to see his open source projects and contributions."
      >
        <GitHubIcon />
      </LinkedIconButtonWithModal>
      <LinkedIconButtonWithModal
        aria-label="LinkedIn"
        href="https://www.linkedin.com/in/jasondavey/"
        title="LinkedIn Profile"
        description="Connect with Jason on LinkedIn to see his professional experience and background."
      >
        <LinkedInIcon sx={{ color: (theme) => theme.palette.info.main }} />
      </LinkedIconButtonWithModal>
      <LinkedIconButtonWithModal
        aria-label="Buy me a coffee"
        href="https://www.buymeacoffee.com/jasondavey"
        title="Buy Me a Coffee"
        description="Support Jason's work or schedule a cappuccino chat."
      >
        <LocalCafeIcon sx={{ color: "#FFDD00" }} />
      </LinkedIconButtonWithModal>

      <LinkedIconButton
        aria-label="Email"
        href={`mailto:${import.meta.env.VITE_EMAIL_ADDRESS_HELLO}`}
      >
        <EmailIcon sx={{ color: (theme) => theme.palette.error.light }} />
      </LinkedIconButton>
      <DocumentIconButton
        aria-label="Resume"
        documentUrl="/jasonrdavey.pdf"
        title="Jason Davey's Resume"
        documentType="resume"
      >
        <DescriptionIcon />
      </DocumentIconButton>
      <DocumentIconButton
        aria-label="View Patent"
        documentUrl="/JasonDaveyPatent.pdf"
        title="Jason's US Patent"
        documentType="patent"
      >
        <WorkspacePremiumIcon />
      </DocumentIconButton>
    </>
  );
};
