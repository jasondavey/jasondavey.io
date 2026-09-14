import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Container, Button, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DescriptionIcon from "@mui/icons-material/Description";
import MailOutlineIcon from "@mui/icons-material/MailOutlined";
import { useThemeContext } from "@/theme";
import { useDocumentModal } from "@/context/DocumentModalContext";
import { handleSmoothScroll } from "./navbar/smoothScroll";

// Create dimensional layered elements with M3 styling
const BackgroundLayer = styled(Box)(() => ({
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
  background:
    theme.palette.mode === "dark"
      ? `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`
      : `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  borderRadius: "50%",
  padding: theme.spacing(2),
  boxShadow: theme.shadows[10],
  cursor: "pointer",
  backdropFilter: "blur(10px)",
  border: `2px solid ${theme.palette.background.paper}`,
}));

const Hero = () => {
  const theme = useTheme();
  const { mode } = useThemeContext();
  const isDark = mode === "dark";
  const { showDocumentModal } = useDocumentModal();
  const navigate = useNavigate();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const scrollYSpring = useSpring(scrollYProgress, { stiffness: 300, damping: 40 });

  // Parallax effects
  const backgroundY = useTransform(scrollYSpring, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYSpring, [0, 0.2], [1, 0]);
  const contentY = useTransform(scrollYSpring, [0, 0.2], ["0%", "-10%"]);

  const handleDownloadResume = () => {
    showDocumentModal("/jasonrdavey.pdf", "Jason Davey's Resume", "resume");
  };

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
              background:
                theme.palette.mode === "dark" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)",
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
            component="p"
            sx={{
              textAlign: "left",
              fontWeight: 700,
              fontSize: "1.1rem",
              letterSpacing: 0.5,
              mb: 2,
              color:
                theme.palette.mode === "dark" ? theme.palette.grey[400] : theme.palette.grey[600],
            }}
          >
            &lt;jasondavey&gt;
          </Typography>

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: {
                xs: "2.75rem",
                sm: "3.75rem",
                md: "4.5rem",
                lg: "5.25rem",
              },
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              mb: 3,
              background: `linear-gradient(90deg, ${theme.palette.text.primary} 40%, ${primaryColor} 90%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "left",
            }}
          >
            Engineering Leader Who Still Ships
          </Typography>

          <Typography
            variant="h6"
            component="p"
            sx={{
              maxWidth: "640px",
              mb: 5,
              fontWeight: 400,
              lineHeight: 1.6,
              color:
                theme.palette.mode === "dark"
                  ? "rgba(230, 230, 230, 0.85)"
                  : theme.palette.grey[800],
            }}
          >
            15+ years building and leading teams across fintech, media, and logistics — from
            Staff-level architecture to VP Engineering. I go where the problem needs me: writing
            code, growing engineers, or both.
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<DescriptionIcon />}
              onClick={handleDownloadResume}
              sx={{ textTransform: "none", fontWeight: 600, borderRadius: "24px", px: 3 }}
            >
              Download Resume
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={(e) => handleSmoothScroll(e, "#experience", navigate)}
              sx={{ textTransform: "none", fontWeight: 600, borderRadius: "24px", px: 3 }}
            >
              View Experience
            </Button>
            <Button
              variant="text"
              size="large"
              startIcon={<MailOutlineIcon />}
              onClick={(e) => handleSmoothScroll(e, "#contact", navigate)}
              sx={{ textTransform: "none", fontWeight: 600, borderRadius: "24px", px: 3 }}
            >
              Get in Touch
            </Button>
          </Box>
        </motion.div>
      </ContentContainer>

      {/* Scroll down button with dynamic animation */}
      <ScrollButton
        onClick={(e) => handleSmoothScroll(e, "#about", navigate)}
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

export default Hero;
