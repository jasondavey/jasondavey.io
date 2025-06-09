import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  useTheme,
  alpha,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { styled } from "@mui/material/styles";
import { motion, useScroll, useTransform } from "framer-motion";
import { useThemeContext } from "@/theme";

// Styled components
const SectionContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(15, 0),
  overflow: "hidden",
  backgroundColor: theme.palette.mode === "dark" 
    ? alpha(theme.palette.background.default, 0.9)
    : alpha(theme.palette.grey[50], 0.9),
}));

const GlassCard = styled(Paper)(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 3,
  overflow: "hidden",
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
}));

const CustomTimelineItem = styled(TimelineItem)(({ theme }) => ({
  '&:before': {
    display: 'none',
  },
}));

const CustomTimelineDot = styled(TimelineDot)(({ theme }) => ({
  boxShadow: theme.shadows[3],
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  padding: theme.spacing(1),
}));

// Experience data
const experiences = [
  {
    id: 1,
    role: "VP Engineering",
    company: "VeraScore",
    duration: "June 2022 - Present",
    description: "As Vice President of Engineering at VeraScore, I lead cross-functional engineering efforts to deliver an inclusive, data-forward financial health platform designed to empower underserved communities with access to fair credit. My role combines high-level technical strategy, team leadership, and cross-disciplinary collaboration to build systems that are fast, trustworthy, and deeply human-centered.",
    achievements: [
      "Architected and led development of VeraScore's flagship financial scoring platform from prototype to production in under six months",
      "Directed the end-to-end design and implementation of VeraScore's flagship platform, balancing rapid iteration with long-term architectural resilience",
      "Architected a modern JAMStack-based platform with a CI/CD pipeline and cost-efficient cloud infrastructure to support scalable deployment",
      "Currently developing an early-stage system leveraging Model Context Protocol (MCP) and AI assistants to provide customized insights",
      "Cultivated a high-trust engineering culture rooted in curiosity, ownership, and continuous learning"
    ],
    technologies: ["React", "Node.js", "NextJS", "AWS", "JAMStack", "TypeScript", "MUI"]
  },
  {
    id: 2,
    role: "VP Engineering",
    company: "EQIS Capital",
    duration: "August 2017 - November 2022",
    description: "At EQIS Capital, I led high-performing, cross-functional teams across engineering, QA, product management, and UI/UX to modernize and scale our digital investment platform. My focus was on delivering performance-optimized, secure, and user-centric systems through a culture of technical excellence and iterative innovation.",
    achievements: [
      "Spearheaded Project Phoenix, resulting in a 70% reduction in operational costs and accelerated time-to-market by 4x",
      "Directed a company-wide migration to cloud infrastructure, enhancing deployment agility and improving system resilience by 30%",
      "Built a team environment rooted in psychological safety, fast iteration, and shared ownership of outcomes",
      "Instituted advanced security protocols, elevating platform-wide protection against cyber threats",
      "Redesigned the feature release lifecycle, cutting time-to-market by 25%"
    ],
    technologies: ["C#", "ASP.NET", "Azure", "React", "TypeScript", "SQL Server", "Redis"]
  },
  {
    id: 3,
    role: "Principal Engineer",
    company: "Stamps.com",
    duration: "June 2010 - August 2017",
    description: "As Principal Engineer at Stamps.com, I led the development of scalable, user-focused shipping and mailing solutions that merged innovation with operational excellence. My work centered on creating high-impact platforms that optimized global logistics, enhanced user experience, and demonstrated measurable performance and reliability improvements.",
    achievements: [
      "Architected and led the development of the GlobalPost system, significantly improving international shipping efficiency",
      "Secured a U.S. postal patent for technical innovation",
      "Spearheaded the launch of DYMO Stamps Online®, a cloud-native solution praised by PC Mag for its intuitive user experience",
      "Automated deployment pipelines and infrastructure provisioning, elevating release reliability and engineering velocity",
      "Championed best practices in CI/CD and DevOps to enhance delivery consistency and operational resilience"
    ],
    technologies: ["C#", "ASP.NET", "JavaScript", "SQL Server", "AWS", "Azure", "HTML/CSS"]
  }
];

const M3Experience: React.FC = () => {
  const theme = useTheme();
  const { mode } = useThemeContext();
  const ref = useRef<HTMLDivElement>(null);
  
  // Create refs for each experience item outside of the map function
  const experienceRefs = useRef<(HTMLDivElement | null)[]>(Array(experiences.length).fill(null));
  
  // Initialize visibility state for each experience
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(experiences.length).fill(false));
  
  // Set up scroll animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // Check if an element is in view
  const checkIfInView = (index: number, inView: boolean) => {
    if (inView && !visibleItems[index]) {
      const newVisibleItems = [...visibleItems];
      newVisibleItems[index] = true;
      setVisibleItems(newVisibleItems);
    }
  };
  
  return (
    <SectionContainer ref={ref} id="experience">
      {/* Animated background elements */}
      <Box sx={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        <motion.div
          style={{ 
            position: "absolute", 
            top: "-10%", 
            right: "-5%",
            width: "50vw",
            height: "50vw",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 70%)`,
            y: backgroundY
          }}
        />
        <motion.div
          style={{ 
            position: "absolute", 
            bottom: "10%", 
            left: "-10%",
            width: "40vw",
            height: "40vw",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.08)} 0%, transparent 70%)`,
            y: useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])
          }}
        />
        
        {/* Subtle grid pattern */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(
              ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)"} 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)"} 1px,
              transparent 1px
            )`,
            backgroundSize: "20px 20px",
            opacity: 0.4,
          }}
        />
      </Box>
      
      <Container sx={{ position: "relative", zIndex: 1 }}>
        {/* Section heading */}
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
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
              Professional Journey
            </Typography>
            
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
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
              Work Experience
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
              A timeline of my professional journey, highlighting key roles and achievements
              that have shaped my expertise in engineering and leadership.
            </Typography>
          </motion.div>
        </Box>
        
        {/* Experience timeline */}
        <Timeline position="alternate">
          {experiences.map((experience, index) => (
            <CustomTimelineItem key={experience.id}>
              <TimelineOppositeContent
                sx={{ 
                  m: 'auto 0',
                  display: {xs: 'none', md: 'block'}
                }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Typography 
                    variant="h6" 
                    component="span" 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: theme.palette.mode === "dark" ? theme.palette.primary.light : theme.palette.primary.dark
                    }}
                  >
                    {experience.duration}
                  </Typography>
                </motion.div>
              </TimelineOppositeContent>
              
              <TimelineSeparator>
                <motion.div
                  ref={(el) => (experienceRefs.current[index] = el)}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  onViewportEnter={() => checkIfInView(index, true)}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <CustomTimelineDot />
                </motion.div>
                
                {index < experiences.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "auto" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ width: "100%" }}
                  >
                    <TimelineConnector />
                  </motion.div>
                )}
              </TimelineSeparator>
              
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <GlassCard elevation={0} sx={{ p: 3 }}>
                    <Box sx={{ mb: { xs: 2, md: 0 }, display: { xs: 'block', md: 'none' } }}>
                      <Typography 
                        variant="subtitle1" 
                        component="div"
                        sx={{ 
                          color: theme.palette.mode === "dark" ? theme.palette.primary.light : theme.palette.primary.dark,
                          fontWeight: 600
                        }}
                      >
                        {experience.duration}
                      </Typography>
                    </Box>
                    
                    <Typography 
                      variant="h5" 
                      component="h3"
                      sx={{ 
                        fontWeight: 700,
                        mb: 1
                      }}
                    >
                      {experience.role}
                    </Typography>
                    
                    <Typography 
                      variant="subtitle1" 
                      component="div"
                      sx={{ 
                        color: theme.palette.mode === "dark" ? theme.palette.secondary.light : theme.palette.secondary.dark,
                        fontWeight: 600,
                        mb: 2
                      }}
                    >
                      {experience.company}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      sx={{ mb: 2 }}
                    >
                      {experience.description}
                    </Typography>
                    
                    <Box sx={{ mb: 2 }}>
                      <Typography 
                        variant="subtitle2" 
                        component="div"
                        sx={{ 
                          fontWeight: 700,
                          mb: 1
                        }}
                      >
                        Key Achievements:
                      </Typography>
                      
                      <Box component="ul" sx={{ pl: 2 }}>
                        {experience.achievements.map((achievement, i) => (
                          <Typography 
                            component="li" 
                            variant="body2" 
                            key={i}
                            sx={{ mb: 0.5 }}
                          >
                            {achievement}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {experience.technologies.map((tech, i) => (
                        <Box
                          key={i}
                          component="span"
                          sx={{
                            px: 1.5,
                            py: 0.5,
                            borderRadius: '16px',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            background: theme.palette.mode === "dark" 
                              ? alpha(theme.palette.primary.main, 0.15)
                              : alpha(theme.palette.primary.main, 0.1),
                            color: theme.palette.mode === "dark"
                              ? theme.palette.primary.light
                              : theme.palette.primary.dark,
                            border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                          }}
                        >
                          {tech}
                        </Box>
                      ))}
                    </Box>
                  </GlassCard>
                </motion.div>
              </TimelineContent>
            </CustomTimelineItem>
          ))}
        </Timeline>
      </Container>
    </SectionContainer>
  );
};

export default M3Experience;
