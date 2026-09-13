import { useState } from "react";
import { Box, Container, Typography, Link, useTheme, alpha, Divider } from "@mui/material";
import { Suspense, lazy } from "react";
const ReadmeModal = lazy(() => import("./ReadmeModal"));
import CarbonBadge from "./CarbonBadge";

const Footer = () => {
  const theme = useTheme();
  const [readmeOpen, setReadmeOpen] = useState(false);

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
        <Box sx={{ textAlign: "center" }}>
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

          <Typography variant="caption" sx={{ display: "block", mt: 1.5, opacity: 0.5 }}>
            Built with React, TypeScript, and Material UI. Designed with M3 Expressive principles.
          </Typography>
        </Box>
      </Container>

      {/* Technical Documentation Modal */}
      {readmeOpen && (
        <Suspense fallback={null}>
          <ReadmeModal open={readmeOpen} onOpenChange={setReadmeOpen} />
        </Suspense>
      )}
    </Box>
  );
};

export default Footer;
