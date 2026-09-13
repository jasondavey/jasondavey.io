import { Suspense, lazy, useState } from "react";
import { Box, Typography, Paper, Chip, Button, useTheme, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { currentRole, focusPillars, FocusPillar } from "@/constants/currentFocus";

const FocusDetailsModal = lazy(() => import("./FocusDetailsModal"));

const HeroCard = styled(Paper)(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 3,
  padding: theme.spacing(5, 4),
  background:
    theme.palette.mode === "dark"
      ? `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0.35)}, ${alpha(
          theme.palette.background.paper,
          0.9
        )})`
      : `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.25)}, ${alpha(
          theme.palette.background.paper,
          0.95
        )})`,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 20px 60px rgba(0, 0, 0, 0.4)"
      : "0 20px 60px rgba(0, 0, 0, 0.08)",
  marginBottom: theme.spacing(10),
}));

const PillarCard = styled(motion.div)(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 2.5,
  padding: theme.spacing(3),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  background:
    theme.palette.mode === "dark"
      ? alpha(theme.palette.background.paper, 0.6)
      : alpha(theme.palette.background.paper, 0.8),
  border: `1px solid ${
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)"
  }`,
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 12px 32px rgba(0, 0, 0, 0.35)"
        : "0 12px 32px rgba(0, 0, 0, 0.1)",
  },
}));

const CurrentFocus = () => {
  const theme = useTheme();
  const [selectedPillar, setSelectedPillar] = useState<FocusPillar | null>(null);

  return (
    <Box sx={{ mb: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
      >
        <HeroCard elevation={0}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 2,
              mb: 2,
            }}
          >
            <Chip
              label="Currently"
              size="small"
              sx={{
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
                fontSize: "0.7rem",
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                color: theme.palette.primary.contrastText,
              }}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 2,
                py: 1,
                borderRadius: "12px",
                backgroundColor: theme.palette.grey[900],
              }}
            >
              <Box
                component="img"
                src="/logos/playonsports.com.svg"
                alt="PlayOn Sports"
                sx={{ height: 22, width: "auto" }}
              />
            </Box>
          </Box>

          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontWeight: 800,
              mb: 0.5,
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
            }}
          >
            {currentRole.role}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.primary.main, fontWeight: 600, mb: 3 }}
          >
            {currentRole.duration}
          </Typography>

          <Typography
            variant="body1"
            sx={{ maxWidth: "800px", opacity: 0.85, lineHeight: 1.8, mb: 5 }}
          >
            {currentRole.mission}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 3,
            }}
          >
            {focusPillars.map((pillar, index) => (
              <PillarCard
                key={pillar.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    mb: 2,
                    fontSize: "1.4rem",
                    background: alpha(theme.palette.primary.main, 0.12),
                    color: theme.palette.primary.main,
                  }}
                >
                  {pillar.icon}
                </Box>

                <Typography variant="h6" component="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  {pillar.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, flexGrow: 1, lineHeight: 1.6 }}
                >
                  {pillar.summary}
                </Typography>

                <Button
                  size="small"
                  onClick={() => setSelectedPillar(pillar)}
                  sx={{
                    alignSelf: "flex-start",
                    textTransform: "none",
                    fontWeight: 600,
                    borderRadius: "20px",
                    px: 0,
                    "&:hover": { backgroundColor: "transparent", textDecoration: "underline" },
                  }}
                >
                  View Details →
                </Button>
              </PillarCard>
            ))}
          </Box>
        </HeroCard>
      </motion.div>

      {selectedPillar && (
        <Suspense fallback={null}>
          <FocusDetailsModal
            pillar={selectedPillar}
            open={Boolean(selectedPillar)}
            onClose={() => setSelectedPillar(null)}
          />
        </Suspense>
      )}
    </Box>
  );
};

export default CurrentFocus;
