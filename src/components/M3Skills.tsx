import React, { useRef } from "react";
import { 
  Box, 
  Typography, 
  Container, 
  Grid,
  LinearProgress,
  useTheme,
  alpha,
  Paper
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useThemeContext } from "@/theme";

// Styled components for enhanced visual design
const SectionContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(15, 0),
  overflow: "hidden",
  backgroundColor: theme.palette.mode === "dark" 
    ? alpha(theme.palette.background.default, 0.9)
    : alpha(theme.palette.grey[50], 0.9),
  scrollMarginTop: "96px", // Matches the 'scroll-mt-24' from the original Skills component
}));

const GradientPaper = styled(Paper)(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 3,
  padding: theme.spacing(3),
  height: "100%",
  background: theme.palette.mode === "dark"
    ? `linear-gradient(145deg, ${alpha(theme.palette.grey[900], 0.7)}, ${alpha(theme.palette.background.paper, 0.7)})`
    : `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.7)}, ${alpha(theme.palette.grey[100], 0.7)})`,
  backdropFilter: "blur(10px)",
  border: `1px solid ${theme.palette.mode === "dark"
    ? "rgba(255, 255, 255, 0.05)"
    : "rgba(255, 255, 255, 0.8)"}`,
  boxShadow: theme.palette.mode === "dark"
    ? "0 10px 30px rgba(0, 0, 0, 0.3)"
    : "0 10px 30px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.palette.mode === "dark"
      ? "0 15px 40px rgba(0, 0, 0, 0.4)"
      : "0 15px 40px rgba(0, 0, 0, 0.15)",
  }
}));

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: theme.palette.mode === "dark" 
    ? alpha(theme.palette.grey[700], 0.5)
    : alpha(theme.palette.grey[300], 0.5),
  "& .MuiLinearProgress-bar": {
    borderRadius: 5,
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  }
}));

// Skill categories and skills
const skillCategories = [
  {
    id: 1,
    name: "Frontend Development",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Material UI", level: 90 },
    ]
  },
  {
    id: 2,
    name: "Backend Development",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 85 },
      { name: "Python", level: 80 },
      { name: "GraphQL", level: 85 },
      { name: "RESTful APIs", level: 95 },
    ]
  },
  {
    id: 3,
    name: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "AWS", level: 85 },
      { name: "CI/CD", level: 90 },
      { name: "Terraform", level: 80 },
    ]
  },
  {
    id: 4,
    name: "Other Skills",
    skills: [
      { name: "UX Design", level: 85 },
      { name: "Team Leadership", level: 95 },
      { name: "Agile/Scrum", level: 90 },
      { name: "Data Analysis", level: 85 },
      { name: "System Architecture", level: 90 },
    ]
  }
];

// Skill category component
interface SkillCategoryProps {
  category: {
    id: number;
    name: string;
    skills: Array<{ name: string; level: number }>;
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
            mb: 3,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {category.name}
        </Typography>
        
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          {category.skills.map((skill, idx) => (
            <Box key={skill.name}>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                <Typography variant="body2" fontWeight={500}>
                  {skill.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {skill.level}%
                </Typography>
              </Box>
              
              <Box sx={{ position: "relative" }}>
                <StyledLinearProgress
                  variant="determinate"
                  value={0}
                  sx={{ opacity: 0.5 }}
                />
                <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: "0%" }}
                    transition={{ duration: 1, delay: 0.3 + (0.1 * idx) }}
                  >
                    <StyledLinearProgress
                      variant="determinate"
                      value={100}
                    />
                  </motion.div>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </GradientPaper>
    </motion.div>
  );
};

const M3Skills = () => {
  const { mode } = useThemeContext();
  const theme = useTheme();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  
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
            x: useTransform(scrollYProgress, [0, 1], ["0%", "10%"]),
          }}
        />
        
        {/* Floating dots pattern */}
        <Box sx={{ position: "absolute", inset: 0 }}>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                borderRadius: "50%",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                backgroundColor: theme.palette.primary.main,
                opacity: 0.3,
              }}
              animate={{
                y: [0, Math.random() * 30 - 15],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
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
              My Expertise
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
              I continually expand my skill set to stay at the cutting edge of technology.
              Here's a snapshot of my current technical and professional capabilities.
            </Typography>
          </motion.div>
        </Box>
        
        {/* Skills grid */}
        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={6} key={category.id}>
              <SkillCategory category={category} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default M3Skills;
