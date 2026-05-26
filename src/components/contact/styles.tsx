import { Box, Paper, TextField } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

// Styled components
export const SectionContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(15, 0),
  overflow: "hidden",
  backgroundColor:
    theme.palette.mode === "dark"
      ? alpha(theme.palette.primary.dark, 0.05)
      : alpha(theme.palette.primary.light, 0.05),
}));

export const GlassCard = styled(Paper)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius ? `${Number(theme.shape.borderRadius) * 3}px` : "24px",
  overflow: "hidden",
  background:
    theme.palette.mode === "dark"
      ? `linear-gradient(145deg, ${alpha(
          theme.palette.grey[900],
          0.7
        )}, ${alpha(theme.palette.background.paper, 0.7)})`
      : `linear-gradient(145deg, ${alpha(
          theme.palette.background.paper,
          0.7
        )}, ${alpha(theme.palette.grey[100], 0.7)})`,
  backdropFilter: "blur(10px)",
  border: `1px solid ${
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.8)"
  }`,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 10px 30px rgba(0, 0, 0, 0.3)"
      : "0 10px 30px rgba(0, 0, 0, 0.1)",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: theme.shape.borderRadius ? `${Number(theme.shape.borderRadius) * 2}px` : "16px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    backgroundColor:
      theme.palette.mode === "dark"
        ? alpha(theme.palette.grey[900], 0.6)
        : alpha(theme.palette.background.paper, 0.6),
    backdropFilter: "blur(8px)",
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
      boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.1)}`,
    },
  },
}));
