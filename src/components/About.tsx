import React, { useRef } from "react";
import { Box, Typography, Container, useTheme } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { motion, useScroll, useTransform } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CareerHighlights from "./CareerHighlights";

// Styled components for enhanced visual design
const SectionContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(20, 0),
  overflow: "hidden",
  backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.default : "#f8f9fa",
}));

const BackdropGradient = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  background:
    theme.palette.mode === "dark"
      ? `radial-gradient(circle at 30% 40%, ${theme.palette.primary.dark}20, transparent 60%), 
       radial-gradient(circle at 70% 70%, ${theme.palette.secondary.dark}20, transparent 70%)`
      : `radial-gradient(circle at 30% 40%, ${theme.palette.primary.light}20, transparent 60%), 
       radial-gradient(circle at 70% 70%, ${theme.palette.secondary.light}20, transparent 70%)`,
  zIndex: 0,
}));

const ContentWrapper = styled(Container)(() => ({
  position: "relative",
  zIndex: 1,
}));

// Pre-compute decorative shape positions once at module load so they stay
// stable across re-renders. Random in render would re-roll positions on
// every state change (purity rule).
const floatingShapes = Array.from({ length: 6 }, () => ({
  widthVw: Math.random() * 10 + 5,
  heightVw: Math.random() * 10 + 5,
  topPct: Math.random() * 80 + 10,
  leftPct: Math.random() * 80 + 10,
  animY: Math.random() * 30 - 15,
  animX: Math.random() * 30 - 15,
  animScale: Math.random() * 0.2 + 0.9,
  duration: Math.random() * 8 + 5,
}));

const About = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <SectionContainer ref={ref} id="about">
      <BackdropGradient />

      {/* Floating elements in background */}
      <Box sx={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        {floatingShapes.map((shape, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              background: `radial-gradient(circle, ${
                theme.palette.mode === "dark"
                  ? theme.palette.primary.dark
                  : theme.palette.primary.light
              }30, transparent)`,
              borderRadius: "50%",
              width: `${shape.widthVw}vw`,
              height: `${shape.heightVw}vw`,
              top: `${shape.topPct}%`,
              left: `${shape.leftPct}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, shape.animY],
              x: [0, shape.animX],
              scale: [1, shape.animScale],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </Box>

      <ContentWrapper>
        <motion.div style={{ opacity, y: y1 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "300px 1fr" },
              gap: { xs: 4, md: 6 },
              alignItems: "center",
              position: "relative",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
              <Box
                component="img"
                src="/jasondavey-headshot-casual.jpg"
                alt="Jason Davey"
                sx={{
                  width: "100%",
                  maxWidth: 300,
                  aspectRatio: "3 / 4",
                  objectFit: "cover",
                  borderRadius: Number(theme.shape.borderRadius) * 3,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  boxShadow: theme.shadows[8],
                }}
              />
            </Box>

            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 800,
                  mb: 4,
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  background: `linear-gradient(90deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Hands-on, ego free, servant leadership
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.1rem",
                  maxWidth: "800px",
                  opacity: 0.8,
                  lineHeight: 1.8,
                  mb: 6,
                }}
              >
                British born, American raised, I've spent 15+ years moving between hands-on
                engineering and engineering leadership — often at the same company, sometimes in the
                same week. I've architected platforms from a blank whiteboard to production, and
                I've built the teams and culture that keep shipping long after I've moved on.
                Whichever mode a problem calls for, that's where I go.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                  gap: 0.75,
                }}
              >
                <LocationOnIcon
                  sx={{ fontSize: "1rem", color: theme.palette.text.secondary, opacity: 0.6 }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary, opacity: 0.7, letterSpacing: 0.3 }}
                >
                  San Francisco · Atlanta · London · Singapore
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: 10 }}>
            <CareerHighlights />
          </Box>
        </motion.div>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default About;
