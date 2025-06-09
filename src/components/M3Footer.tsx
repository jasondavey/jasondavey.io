import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Grid,
  useTheme,
  alpha,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useThemeContext } from "@/theme";

// Social icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FaSquareXTwitter } from "react-icons/fa6";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { TbCertificate } from "react-icons/tb";

// Styled components for visual enhancement
const FooterContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.mode === "dark" 
    ? alpha(theme.palette.grey[900], 0.9)
    : alpha(theme.palette.grey[100], 0.9),
  overflow: "hidden",
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(4),
  backdropFilter: "blur(10px)",
}));

const GlassPanel = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === "dark"
    ? `linear-gradient(145deg, ${alpha(theme.palette.grey[900], 0.7)}, ${alpha(theme.palette.background.paper, 0.4)})`
    : `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.6)}, ${alpha(theme.palette.grey[50], 0.4)})`,
  backdropFilter: "blur(8px)",
  borderRadius: Number(theme.shape.borderRadius) * 3,
  border: `1px solid ${theme.palette.mode === "dark"
    ? "rgba(255, 255, 255, 0.08)"
    : "rgba(255, 255, 255, 0.8)"}`,
  boxShadow: theme.palette.mode === "dark"
    ? "0 8px 32px rgba(0, 0, 0, 0.2)"
    : "0 8px 32px rgba(0, 0, 0, 0.05)",
  padding: theme.spacing(3),
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(0.5),
  background: theme.palette.mode === "dark" 
    ? alpha(theme.palette.primary.dark, 0.2)
    : alpha(theme.palette.primary.light, 0.2),
  backdropFilter: "blur(5px)",
  "&:hover": {
    background: theme.palette.mode === "dark" 
      ? alpha(theme.palette.primary.main, 0.3)
      : alpha(theme.palette.primary.main, 0.2),
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  position: "relative",
  padding: theme.spacing(0.5, 1),
  "&::after": {
    content: '""',
    position: "absolute",
    width: "0",
    height: "2px",
    bottom: "0",
    left: "0",
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    transition: "width 0.3s ease",
  },
  "&:hover": {
    color: theme.palette.primary.main,
    "&::after": {
      width: "100%",
    },
  },
}));

const M3Footer = () => {
  const theme = useTheme();
  const { mode } = useThemeContext();

  // Navigation sections
  const sections = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Leadership", href: "#leadership" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  // Year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer component="footer">
      {/* Background elements */}
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Box
          sx={{
            position: "absolute",
            bottom: "-5%",
            right: "-5%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 60%)`,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "-5%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.1)} 0%, transparent 60%)`,
          }}
        />
      </Box>

      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4}>
          {/* Main info column */}
          <Grid item xs={12} md={4}>
            <GlassPanel>
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  background: `linear-gradient(90deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Jason Davey
              </Typography>

              <Typography variant="body2" sx={{ mb: 3, opacity: 0.7 }}>
                Engineering leader passionate about creating innovative solutions
                that solve real problems while developing great teams.
              </Typography>

              {/* Social links */}
              <Box sx={{ display: "flex", mb: 3 }}>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <SocialIconButton
                    aria-label="LinkedIn"
                    component="a"
                    href="https://www.linkedin.com/in/jasondavey/"
                    target="_blank"
                    rel="noopener"
                  >
                    <LinkedInIcon fontSize="small" />
                  </SocialIconButton>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <SocialIconButton
                    aria-label="GitHub"
                    component="a"
                    href="https://github.com/jasondavey"
                    target="_blank"
                    rel="noopener"
                  >
                    <GitHubIcon fontSize="small" />
                  </SocialIconButton>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <SocialIconButton
                    aria-label="Twitter"
                    component="a"
                    href="https://twitter.com/jasondavey"
                    target="_blank"
                    rel="noopener"
                  >
                    <FaSquareXTwitter size="1.2em" />
                  </SocialIconButton>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <SocialIconButton
                    aria-label="Email"
                    component="a"
                    href={`mailto:${import.meta.env.VITE_EMAIL_ADDRESS_HELLO}`}
                  >
                    <MailOutlineIcon fontSize="small" />
                  </SocialIconButton>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <SocialIconButton
                    aria-label="Patent Document"
                    component="a"
                    href="/JasonDaveyPatent.pdf"
                    target="_blank"
                  >
                    <TbCertificate size="1.2em" />
                  </SocialIconButton>
                </motion.div>
              </Box>

              <Box sx={{ mt: "auto" }}>
                <Typography variant="caption" sx={{ opacity: 0.6 }}>
                  © {currentYear} Jason Davey. All rights reserved.
                </Typography>
              </Box>
            </GlassPanel>
          </Grid>

          {/* Navigation column */}
          <Grid item xs={12} sm={6} md={4}>
            <GlassPanel>
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  background: `linear-gradient(90deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Navigation
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {sections.map((section) => (
                  <motion.div
                    key={section.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FooterLink href={section.href} underline="none">
                      {section.name}
                    </FooterLink>
                  </motion.div>
                ))}
              </Box>
            </GlassPanel>
          </Grid>

          {/* Contact column */}
          <Grid item xs={12} sm={6} md={4}>
            <GlassPanel>
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  background: `linear-gradient(90deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Get In Touch
              </Typography>

              <Typography variant="body2" paragraph>
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
                  <MailOutlineIcon fontSize="small" sx={{ mr: 1, color: theme.palette.primary.main }} />
                  {import.meta.env.VITE_EMAIL_ADDRESS_HELLO}
                </Typography>
              </Box>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ marginTop: "auto" }}
              >
                <Box
                  sx={{
                    mt: 3,
                    p: 2,
                    borderRadius: Number(theme.shape.borderRadius) * 2,
                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(
                      theme.palette.secondary.main,
                      0.1
                    )})`,
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  }}
                >
                  <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                    "I bend over backwards to be lazy."
                  </Typography>
                </Box>
              </motion.div>
            </GlassPanel>
          </Grid>
        </Grid>

        {/* Bottom copyright and attribution */}
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Divider sx={{ mb: 3, opacity: 0.2 }} />
          <Typography variant="caption" sx={{ opacity: 0.5 }}>
            Built with React, TypeScript, and Material UI. Designed with M3 Expressive principles.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default M3Footer;
