import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  IconButton,
  useTheme,
  alpha,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  location: {
    name: string;
    embed: string; // Google Maps embed URL
  };
}

const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose, location }) => {
  const theme = useTheme();

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle
        sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 2 }}
      >
        <Box>
          <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
            {location.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Here&apos;s where you can find me in {location.name}
          </Typography>
        </Box>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: theme.palette.text.secondary,
            "&:hover": {
              color: theme.palette.text.primary,
              backgroundColor: alpha(theme.palette.text.primary, 0.1),
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ pb: 3 }}>
        <Box sx={{ width: "100%", height: 400, mt: 0.5, borderRadius: 2, overflow: "hidden" }}>
          <iframe
            src={location.embed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map of ${location.name}`}
          ></iframe>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LocationModal;
