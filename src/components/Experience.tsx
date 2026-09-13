import React, { useRef } from "react";
import { Box, Typography, Container, useTheme, alpha } from "@mui/material";
import CurrentFocus from "./CurrentFocus";
import PastRoles from "./PastRoles";
import { styled } from "@mui/material/styles";
import { motion, useScroll, useTransform } from "framer-motion";

// Styled components
const SectionContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(15, 0),
  overflow: "hidden",
  backgroundColor:
    theme.palette.mode === "dark"
      ? alpha(theme.palette.background.default, 0.9)
      : alpha(theme.palette.grey[50], 0.9),
}));

const Experience: React.FC = () => {
  const theme = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <SectionContainer ref={ref} id="experience">
      {/* Animated background elements */}
      <Box sx={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        <motion.div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "50vw",
            height: "50vw",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${alpha(
              theme.palette.primary.main,
              0.08
            )} 0%, transparent 70%)`,
            y: backgroundY,
          }}
        />
        <motion.div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "-10%",
            width: "40vw",
            height: "40vw",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${alpha(
              theme.palette.secondary.main,
              0.08
            )} 0%, transparent 70%)`,
            y: useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]),
          }}
        />

        {/* Subtle grid pattern */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(
              ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)"} 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)"} 1px,
              transparent 1px
            )`,
            backgroundSize: "20px 20px",
            opacity: 0.4,
          }}
        />
      </Box>

      <Container sx={{ position: "relative", zIndex: 1 }}>
        <CurrentFocus />

        {/* Section heading */}
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
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
              Roles
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                maxWidth: "800px",
                margin: "0 auto",
                opacity: 0.8,
                lineHeight: 1.8,
                mb: 6,
              }}
            >
              The path that led here — key roles and achievements across engineering and leadership.
            </Typography>
          </motion.div>
        </Box>

        <PastRoles />
      </Container>
    </SectionContainer>
  );
};

export default Experience;
