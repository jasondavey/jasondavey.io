import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Chip,
  IconButton,
  useTheme,
  alpha,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { FocusPillar } from "@/constants/currentFocus";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: Number(theme.shape.borderRadius) * 3,
    background:
      theme.palette.mode === "dark"
        ? `linear-gradient(145deg, ${alpha(
            theme.palette.grey[900],
            0.9
          )}, ${alpha(theme.palette.background.paper, 0.9)})`
        : `linear-gradient(145deg, ${alpha(
            theme.palette.background.paper,
            0.9
          )}, ${alpha(theme.palette.grey[100], 0.9)})`,
    backdropFilter: "blur(10px)",
    border: `1px solid ${
      theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.8)"
    }`,
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 10px 40px rgba(0, 0, 0, 0.5)"
        : "0 10px 40px rgba(0, 0, 0, 0.1)",
    maxWidth: "700px",
    width: "90vw",
  },
}));

interface FocusDetailsModalProps {
  pillar: FocusPillar;
  open: boolean;
  onClose: () => void;
}

const FocusDetailsModal = ({ pillar, open, onClose }: FocusDetailsModalProps) => {
  const theme = useTheme();

  return (
    <StyledDialog open={open} onClose={onClose} aria-labelledby="focus-details-title">
      <DialogTitle
        id="focus-details-title"
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", pb: 1 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              color: theme.palette.primary.contrastText,
              fontSize: "1.5rem",
              flexShrink: 0,
            }}
          >
            {pillar.icon}
          </Box>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
            {pillar.title}
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

      <DialogContent sx={{ px: 3 }}>
        <Box
          sx={{
            color: theme.palette.text.primary,
            "& p": { mb: 2, lineHeight: 1.7 },
            "& ul": { pl: 3, mb: 2 },
            "& li": { mb: 1, lineHeight: 1.6 },
          }}
        >
          {pillar.details}
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
          {pillar.technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                borderRadius: "16px",
                fontWeight: 500,
                background: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              }}
            />
          ))}
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button
          onClick={onClose}
          sx={{ ml: "auto", textTransform: "none", fontWeight: 600, borderRadius: "20px" }}
        >
          Close
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default FocusDetailsModal;
