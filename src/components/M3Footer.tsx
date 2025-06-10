import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Button,
  useTheme,
  alpha,
  Divider,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useThemeContext } from "@/theme";
import ReadmeModal from "./ReadmeModal";
import CarbonBadge from "./CarbonBadge";
import { navigationSections } from "@/utils/navigation";

// Social icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FaSquareXTwitter } from "react-icons/fa6";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { TbCertificate } from "react-icons/tb";

// Styled components for visual enhancement
const FooterContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor:
    theme.palette.mode === "dark"
      ? alpha(theme.palette.grey[900], 0.9)
      : alpha(theme.palette.grey[100], 0.9),
  overflow: "hidden",
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(4),
  backdropFilter: "blur(10px)",
}));

const GlassPanel = styled(Box)(({ theme }) => ({
  background:
    theme.palette.mode === "dark"
      ? `linear-gradient(145deg, ${alpha(
          theme.palette.grey[900],
          0.7
        )}, ${alpha(theme.palette.background.paper, 0.4)})`
      : `linear-gradient(145deg, ${alpha(
          theme.palette.background.paper,
          0.6
        )}, ${alpha(theme.palette.grey[50], 0.4)})`,
  backdropFilter: "blur(8px)",
  borderRadius: Number(theme.shape.borderRadius) * 3,
  border: `1px solid ${
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.08)"
      : "rgba(255, 255, 255, 0.8)"
  }`,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 8px 32px rgba(0, 0, 0, 0.2)"
      : "0 8px 32px rgba(0, 0, 0, 0.05)",
  padding: theme.spacing(3),
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(0.5),
  background:
    theme.palette.mode === "dark"
      ? alpha(theme.palette.primary.dark, 0.2)
      : alpha(theme.palette.primary.light, 0.2),
  backdropFilter: "blur(5px)",
  "&:hover": {
    background:
      theme.palette.mode === "dark"
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
  const [readmeOpen, setReadmeOpen] = useState(false);

  // Navigation sections - using shared navigation from utils

  // Year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        backgroundColor:
          theme.palette.mode === "dark"
            ? alpha(theme.palette.grey[900], 0.9)
            : alpha(theme.palette.grey[100], 0.9),
        overflow: "hidden",
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(4),
        backdropFilter: "blur(10px)",
      }}
    >
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
            background: `radial-gradient(circle, ${alpha(
              theme.palette.primary.main,
              0.1
            )} 0%, transparent 60%)`,
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
            background: `radial-gradient(circle, ${alpha(
              theme.palette.secondary.main,
              0.1
            )} 0%, transparent 60%)`,
          }}
        />
      </Box>

      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr",
            },
            gap: 4,
            mb: 6,
          }}
        >
          {/* Main info column */}
          <Box sx={{ gridColumn: { xs: "1", sm: "1", md: "1" } }}>
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
                Engineering leader passionate about creating innovative
                solutions that solve real problems while developing great teams.
              </Typography>

              {/* Social links */}
              <Box sx={{ display: "flex", mb: 3 }}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href="https://www.linkedin.com/in/jasondavey/"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                  >
                    <SocialIconButton aria-label="LinkedIn">
                      <LinkedInIcon fontSize="small" />
                    </SocialIconButton>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href="https://github.com/jasondavey/"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                  >
                    <SocialIconButton aria-label="GitHub">
                      <GitHubIcon fontSize="small" />
                    </SocialIconButton>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href="https://twitter.com/jasondavey"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                  >
                    <SocialIconButton aria-label="Twitter">
                      <FaSquareXTwitter size="1.2em" />
                    </SocialIconButton>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={`mailto:${import.meta.env.VITE_EMAIL_ADDRESS_HELLO}`}
                    underline="none"
                  >
                    <SocialIconButton aria-label="Email">
                      <MailOutlineIcon fontSize="small" />
                    </SocialIconButton>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href="/JasonDaveyPatent.pdf"
                    target="_blank"
                    underline="none"
                  >
                    <SocialIconButton aria-label="Patent">
                      <TbCertificate size="1.2em" />
                    </SocialIconButton>
                  </Link>
                </motion.div>
              </Box>

              <Box sx={{ mt: "auto" }}>
                <Typography variant="caption" sx={{ opacity: 0.6 }}>
                  © {currentYear} Jason Davey. All rights reserved.
                </Typography>
              </Box>
            </GlassPanel>
          </Box>

          {/* Navigation column */}
          <Box sx={{ gridColumn: { xs: "1", sm: "2/3", md: "2/3" } }}>
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
                {navigationSections.map((section) => (
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
                    background: `linear-gradient(135deg, ${alpha(
                      theme.palette.primary.main,
                      0.1
                    )}, ${alpha(theme.palette.secondary.main, 0.1)})`,
                    border: `1px solid ${alpha(
                      theme.palette.primary.main,
                      0.2
                    )}`,
                  }}
                >
                  <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                    "I bend over backwards to be lazy."
                  </Typography>
                </Box>
              </motion.div>
            </GlassPanel>
          </Box>
        </Box>

        {/* Bottom copyright and attribution */}
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Divider sx={{ mb: 3, opacity: 0.2 }} />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 2, sm: 4 },
              mb: 2,
            }}
          >
            {/* Copyright */}
            <Typography variant="caption" sx={{ opacity: 0.7 }}>
              © {new Date().getFullYear()} Jason Davey. All rights reserved.
            </Typography>

            {/* Website Carbon Badge */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CarbonBadge darkMode={theme.palette.mode === "dark"} />
            </Box>

            {/* Last Build Time */}
            <Typography variant="caption" sx={{ opacity: 0.7 }}>
              Last built:{" "}
              {new Date().toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </Typography>
          </Box>

          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setReadmeOpen(true);
            }}
            sx={{
              color: "text.secondary",
              textDecoration: "none",
              "&:hover": { color: "primary.main" },
              fontSize: "0.75rem",
              opacity: 0.6,
            }}
          >
            How this website was built
          </Link>

          <Typography
            variant="caption"
            sx={{ display: "block", mt: 1.5, opacity: 0.5 }}
          >
            Built with React, TypeScript, and Material UI. Designed with M3
            Expressive principles.
          </Typography>
        </Box>
      </Container>

      {/* Technical Documentation Modal */}
      <ReadmeModal open={readmeOpen} onOpenChange={setReadmeOpen} />
    </Box>
  );
};

export default M3Footer;
