import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, IconButton, Stack, Typography, alpha, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AnimatePresence, motion } from "framer-motion";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { getLatestEntries } from "@/diary/entries";

const MAX_TEASERS = 3;

const formatDate = (isoDate: string): string =>
  new Date(`${isoDate}T00:00:00`).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const TeaserPanel = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: 360,
  borderRadius: Number(theme.shape.borderRadius) * 3,
  padding: theme.spacing(3),
  backdropFilter: "blur(16px)",
  background:
    theme.palette.mode === "dark"
      ? alpha(theme.palette.background.paper, 0.35)
      : alpha(theme.palette.background.paper, 0.65),
  border: `1px solid ${alpha(
    theme.palette.mode === "dark" ? theme.palette.common.white : theme.palette.common.black,
    theme.palette.mode === "dark" ? 0.12 : 0.08
  )}`,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 20px 45px rgba(0, 0, 0, 0.35)"
      : "0 20px 45px rgba(0, 0, 0, 0.12)",
}));

const HeroDiaryTeaser = () => {
  const theme = useTheme();
  const entries = getLatestEntries(MAX_TEASERS);
  const [index, setIndex] = useState(0);

  if (entries.length === 0) {
    return null;
  }

  const entry = entries[index];
  const showNav = entries.length > 1;
  const goTo = (nextIndex: number) => setIndex((nextIndex + entries.length) % entries.length);

  return (
    <TeaserPanel
      component={motion.div}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{
          mb: 1.5,
          color: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.7)" : "text.secondary",
        }}
      >
        <MenuBookIcon fontSize="small" />
        <Typography variant="overline" sx={{ letterSpacing: 1, fontWeight: 700, lineHeight: 1 }}>
          Latest from the diary
        </Typography>
      </Stack>

      <Box sx={{ minHeight: 132 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={entry.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Typography variant="caption" sx={{ opacity: 0.7 }}>
              {formatDate(entry.date)}
            </Typography>
            <Typography
              component={RouterLink}
              to={`/diary/${entry.slug}`}
              variant="subtitle1"
              sx={{
                display: "block",
                fontWeight: 700,
                mt: 0.5,
                mb: 1,
                color: "inherit",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {entry.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.85,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {entry.excerpt}
            </Typography>
          </motion.div>
        </AnimatePresence>
      </Box>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 2 }}>
        <Stack direction="row" spacing={0.5}>
          {showNav && (
            <>
              <IconButton
                size="small"
                onClick={() => goTo(index - 1)}
                aria-label="Previous diary entry"
              >
                <ArrowBackIosNewIcon sx={{ fontSize: "0.75rem" }} />
              </IconButton>
              <IconButton size="small" onClick={() => goTo(index + 1)} aria-label="Next diary entry">
                <ArrowForwardIosIcon sx={{ fontSize: "0.75rem" }} />
              </IconButton>
            </>
          )}
        </Stack>

        <Box
          component={RouterLink}
          to="/diary"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            fontWeight: 600,
            fontSize: "0.85rem",
            color: theme.palette.primary.main,
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Visit the diary
          <ArrowForwardIcon sx={{ fontSize: "1rem" }} />
        </Box>
      </Stack>

      {showNav && (
        <Stack direction="row" spacing={0.75} justifyContent="center" sx={{ mt: 2 }}>
          {entries.map((teaser, teaserIndex) => (
            <Box
              key={teaser.slug}
              component="button"
              type="button"
              onClick={() => setIndex(teaserIndex)}
              aria-label={`Show diary entry ${teaserIndex + 1}`}
              sx={{
                width: teaserIndex === index ? 18 : 6,
                height: 6,
                borderRadius: 3,
                border: "none",
                p: 0,
                cursor: "pointer",
                backgroundColor:
                  teaserIndex === index
                    ? theme.palette.primary.main
                    : alpha(theme.palette.text.primary, 0.25),
                transition: "width 0.25s ease, background-color 0.25s ease",
              }}
            />
          ))}
        </Stack>
      )}
    </TeaserPanel>
  );
};

export default HeroDiaryTeaser;
