import React, { useRef, useEffect } from "react";
import { Box, Typography, Button, Container, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useThemeContext } from "@/theme";
import M3TypingQuotes from "./M3TypingQuotes";

// Create dimensional layered elements with M3 styling
const BackgroundLayer = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  overflow: "hidden",
  zIndex: 0,
}));

const GradientOrb = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  borderRadius: "50%",
  background: `radial-gradient(circle, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  opacity: 0.1,
  filter: "blur(80px)",
}));

const ImageLayer = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  zIndex: 1,
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: theme.palette.mode === "dark" ? 0.2 : 0.15,
  },
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "100vh",
  padding: theme.spacing(4),
}));

const ScrollButton = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  bottom: 80,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 10,
  background: theme.palette.mode === "dark" 
    ? `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`
    : `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  borderRadius: "50%",
  padding: theme.spacing(2),
  boxShadow: theme.shadows[10],
  cursor: "pointer",
  backdropFilter: "blur(10px)",
  border: `2px solid ${theme.palette.background.paper}`,
}));

const M3Hero = () => {
  const theme = useTheme();
  const { mode } = useThemeContext();
  const isDark = mode === "dark";
  
  const ref = useRef(null);
  const inView = useInView(ref);
  const { scrollYProgress } = useScroll();
  const scrollYSpring = useSpring(scrollYProgress, { stiffness: 300, damping: 40 });
  
  // Parallax effects
  const backgroundY = useTransform(scrollYSpring, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYSpring, [0, 0.2], [1, 0]);
  const contentY = useTransform(scrollYSpring, [0, 0.2], ["0%", "-10%"]);
  
  const handleScrollDown = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const quotes = [
    "Hello...",
    "Ask me what I mean by...",
    '"I bend over backwards to be lazy."',
    "Think first, then make things (Jennie Baird)",
    "Code like your future self is on vacation",
    "Success comes from having a passion in what you do.",
    `Email ${import.meta.env.VITE_EMAIL_ADDRESS_HELLO}`,
    "Explore this site, get to know my work, and let's build something great!",
  ];

  // Color palette based on M3 Expressive
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;
  const accentColor = isDark ? theme.palette.success.light : theme.palette.success.main;
  
  return (
    <Box
      component="section"
      ref={ref}
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Dynamic interactive background */}
      <BackgroundLayer>
        {/* Responsive orbs that move based on scroll position */}
        <GradientOrb
          style={{
            top: "-10%",
            right: "-10%",
            width: "60vw",
            height: "60vw",
            y: backgroundY,
            background: `radial-gradient(circle, ${primaryColor}50 0%, ${primaryColor}00 70%)`,
          }}
        />
        <GradientOrb
          style={{
            bottom: "-5%",
            left: "-15%",
            width: "70vw",
            height: "70vw",
            y: useTransform(scrollYSpring, [0, 1], ["0%", "10%"]),
            background: `radial-gradient(circle, ${secondaryColor}40 10%, ${secondaryColor}00 80%)`,
          }}
        />
        <GradientOrb
          style={{
            top: "30%",
            left: "50%",
            width: "30vw",
            height: "30vw",
            y: useTransform(scrollYSpring, [0, 1], ["0%", "-15%"]),
            background: `radial-gradient(circle, ${accentColor}30 0%, ${accentColor}00 70%)`,
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </BackgroundLayer>

      {/* Background image with blur effect */}
      <ImageLayer style={{ y: backgroundY }}>
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5 }}
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <img src="/jasondavey-whiteboard.png" alt="Jason at whiteboard" />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backdropFilter: "blur(2px)",
              background: theme.palette.mode === "dark"
                ? "rgba(0,0,0,0.5)"
                : "rgba(255,255,255,0.5)",
            }}
          />
        </motion.div>
      </ImageLayer>

      {/* Main content */}
      <ContentContainer>
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: {
                xs: "3rem",
                sm: "4rem",
                md: "5rem",
                lg: "6rem",
              },
              fontWeight: 800,
              letterSpacing: "-0.05em",
              lineHeight: 1,
              mb: 2,
              background: `linear-gradient(90deg, ${theme.palette.text.primary} 40%, ${primaryColor} 90%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "left",
            }}
          >
            Build Tech With
          </Typography>
          
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Typography
              variant="h2"
              component="span"
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  sm: "3.5rem",
                  md: "4.5rem",
                  lg: "5.5rem",
                },
                fontWeight: 900,
                color: theme.palette.mode === "dark" ? "rgba(200, 200, 200, 0.9)" : theme.palette.grey[700],
                letterSpacing: "-0.02em",
                display: "block",
                mb: 4,
              }}
            >
              Jason D
            </Typography>
          </motion.div>

          {/* Typing quotes with modern styling */}
          <Box
            sx={{
              maxWidth: "600px",
              mb: 6,
              p: 3,
              borderRadius: "16px",
              backdropFilter: "blur(12px)",
              background: theme.palette.mode === "dark"
                ? "rgba(0, 0, 0, 0.2)"
                : "rgba(255, 255, 255, 0.2)",
              border: `1px solid ${theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(0, 0, 0, 0.05)"}`,
              boxShadow: theme.shadows[4],
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: accentColor,
                fontWeight: 500,
                fontSize: {
                  xs: "1rem",
                  sm: "1.25rem",
                },
              }}
            >
              <M3TypingQuotes quotes={quotes} speed={40} />
            </Typography>
          </Box>
        </motion.div>
      </ContentContainer>

      {/* Scroll down button with dynamic animation */}
      <ScrollButton
        onClick={handleScrollDown}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          },
        }}
      >
        <KeyboardArrowDownIcon fontSize="large" sx={{ color: "white" }} />
      </ScrollButton>
    </Box>
  );
};

export default M3Hero;
