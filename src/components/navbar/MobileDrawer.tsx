import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import CodeIcon from "@mui/icons-material/Code";
import PublicIcon from "@mui/icons-material/Public";

import { navigationSections } from "@/utils/navigation";
import { DrawerProfileLinks } from "./ProfileLinks";
import { handleSmoothScroll } from "./smoothScroll";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  onReadmeOpen: () => void;
}

// Filter out the Home section from the navbar link list.
const navLinks = navigationSections
  .filter((section) => section.href !== "#")
  .map((section) => ({ href: section.href, label: section.name }));

const MobileDrawer = ({ open, onClose, onReadmeOpen }: MobileDrawerProps) => {
  const drawer = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        bgcolor: "background.paper",
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
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
          <Typography variant="subtitle1" sx={{ color: "common.white", fontWeight: "bold" }}>
            jasondavey.io
          </Typography>
          <IconButton
            color="info"
            onClick={(e) => {
              e.stopPropagation();
              onReadmeOpen();
              onClose();
            }}
            aria-label="Technical Documentation"
            size="small"
          >
            <PublicIcon fontSize="small" />
          </IconButton>
        </Box>
        <IconButton
          onClick={onClose}
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
              onClick={(e) => handleSmoothScroll(e, link.href, onClose)}
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
                slotProps={{
                  primary: {
                    variant: "body1",
                    sx: { fontWeight: 500 },
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ bgcolor: (theme) => alpha(theme.palette.common.white, 0.2) }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          p: 3,
        }}
      >
        <DrawerProfileLinks />
      </Box>
    </Box>
  );

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={open}
      onClose={onClose}
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
  );
};

export default MobileDrawer;
