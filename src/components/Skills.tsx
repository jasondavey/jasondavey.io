import React, { useRef } from "react";
import { Box, Typography, Container, Grid, Chip, useTheme, alpha, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// Styled components for enhanced visual design
const SectionContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(15, 0),
  overflow: "hidden",
  backgroundColor:
    theme.palette.mode === "dark"
      ? alpha(theme.palette.background.default, 0.9)
      : alpha(theme.palette.grey[50], 0.9),
  scrollMarginTop: "96px", // Matches the 'scroll-mt-24' from the original Skills component
}));

const GradientPaper = styled(Paper)(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 3,
  padding: theme.spacing(3),
  height: "100%",
  background:
    theme.palette.mode === "dark"
      ? `linear-gradient(145deg, ${alpha(theme.palette.grey[900], 0.7)}, ${alpha(theme.palette.background.paper, 0.7)})`
      : `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.7)}, ${alpha(theme.palette.grey[100], 0.7)})`,
  backdropFilter: "blur(10px)",
  border: `1px solid ${
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.8)"
  }`,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 10px 30px rgba(0, 0, 0, 0.3)"
      : "0 10px 30px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 15px 40px rgba(0, 0, 0, 0.4)"
        : "0 15px 40px rgba(0, 0, 0, 0.15)",
  },
}));

// Skill categories, grounded in where each was actually used in production
// rather than an arbitrary self-rated percentage.
const skillCategories = [
  {
    id: 1,
    name: "Frontend & Product",
    blurb: "Shipped in production across VeraScore, Nularity, and PlayOn Sports.",
    skills: ["React", "TypeScript", "Next.js", "Vue / Nuxt", "Material UI"],
  },
  {
    id: 2,
    name: "Backend & Data",
    blurb: "From Stamps.com's shipping platform to VeraScore's multi-tenant SaaS backend.",
    skills: ["Node.js", "C# / .NET", "RESTful APIs", "GraphQL", "SQL Server"],
  },
  {
    id: 3,
    name: "Cloud & DevOps",
    blurb:
      "Migrated EQIS to cloud infrastructure (+30% resilience); built Nularity's IaC/CDK stack solo.",
    skills: ["AWS (EKS, CloudFront)", "Azure", "Docker", "CI/CD", "Terraform / CDK"],
  },
  {
    id: 4,
    name: "Leadership & Delivery",
    blurb: "VP Engineering at EQIS Capital and VeraScore; Staff Engineer at PlayOn Sports.",
    skills: [
      "Team Building",
      "Agile / Scrum",
      "System Architecture",
      "Cross-Functional Leadership",
    ],
  },
];

// Skill category component
interface SkillCategoryProps {
  category: {
    id: number;
    name: string;
    blurb: string;
    skills: string[];
  };
  index: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });
  const theme = useTheme();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.2 * index }}
    >
      <GradientPaper elevation={0}>
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 1,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {category.name}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          {category.blurb}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {category.skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              size="small"
              sx={{
                borderRadius: "16px",
                fontWeight: 500,
                background:
                  theme.palette.mode === "dark"
                    ? alpha(theme.palette.primary.main, 0.15)
                    : alpha(theme.palette.primary.main, 0.1),
                color:
                  theme.palette.mode === "dark"
                    ? theme.palette.primary.light
                    : theme.palette.primary.dark,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              }}
            />
          ))}
        </Box>
      </GradientPaper>
    </motion.div>
  );
};

// Pre-compute dot positions at module load so they stay stable across
// re-renders. Random in render would re-roll on every state change
// (purity rule).
const floatingDots = Array.from({ length: 20 }, () => ({
  sizePx: Math.random() * 6 + 2,
  topPct: Math.random() * 100,
  leftPct: Math.random() * 100,
  animY: Math.random() * 30 - 15,
  duration: Math.random() * 5 + 5,
}));

const Skills = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const backgroundX2 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <SectionContainer ref={ref} id="skills">
      {/* Animated background elements */}
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        {/* Dynamic abstract shapes */}
        <motion.div
          style={{
            position: "absolute",
            top: "10%",
            right: "-10%",
            width: "50vw",
            height: "50vw",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            background: `linear-gradient(145deg, ${alpha(theme.palette.primary.main, 0.05)}, ${alpha(theme.palette.secondary.main, 0.05)})`,
            x: backgroundX,
          }}
        />

        <motion.div
          style={{
            position: "absolute",
            bottom: "5%",
            left: "-5%",
            width: "40vw",
            height: "40vw",
            borderRadius: "63% 37% 37% 63% / 43% 37% 63% 57%",
            background: `linear-gradient(145deg, ${alpha(theme.palette.secondary.main, 0.05)}, ${alpha(theme.palette.primary.main, 0.05)})`,
            x: backgroundX2,
          }}
        />

        {/* Floating dots pattern */}
        <Box sx={{ position: "absolute", inset: 0 }}>
          {floatingDots.map((dot, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                width: `${dot.sizePx}px`,
                height: `${dot.sizePx}px`,
                borderRadius: "50%",
                top: `${dot.topPct}%`,
                left: `${dot.leftPct}%`,
                backgroundColor: theme.palette.primary.main,
                opacity: 0.3,
              }}
              animate={{
                y: [0, dot.animY],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: dot.duration,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </Box>
      </Box>

      <Container sx={{ position: "relative", zIndex: 1 }}>
        {/* Section heading */}
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
              Skills & Technologies
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
              The tools I reach for, grouped by where I've actually shipped them in production — not
              a self-rated percentage.
            </Typography>
          </motion.div>
        </Box>

        {/* Skills grid */}
        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={category.id}>
              <SkillCategory category={category} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default Skills;
