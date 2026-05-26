import { Button } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

// Shared nav button used in the desktop M3-style segmented surface.
// Extracted from Navbar.tsx during the navbar decomposition.
export const NavButton = styled(Button)(({ theme }) => ({
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
