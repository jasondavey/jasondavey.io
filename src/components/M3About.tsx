import React, { useRef } from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useThemeContext } from "@/theme";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import SpeedIcon from "@mui/icons-material/Speed";

// Styled components for enhanced visual design
const SectionContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(20, 0),
  overflow: "hidden",
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.background.default
      : "#f8f9fa",
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

const ContentWrapper = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
}));

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 4,
  overflow: "hidden",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  background:
    theme.palette.mode === "dark"
      ? `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.grey[900]})`
      : `linear-gradient(135deg, #ffffff, ${theme.palette.grey[50]})`,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 8px 32px rgba(0, 0, 0, 0.2)"
      : "0 8px 32px rgba(0, 0, 0, 0.05)",
  backdropFilter: "blur(10px)",
  border: `1px solid ${
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.05)"
      : "rgba(255, 255, 255, 0.8)"
  }`,
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 16px 48px rgba(0, 0, 0, 0.3)"
        : "0 16px 48px rgba(0, 0, 0, 0.1)",
  },
}));

// Feature card component for key highlights
interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({
  icon,
  title,
  description,
  delay,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });
  const theme = useTheme();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay }}
    >
      <StyledCard>
        <CardContent sx={{ p: 4 }}>
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 3,
                color: theme.palette.primary.main,
                fontSize: "3rem",
              }}
            >
              {icon}
            </Box>
          </motion.div>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 600,
              mb: 2,
              textAlign: "center",
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              opacity: 0.85,
              lineHeight: 1.7,
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </StyledCard>
    </motion.div>
  );
};

const M3About = () => {
  const { mode } = useThemeContext();
  const theme = useTheme();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <SectionContainer ref={ref} id="about">
      <BackdropGradient />

      {/* Floating elements in background */}
      <Box
        sx={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}
      >
        {[...Array(6)].map((_, i) => (
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
              width: `${Math.random() * 10 + 5}vw`,
              height: `${Math.random() * 10 + 5}vw`,
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
              scale: [1, Math.random() * 0.2 + 0.9],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </Box>

      <ContentWrapper>
        <motion.div style={{ opacity, y: y1 }}>
          <Box sx={{ textAlign: "center", mb: 10, position: "relative" }}>
            <Typography
              component="span"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 1.5,
                fontSize: "0.9rem",
                mb: 2,
                display: "block",
              }}
            >
              About Me
            </Typography>

            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                height: "4px",
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: "2px",
                margin: "0 auto 2rem",
              }}
            />

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
              Passionate Engineer & Leader
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
              British born, American raised, I build tech with passion and
              purpose, creating intuitive customer centric experiences and value
              from purpose. I'm typically involved from conception to release,
              fostering success through hands-on technical and project
              leadership. And with expertise spanning both engineering and
              leadership, I bring a unique perspective that blends technical
              excellence with strategic vision.
            </Typography>
          </Box>
        </motion.div>

        <motion.div style={{ y: y2 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 4,
            }}
          >
            <Feature
              icon={<LightbulbIcon fontSize="inherit" />}
              title="Innovative Problem Solver"
              description="I approach challenges with an eye for efficiency and elegance, finding creative solutions that balance complexity with maintainability."
              delay={0.2}
            />
            <Feature
              icon={<SpeedIcon fontSize="inherit" />}
              title="Performance Focused"
              description="I believe in building systems that not only work well today, but scale gracefully to meet tomorrow's demands without sacrificing speed."
              delay={0.4}
            />
            <Feature
              icon={<AutoGraphIcon fontSize="inherit" />}
              title="Data-Driven Leader"
              description="I make decisions grounded in analytics and user feedback, ensuring our technical direction aligns with measurable business outcomes."
              delay={0.6}
            />
          </Box>
        </motion.div>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default M3About;
