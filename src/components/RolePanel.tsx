import { ReactNode, Suspense, lazy, useState } from "react";
import { Box, Typography, Paper, Button, useTheme, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { FocusPillar, RoleFocusData } from "@/constants/roleFocusTypes";

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

interface RolePanelProps {
  data: RoleFocusData;
  badge?: ReactNode;
}

// Shared "bold panel" treatment for a role: headline stats, then a grid of
// themed pillar cards that each drill down into a details modal. Used for
// the current PlayOn Sports role and, identically, for each past role.
const RolePanel = ({ data, badge }: RolePanelProps) => {
  const theme = useTheme();
  const [selectedPillar, setSelectedPillar] = useState<FocusPillar | null>(null);

  return (
    <Box sx={{ mb: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
      >
        <HeroCard elevation={0}>
          {(badge || data.logoSrc) && (
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
              {badge || <Box />}

              {data.logoSrc && (
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
                    src={data.logoSrc}
                    alt={data.logoAlt || data.company}
                    sx={{ height: 22, width: "auto" }}
                  />
                </Box>
              )}
            </Box>
          )}

          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontWeight: 800,
              mb: 0.5,
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
            }}
          >
            {data.role}
          </Typography>

          {!data.logoSrc && (
            <Typography
              variant="subtitle1"
              sx={{
                color:
                  theme.palette.mode === "dark"
                    ? theme.palette.secondary.light
                    : theme.palette.secondary.dark,
                fontWeight: 600,
              }}
            >
              {data.company}
            </Typography>
          )}

          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.primary.main, fontWeight: 600, mb: 3 }}
          >
            {data.duration}
          </Typography>

          <Typography
            variant="body1"
            sx={{ maxWidth: "800px", opacity: 0.85, lineHeight: 1.8, mb: 4 }}
          >
            {data.mission}
          </Typography>

          {data.stats.length > 0 && (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr 1fr",
                  sm: "repeat(auto-fit, minmax(150px, 1fr))",
                },
                gap: { xs: 2, sm: 3 },
                mb: 5,
              }}
            >
              {data.stats.map((stat) => (
                <Box key={stat.label}>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontWeight: 800,
                      color: theme.palette.primary.main,
                      lineHeight: 1.2,
                    }}
                  >
                    {stat.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.4 }}>
                    {stat.detail}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 3,
            }}
          >
            {data.pillars.map((pillar, index) => (
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

export default RolePanel;
