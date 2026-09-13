import { IconButton, useScrollTrigger, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AnimatePresence, motion } from "framer-motion";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const StyledButton = styled(IconButton)(({ theme }) => ({
  width: 48,
  height: 48,
  background:
    theme.palette.mode === "dark"
      ? `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`
      : `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: theme.palette.common.white,
  boxShadow: theme.shadows[6],
  backdropFilter: "blur(10px)",
  "&:hover": {
    background:
      theme.palette.mode === "dark"
        ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
        : `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
  },
}));

// Appears once the reader is meaningfully into the page (roughly a viewport's
// worth of scroll), not the moment they nudge past the Hero — disableHysteresis
// keeps show/hide tied to a single threshold instead of two.
const ScrollToTopButton = () => {
  const theme = useTheme();
  const visible = useScrollTrigger({ threshold: 600, disableHysteresis: true });

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{ position: "fixed", bottom: 32, right: 32, zIndex: 20 }}
        >
          <StyledButton onClick={handleClick} aria-label="Back to top" title="Back to top">
            <KeyboardArrowUpIcon sx={{ color: theme.palette.common.white }} />
          </StyledButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
