import { AppBar, Box, Container, IconButton, Link, Toolbar, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CodeIcon from "@mui/icons-material/Code";
import PublicIcon from "@mui/icons-material/Public";

import { ColorModeToggle } from "@/theme";
import { navigationSections } from "@/utils/navigation";
import { NavButton } from "./NavButton";
import { DesktopProfileLinks } from "./ProfileLinks";
import { handleSmoothScroll } from "./smoothScroll";

interface DesktopNavProps {
  scrolled: boolean;
  onMobileMenuOpen: () => void;
  onReadmeOpen: () => void;
}

// Filter out the Home section from the navbar link list.
const navLinks = navigationSections
  .filter((section) => section.href !== "#")
  .map((section) => ({ href: section.href, label: section.name }));

const DesktopNav = ({ scrolled, onMobileMenuOpen, onReadmeOpen }: DesktopNavProps) => {
  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 4 : 0}
      sx={{
        width: { xs: "100%", md: "calc(100% - 64px)" }, // Full width on mobile, inset on desktop
        mx: { xs: 0, md: "32px" }, // Add margin on sides for desktop
        mt: { xs: 0, md: "12px" }, // Add some top margin
        borderRadius: { xs: 0, md: "16px" }, // Rounded edges on desktop
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? alpha(theme.palette.primary.dark, scrolled ? 0.25 : 0.35)
            : alpha(theme.palette.primary.dark, scrolled ? 0.4 : 0.65), // More transparent when scrolling
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)", // For Safari support
        borderBottom: (theme) => `1px solid ${alpha(theme.palette.divider, scrolled ? 0.15 : 0)}`,
        // Keep white text in both modes
        color: "#ffffff",
        transition: (theme) =>
          theme.transitions.create(
            ["background-color", "box-shadow", "backdrop-filter", "border-bottom"],
            {
              duration: theme.transitions.duration.standard,
            }
          ),
        boxShadow: scrolled
          ? (theme) => `0 4px 30px ${alpha(theme.palette.common.black, 0.1)}`
          : "none",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ py: scrolled ? 0.5 : 1 }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mr: 2 }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
            <motion.div whileHover={{ rotate: 20, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                color="info"
                onClick={onReadmeOpen}
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
              onClick={onMobileMenuOpen}
              sx={{
                ml: 0.5,
                bgcolor: (theme) => alpha(theme.palette.background.paper, 0.1),
                "&:hover": {
                  bgcolor: (theme) => alpha(theme.palette.background.paper, 0.2),
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
                boxShadow: (theme) => `0px 2px 8px ${alpha(theme.palette.common.black, 0.1)}`,
                transition: "all 0.3s ease",
                color: "#ffffff", // White text for both modes
                "&:hover": {
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark"
                      ? alpha(theme.palette.background.paper, 0.15)
                      : alpha(theme.palette.primary.dark, 0.8),
                  boxShadow: (theme) => `0px 3px 10px ${alpha(theme.palette.common.black, 0.15)}`,
                },
              }}
            >
              {/* Navigation Section */}
              <Box sx={{ display: "flex", padding: "6px 8px" }}>
                {navLinks.map((link, index) => (
                  <Box key={link.href} sx={{ display: "flex", alignItems: "center" }}>
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
                boxShadow: (theme) => `0 2px 10px ${alpha(theme.palette.common.black, 0.15)}`,
                transition: "all 0.3s ease",
                color: "#ffffff", // White text for both modes
                "&:hover": {
                  background: (theme) =>
                    theme.palette.mode === "dark"
                      ? alpha(theme.palette.primary.dark, 0.75)
                      : alpha(theme.palette.primary.dark, 0.95),
                  boxShadow: (theme) => `0 4px 12px ${alpha(theme.palette.common.black, 0.2)}`,
                  transform: "translateY(-1px)",
                },
              }}
            >
              <DesktopProfileLinks />

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
  );
};

export default DesktopNav;
