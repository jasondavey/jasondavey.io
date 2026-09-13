import { useState } from "react";
import { Box, Container, Typography, IconButton, useTheme, alpha, Divider } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import { Suspense, lazy } from "react";
const ReadmeModal = lazy(() => import("./ReadmeModal"));

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
              flexWrap: "nowrap",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 1.5, sm: 4 },
              mb: 1,
              whiteSpace: "nowrap",
            }}
          >
            {/* Copyright */}
            <Typography variant="caption" sx={{ opacity: 0.7 }}>
              © {new Date().getFullYear()} Jason Davey. All rights reserved.
            </Typography>

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

            <IconButton
              onClick={() => setReadmeOpen(true)}
              aria-label="How this website was built"
              title="How this website was built"
              size="small"
              sx={{
                color: "text.secondary",
                opacity: 0.6,
                "&:hover": { color: "primary.main", opacity: 1 },
              }}
            >
              <BuildIcon sx={{ fontSize: "1rem" }} />
            </IconButton>
          </Box>
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
