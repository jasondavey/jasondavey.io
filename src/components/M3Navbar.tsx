import { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  Divider,
  useScrollTrigger,
  Slide,
  Fade,
  Button,
  Link,
  SxProps,
  Theme,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CodeIcon from "@mui/icons-material/Code";
import PublicIcon from "@mui/icons-material/Public";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useThemeContext, ColorModeToggle } from "@/theme";
import ReadmeModal from "./ReadmeModal";
import { navigationSections } from "@/utils/navigation";
import ExternalLink from "./ExternalLink";
import { useExternalLink } from "@/context/ExternalLinkContext";
import { useDocumentModal } from "@/context/DocumentModalContext";

// Styled components for navigation
const NavButton = styled(Button)(({ theme }) => ({
  position: "relative",
  color: "#ffffff", // Always white text since we ensure dark backgrounds in both modes
  fontSize: "0.875rem",
  fontWeight: 500,
  padding: theme.spacing(1, 1.5),
  borderRadius: theme.shape.borderRadius,
  textTransform: "none",
  overflow: "hidden",
  "&::after": {
    content: "''",
    position: "absolute",
    left: 0,
    bottom: 0,
    width: 0,
    height: "2px",
    backgroundColor: theme.palette.secondary.main,
    transition: "width 0.3s ease",
  },
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.1), // Slightly more visible hover effect
    "&::after": {
      width: "100%",
    },
  },
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  padding: theme.spacing(1),
  transition: "transform 0.3s ease, color 0.3s ease",
  "&:hover": {
    transform: "scale(1.15)",
  },
}));

// Interface for LinkedIconButton props
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

// Helper component for wrapping IconButton with Link
const LinkedIconButton = ({
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
    <Link
      href={href}
      download={download}
      target={target}
      rel={rel}
      underline="none"
    >
      <IconButton aria-label={ariaLabel} title={title} sx={sx}>
        {children}
      </IconButton>
    </Link>
  );
};

// Helper component for external links with modal
const LinkedIconButtonWithModal = ({
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
    <Link
      href={href}
      onClick={handleClick}
      underline="none"
    >
      <IconButton aria-label={ariaLabel} title={title} sx={sx}>
        {children}
      </IconButton>
    </Link>
  );
};

// Helper component for document links with modal
const DocumentIconButton = ({
  documentUrl,
  "aria-label": ariaLabel,
  title,
  documentType,
  children,
  sx,
}: Omit<LinkedIconButtonProps, 'href'> & { documentUrl: string; documentType: 'resume' | 'patent' }) => {
  const { showDocumentModal } = useDocumentModal();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    showDocumentModal(documentUrl, title || ariaLabel, documentType);
  };
  
  return (
    <Link
      href={documentUrl}
      onClick={handleClick}
      underline="none"
    >
      <IconButton aria-label={ariaLabel} title={title} sx={sx}>
        {children}
      </IconButton>
    </Link>
  );
};

// Smooth scrolling handler
const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  targetId: string,
  closeMenu?: () => void
) => {
  e.preventDefault();

  // Only proceed if it's a hash link (internal page navigation)
  if (targetId.startsWith("#")) {
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Close mobile menu if open
      if (closeMenu) {
        closeMenu();
      }

      // Get the target position
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      // Get the current scroll position
      const startPosition = window.scrollY;
      // Calculate distance
      const distance = targetPosition - startPosition;

      // Speed in pixels per millisecond
      const speed = 0.5;
      // Calculate duration based on distance and speed
      const duration = Math.abs(distance / speed);
      // Cap duration to provide minimum and maximum scroll times
      const cappedDuration = Math.max(500, Math.min(duration, 2000));

      // Start time
      let startTime: number | null = null;

      // Animation function
      function animation(currentTime: number) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / cappedDuration, 1);

        // Easing function for smoother start/stop
        const ease = (t: number) =>
          t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        window.scrollTo(0, startPosition + distance * ease(progress));

        if (timeElapsed < cappedDuration) {
          requestAnimationFrame(animation);
        } else {
          // Update URL hash without causing a jump
          window.history.pushState(null, "", targetId);
        }
      }

      requestAnimationFrame(animation);
    }
  }
};

// Navbar component with M3 styling
const M3Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [readmeOpen, setReadmeOpen] = useState(false);
  const { mode } = useThemeContext();

  // Detect scroll for navbar styling changes
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80,
  });

  // Fix for iOS viewport height issues
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);

    return () => {
      window.removeEventListener("resize", setVh);
    };
  }, []);

  // Handle body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  // Navigation links - use shared navigation sections directly
  const navLinks = navigationSections
    .filter((section) => section.href !== "#") // Filter out Home section from navbar
    .map((section) => ({
      href: section.href,
      label: section.name, // Use name directly as label
    }));

  // Drawer content
  const drawer = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        bgcolor: "background.paper",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.2),
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CodeIcon color="secondary" />
          <Typography
            variant="subtitle1"
            color="common.white"
            fontWeight="bold"
          >
            jasondavey.io
          </Typography>
          <IconButton
            color="info"
            onClick={(e) => {
              e.stopPropagation();
              setReadmeOpen(true);
              handleDrawerClose();
            }}
            aria-label="Technical Documentation"
            size="small"
          >
            <PublicIcon fontSize="small" />
          </IconButton>
        </Box>
        <IconButton
          onClick={handleDrawerClose}
          aria-label="Close menu"
          sx={{ color: "common.white" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ flex: 1, py: 2 }}>
        {navLinks.map((link) => (
          <ListItem key={link.href} disablePadding>
            <ListItemButton
              component="a"
              href={link.href}
              onClick={(e) =>
                handleSmoothScroll(e, link.href, handleDrawerClose)
              }
              sx={{
                py: 1.5,
                px: 2,
                transition: "background-color 0.3s",
                "&:hover": {
                  bgcolor: "action.hover",
                },
              }}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  variant: "body1",
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider
        sx={{ bgcolor: (theme) => alpha(theme.palette.common.white, 0.2) }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          p: 3,
        }}
      >
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
        <LinkedIconButtonWithModal
          aria-label="X"
          href="https://x.com/ydohdohdoh"
          title="X/Twitter Profile"
          description="Follow Jason on X (formerly Twitter) for updates and thoughts."
        >
          <FaSquareXTwitter />
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
      </Box>
    </Box>
  );

  return (
    <>
      <Fade in={true}>
        <AppBar
          position="fixed"
          elevation={scrollTrigger ? 4 : 0}
          sx={{
            width: { xs: "100%", md: "calc(100% - 64px)" }, // Full width on mobile, inset on desktop
            mx: { xs: 0, md: "32px" }, // Add margin on sides for desktop
            mt: { xs: 0, md: "12px" }, // Add some top margin
            borderRadius: { xs: 0, md: "16px" }, // Rounded edges on desktop
            backgroundImage: scrollTrigger
              ? (theme) =>
                  theme.palette.mode === "dark"
                    ? `linear-gradient(to right, ${alpha(
                        theme.palette.primary.dark,
                        0.95
                      )}, ${alpha(theme.palette.primary.main, 0.95)})`
                    : `linear-gradient(to right, ${alpha(
                        theme.palette.primary.dark,
                        0.9
                      )}, ${alpha(theme.palette.primary.main, 0.9)})`
              : "none",
            backgroundColor: scrollTrigger
              ? "transparent"
              : (theme) =>
                  theme.palette.mode === "dark"
                    ? alpha(theme.palette.primary.dark, 0.4)
                    : alpha(theme.palette.primary.dark, 0.75), // Darker version for light mode
            backdropFilter: "blur(10px)",
            borderBottom: (theme) =>
              scrollTrigger
                ? `1px solid ${alpha(theme.palette.divider, 0.2)}`
                : "none",
            // Keep white text in both modes
            color: "#ffffff",
            transition: (theme) =>
              theme.transitions.create(
                ["background-color", "box-shadow", "backdrop-filter"],
                {
                  duration: theme.transitions.duration.standard,
                }
              ),
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ py: scrollTrigger ? 0.5 : 1 }}>
              {/* Logo */}
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mr: 2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    component="a"
                    href="#"
                    onClick={(e) => handleSmoothScroll(e, "#")}
                    color="inherit"
                    sx={{ p: 0.5 }}
                    aria-label="Home"
                  >
                    <CodeIcon sx={{ fontSize: "1.5rem" }} />
                  </IconButton>
                </motion.div>
                <Box
                  className="site-title"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#ffffff !important", // Force white text with !important
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    letterSpacing: 0.5,
                  }}
                >
                  jasondavey.io
                </Box>
                <motion.div
                  whileHover={{ rotate: 20, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    color="info"
                    onClick={() => setReadmeOpen(true)}
                    aria-label="Technical Documentation"
                    title="Click here to find out how this website was built"
                    size="small"
                    sx={{ ml: 1 }}
                  >
                    <PublicIcon fontSize="small" />
                  </IconButton>
                </motion.div>
              </Box>

              {/* Mobile menu toggle */}
              <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
                <ColorModeToggle />
                <IconButton
                  color="inherit"
                  aria-label="open menu"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{
                    ml: 0.5,
                    bgcolor: (theme) =>
                      alpha(theme.palette.background.paper, 0.1),
                    "&:hover": {
                      bgcolor: (theme) =>
                        alpha(theme.palette.background.paper, 0.2),
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>

              {/* Material Design 3 Segmented Surface with Dynamic Island */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  flex: 1,
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    borderRadius: "28px",
                    overflow: "hidden",
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark"
                        ? alpha(theme.palette.background.paper, 0.1)
                        : alpha(theme.palette.primary.dark, 0.7), // Darker background for light mode
                    backdropFilter: "blur(10px)",
                    boxShadow: (theme) =>
                      `0px 2px 8px ${alpha(theme.palette.common.black, 0.1)}`,
                    transition: "all 0.3s ease",
                    color: "#ffffff", // White text for both modes
                    "&:hover": {
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark"
                          ? alpha(theme.palette.background.paper, 0.15)
                          : alpha(theme.palette.primary.dark, 0.8),
                      boxShadow: (theme) =>
                        `0px 3px 10px ${alpha(
                          theme.palette.common.black,
                          0.15
                        )}`,
                    },
                  }}
                >
                  {/* Navigation Section */}
                  <Box sx={{ display: "flex", padding: "6px 8px" }}>
                    {navLinks.map((link, index) => (
                      <Box
                        key={link.href}
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <Link
                          href={link.href}
                          onClick={(e) => handleSmoothScroll(e, link.href)}
                          underline="none"
                          sx={{ display: "flex" }}
                        >
                          <NavButton>{link.label}</NavButton>
                        </Link>
                        {index < navLinks.length - 1 && (
                          <Typography
                            variant="body2"
                            sx={{
                              mx: 0.5,
                              color: "#ffffff", // Ensuring divider is visible in both modes
                            }}
                          >
                            |
                          </Typography>
                        )}
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* Social Media "Island" - Material Design 3 style */}
                <Box
                  sx={{
                    background: (theme) =>
                      theme.palette.mode === "dark"
                        ? alpha(theme.palette.primary.dark, 0.65)
                        : alpha(theme.palette.primary.dark, 0.85), // Darker background in light mode for better contrast
                    padding: "6px 12px",
                    borderRadius: "24px",
                    marginRight: "8px",
                    marginLeft: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    boxShadow: (theme) =>
                      `0 2px 10px ${alpha(theme.palette.common.black, 0.15)}`,
                    transition: "all 0.3s ease",
                    color: "#ffffff", // White text for both modes
                    "&:hover": {
                      background: (theme) =>
                        theme.palette.mode === "dark"
                          ? alpha(theme.palette.primary.dark, 0.75)
                          : alpha(theme.palette.primary.dark, 0.95),
                      boxShadow: (theme) =>
                        `0 4px 12px ${alpha(theme.palette.common.black, 0.2)}`,
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ display: "inline-block" }}
                  >
                    <LinkedIconButtonWithModal
                      aria-label="GitHub"
                      href="https://github.com/jasondavey/"
                      title="GitHub Profile"
                      description="Visit Jason's GitHub profile to see his open source projects and contributions."
                    >
                      <GitHubIcon fontSize="small" />
                    </LinkedIconButtonWithModal>
                  </Box>

                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ display: "inline-block" }}
                  >
                    <LinkedIconButtonWithModal
                      aria-label="LinkedIn"
                      href="https://www.linkedin.com/in/jasondavey/"
                      title="LinkedIn Profile"
                      description="Connect with Jason on LinkedIn to see his professional experience and background."
                    >
                      <LinkedInIcon
                        fontSize="small"
                        sx={{ color: (theme) => theme.palette.info.main }}
                      />
                    </LinkedIconButtonWithModal>
                  </Box>

                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ display: "inline-block" }}
                  >
                    <LinkedIconButtonWithModal
                      aria-label="X"
                      href="https://x.com/ydohdohdoh"
                      title="X/Twitter Profile"
                      description="Follow Jason on X (formerly Twitter) for updates and thoughts."
                    >
                      <FaSquareXTwitter style={{ fontSize: "1.25rem" }} />
                    </LinkedIconButtonWithModal>
                  </Box>

                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ display: "inline-block" }}
                  >
                    <LinkedIconButton
                      aria-label="Email"
                      href={`mailto:${
                        import.meta.env.VITE_EMAIL_ADDRESS_HELLO
                      }`}
                    >
                      <EmailIcon
                        fontSize="small"
                        sx={{ color: (theme) => theme.palette.error.light }}
                      />
                    </LinkedIconButton>
                  </Box>

                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ display: "inline-block" }}
                  >
                    <DocumentIconButton
                      aria-label="Resume"
                      documentUrl="/jasonrdavey.pdf"
                      title="Jason Davey's Resume"
                      documentType="resume"
                    >
                      <DescriptionIcon fontSize="small" />
                    </DocumentIconButton>
                  </Box>

                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ display: "inline-block" }}
                  >
                    <DocumentIconButton
                      aria-label="View Patent"
                      documentUrl="/JasonDaveyPatent.pdf"
                      title="Jason's US Patent"
                      documentType="patent"
                    >
                      <WorkspacePremiumIcon fontSize="small" />
                    </DocumentIconButton>
                  </Box>

                  <Box
                    component="span"
                    sx={{
                      height: "24px",
                      width: "1px",
                      bgcolor: "divider",
                      mx: 0.5,
                    }}
                  />

                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ display: "inline-block" }}
                  >
                    <LinkedIconButtonWithModal
                      aria-label="Buy me a coffee"
                      href="https://www.buymeacoffee.com/jasondavey"
                      title="Buy Me a Coffee"
                      description="Support Jason's work or schedule a cappuccino chat."
                    >
                      <LocalCafeIcon
                        fontSize="small"
                        sx={{ color: "#FFDD00" }}
                      />
                    </LinkedIconButtonWithModal>
                  </Box>

                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ display: "inline-block" }}
                    sx={{ ml: 0.5 }}
                  >
                    <ColorModeToggle />
                  </Box>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Fade>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            bgcolor: (theme) =>
              theme.palette.mode === "dark"
                ? theme.palette.background.paper
                : theme.palette.primary.dark,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Technical Documentation Modal */}
      <ReadmeModal open={readmeOpen} onOpenChange={setReadmeOpen} />
    </>
  );
};

export default M3Navbar;
