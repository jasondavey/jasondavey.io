import React from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Grid,
  useTheme,
  alpha,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import WorkIcon from "@mui/icons-material/Work";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import BadgeIcon from "@mui/icons-material/Badge";
import LinkIcon from "@mui/icons-material/Link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

// Styled components
// No longer need a full section container since this is nested

const HighlightCard = styled(motion(Paper))(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 3,
  overflow: "hidden",
  height: "100%",
  background:
    theme.palette.mode === "dark"
      ? `linear-gradient(145deg, ${alpha(
          theme.palette.primary.dark,
          0.2
        )}, ${alpha(theme.palette.background.paper, 0.8)})`
      : `linear-gradient(145deg, ${alpha(
          theme.palette.background.paper,
          0.8
        )}, ${alpha(theme.palette.primary.light, 0.2)})`,
  backdropFilter: "blur(10px)",
  border: `1px solid ${
    theme.palette.mode === "dark"
      ? alpha(theme.palette.primary.dark, 0.3)
      : alpha(theme.palette.primary.light, 0.5)
  }`,
  boxShadow: theme.shadows[4],
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[8],
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: theme.palette.primary.contrastText,
  borderRadius: "50%",
  padding: theme.spacing(1.5),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: theme.shadows[3],
}));

const highlightItems = [
  {
    id: 1,
    title: "U.S. Patent Holder",
    description:
      "Secured US Patent 11037223B1 for technical innovation while at Stamps.com, contributing to the company's intellectual property portfolio.",
    icon: <BadgeIcon fontSize="large" />,
    company: "Stamps.com",
    link: "/JasonDaveyPatent.pdf",
    reference: "https://patents.google.com/patent/US11037223B1/en?oq=11037223",
  },
  {
    id: 2,
    title: "Mentorship & Student Excellence",
    description:
      "Mentored teams of student engineers from Worcester Polytechnic University (WPI), who under my advisement, won best Major Qualifying Project two years running.",
    icon: <SchoolIcon fontSize="large" />,
    company: "Stamps.com",
    reference: "https://digital.wpi.edu/pdfviewer/x633f265j",
  },
  {
    id: 3,
    title: "PC Mag Featured Solution",
    description:
      "Led the launch of DYMO Stamps Online®, a cloud-native solution praised by PC Mag for its intuitive user experience.",
    icon: <NewspaperIcon fontSize="large" />,
    company: "Stamps.com",
    reference: "https://www.pcmag.com/archive/dymo-stamps-online-303933",
  },
  {
    id: 4,
    title: "4x Time-to-Market Acceleration",
    description:
      "Spearheaded Project Phoenix at EQIS Capital, resulting in a 70% reduction in operational costs and accelerated time-to-market by 4x.",
    icon: <StarIcon fontSize="large" />,
    company: "EQIS Capital",
  },
  {
    id: 5,
    title: "Flagship Platform Launch",
    description:
      "Architected and led development of VeraScore's flagship financial scoring platform to MVP in six months.",
    icon: <EmojiEventsIcon fontSize="large" />,
    company: "VeraScore",
    reference: "https://lnkd.in/gmTRAUEx",
  },
  {
    id: 6,
    title: "Engineering Excellence",
    description:
      "Directed a company-wide migration to cloud infrastructure at EQIS Capital, enhancing deployment agility and improving system resilience by 30%.",
    icon: <WorkIcon fontSize="large" />,
    company: "EQIS Capital",
  },
];

const M3CareerHighlights: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ mb: 6, textAlign: "center" }}>
        <Typography
          component="h2"
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 2,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Highlights
        </Typography>
        <Typography
          variant="h6"
          sx={{
            maxWidth: "800px",
            mx: "auto",
            color:
              theme.palette.mode === "dark"
                ? theme.palette.grey[300]
                : theme.palette.grey[700],
          }}
        >
          Key achievements and milestones from my professional journey
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: 4,
        }}
      >
        {highlightItems.map((item, index) => (
          <Box key={item.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <HighlightCard>
                <IconWrapper>{item.icon}</IconWrapper>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: 700, mb: 1 }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: item.reference ? 1 : 2,
                    color:
                      theme.palette.mode === "dark"
                        ? theme.palette.grey[300]
                        : theme.palette.grey[700],
                    flexGrow: 1,
                  }}
                >
                  {item.description}
                </Typography>

                {item.reference && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                      fontSize: "0.85rem",
                    }}
                  >
                    <LinkIcon
                      fontSize="small"
                      sx={{
                        mr: 0.5,
                        color: theme.palette.primary.main,
                        fontSize: "0.9rem",
                      }}
                    />
                    <a
                      href={item.reference}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: theme.palette.primary.main,
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 500,
                        transition: "color 0.2s ease",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color =
                          theme.palette.secondary.main;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color =
                          theme.palette.primary.main;
                      }}
                    >
                      Reference
                      <OpenInNewIcon
                        sx={{
                          ml: 0.5,
                          fontSize: "0.9rem",
                        }}
                      />
                    </a>
                  </Box>
                )}
                <Tooltip title={`Achievement at ${item.company}`}>
                  <Typography
                    variant="caption"
                    sx={{
                      display: "inline-block",
                      px: 1.5,
                      py: 0.5,
                      borderRadius: "16px",
                      fontWeight: 600,
                      background:
                        theme.palette.mode === "dark"
                          ? alpha(theme.palette.secondary.main, 0.15)
                          : alpha(theme.palette.secondary.main, 0.1),
                      color:
                        theme.palette.mode === "dark"
                          ? theme.palette.secondary.light
                          : theme.palette.secondary.dark,
                      border: `1px solid ${alpha(
                        theme.palette.secondary.main,
                        0.2
                      )}`,
                    }}
                  >
                    {item.company}
                  </Typography>
                </Tooltip>
              </HighlightCard>
            </motion.div>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default M3CareerHighlights;
