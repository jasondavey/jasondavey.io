import React, { useState, useRef } from "react";
import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  CardContent, 
  CardMedia,
  CardActions,
  Button,
  Chip,
  useTheme,
  alpha,
  Tabs,
  Tab,
  Divider,
  Grid,
  Tooltip
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import VisibilityIcon from '@mui/icons-material/Visibility';

// Industry tab icons
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MovieIcon from '@mui/icons-material/Movie';
import GavelIcon from '@mui/icons-material/Gavel';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import M3ProjectDetailsModal from "./M3ProjectDetailsModal";
import { useThemeContext } from "@/theme";

// Import projects
import ProjectVerascore from "./projects/ProjectVerascore";
import ProjectVideoSanitizer from "./projects/ProjectVideoSanitizer";
import ProjectFreedomAdvisors from "./projects/ProjectFreedomAdvisors";
import ProjectStampsCom from "./projects/ProjectStampsCom";
import ProjectSoccerTourism from "./projects/ProjectSoccerTourism";
import ProjectDymoStamps from "./projects/ProjectDymoStamps";
import ProjectIntelliPad from "./projects/ProjectIntelliPad";
import ProjectBlackRock from "./projects/ProjectBlackRock";
import { Project } from "./Project";

// Styled components for M3 Expressive design
const SectionContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(15, 0),
  overflow: "hidden",
  backgroundColor: theme.palette.mode === "dark" 
    ? alpha(theme.palette.primary.dark, 0.05)
    : alpha(theme.palette.primary.light, 0.05),
}));

const ProjectCard = styled(motion(Card))(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 3,
  overflow: "hidden",
  background: theme.palette.mode === "dark"
    ? `linear-gradient(145deg, ${alpha(theme.palette.grey[900], 0.9)}, ${alpha(theme.palette.background.paper, 0.9)})`
    : `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.9)}, ${alpha(theme.palette.grey[100], 0.9)})`,
  backdropFilter: "blur(10px)",
  border: `1px solid ${theme.palette.mode === "dark"
    ? "rgba(255, 255, 255, 0.05)"
    : "rgba(255, 255, 255, 0.8)"}`,
  boxShadow: theme.palette.mode === "dark"
    ? "0 10px 40px rgba(0, 0, 0, 0.5)"
    : "0 10px 40px rgba(0, 0, 0, 0.1)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 240,
  position: "relative",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "30%",
    background: `linear-gradient(to top, ${theme.palette.background.paper}, transparent)`,
    opacity: 0.8,
  }
}));

// Real project data from imports
const allProjects: Project[] = [
  ProjectVerascore,
  ProjectVideoSanitizer,
  ProjectFreedomAdvisors,
  ProjectDymoStamps,
  ProjectStampsCom,
  ProjectSoccerTourism,
  ProjectIntelliPad,
  ProjectBlackRock
];

// Sort projects by endYear in descending order (newest first)
// For projects without an endYear (ongoing projects), use current year for sorting
const currentYear = new Date().getFullYear();
const projects: Project[] = [...allProjects].sort(
  (a, b) => (b.endYear || currentYear) - (a.endYear || currentYear)
);

// Helper function to get the appropriate icon for each industry
// Helper function to get the appropriate icon for each industry
const getIndustryIcon = (industry: string) => {
  switch(industry) {
    case "Fintech":
      return <TrendingUpIcon fontSize="small" sx={{ verticalAlign: 'middle', ml: 1 }} />;
    case "Shipping":
      return <LocalShippingIcon fontSize="small" sx={{ verticalAlign: 'middle', ml: 1 }} />;
    case "Media":
      return <MovieIcon fontSize="small" sx={{ verticalAlign: 'middle', ml: 1 }} />;
    case "Legal":
      return <GavelIcon fontSize="small" sx={{ verticalAlign: 'middle', ml: 1 }} />;
    case "Tourism":
      return <TravelExploreIcon fontSize="small" sx={{ verticalAlign: 'middle', ml: 1 }} />;
    default:
      return <AllInclusiveIcon fontSize="small" sx={{ verticalAlign: 'middle', ml: 1 }} />;
  }
};

// Helper function to get YouTube thumbnail from video URL
const getYouTubeThumbnail = (videoUrl: string): string => {
  if (!videoUrl) return "";
  
  // Extract video ID from YouTube URL
  const regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch))?\?v(?:=|\/)|(&v(?:=|\/)))([^#&?]*).*/;
  const match = videoUrl.match(regExp);
  const videoId = match && match[2] ? match[2] : null;
  
  // Return high quality thumbnail URL if ID found
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
};

const M3Projects = () => {
  const theme = useTheme();
  const { mode } = useThemeContext();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);
  
  // State for project details modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [detailsModalOpen, setDetailsModalOpen] = useState<boolean>(false);
  
  // Create refs array for project items - proper React pattern
  const projectRefs = useRef<(HTMLDivElement | null)[]>(projects.map(() => null));
  
  // Use a state array to track visibility instead of useInView inside map
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>(projects.map(() => false));
    
  // Parallax scrolling effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // Open project details modal
  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setDetailsModalOpen(true);
  };
  
  // Close project details modal
  const handleCloseDetails = () => {
    setDetailsModalOpen(false);
  };
  
  // Filter projects based on selected industry tab
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    
    // Filter projects based on selected tab
    if (newValue === 0) {
      // "All" tab selected
      setFilteredProjects(projects);
    } else {
      // Map tab index to industry
      const industries = ["All", "Fintech", "Shipping", "Media", "Legal", "Tourism"];
      const selectedIndustry = industries[newValue];
      
      // Filter projects by the selected industry
      setFilteredProjects(projects.filter(project => project.industry === selectedIndustry));
    }
  };
  
  // Set up ref callbacks for each project card
  const setProjectRef = (index: number) => (element: HTMLDivElement | null) => {
    projectRefs.current[index] = element;
  };
  
  // Handle project entering viewport
  const handleProjectInView = (index: number) => (inView: boolean) => {
    if (inView && !visibleProjects[index]) {
      setVisibleProjects(prev => {
        const updated = [...prev];
        updated[index] = true;
        return updated;
      });
    }
  };
  
  return (
    <SectionContainer ref={sectionRef} id="projects">
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden'
        }}
      >
        <motion.div
          style={{
            y: backgroundY,
            position: 'absolute',
            top: '-5%',
            left: '-3%',
            width: '40%',
            height: '40%',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.2)} 0%, transparent 70%)`,
            filter: 'blur(40px)'
          }}
        />
        <motion.div
          style={{
            y: backgroundY,
            position: 'absolute',
            bottom: '0%',
            right: '-5%',
            width: '30%',
            height: '40%',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.15)} 0%, transparent 70%)`,
            filter: 'blur(60px)'
          }}
        />
      </Box>
      
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              background: theme.palette.mode === "dark" 
                ? `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.light})` 
                : `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Featured Projects
          </Typography>
          
          <Typography 
            variant="h5" 
            component="p"
            sx={{
              maxWidth: '700px',
              mx: 'auto',
              color: theme.palette.text.secondary,
              fontWeight: 400,
              mb: 6
            }}
          >
            Explore my work across different industries and technologies
          </Typography>
          
          {/* Filter/Tab buttons for industries */}
          <Box sx={{ width: '100%', mb: 4 }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="Project categories"
              sx={{
                overflow: 'auto',
                maxWidth: '100%',
                '& .MuiTabs-flexContainer': {
                  justifyContent: { xs: 'flex-start', md: 'center' },
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: theme.palette.primary.main,
                  height: 3,
                  borderRadius: '3px',
                },
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 600,
                  minWidth: 'auto',
                  padding: '12px 18px',
                  borderRadius: '12px',
                  marginX: 1,
                  color: theme.palette.text.secondary,
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 1,
                  '& .MuiSvgIcon-root': {
                    fontSize: '1.2rem',
                    marginRight: '6px',
                    opacity: 0.8,
                    transition: 'all 0.3s ease',
                  },
                  '&:hover': {
                    backgroundColor: 
                      theme.palette.mode === 'dark' 
                        ? alpha(theme.palette.primary.main, 0.1)
                        : alpha(theme.palette.primary.main, 0.05),
                    '& .MuiSvgIcon-root': {
                      transform: 'scale(1.2)',
                      opacity: 1,
                    }
                  },
                  '&.Mui-selected': {
                    color: theme.palette.primary.main,
                    backgroundColor: 
                      theme.palette.mode === 'dark' 
                        ? alpha(theme.palette.primary.main, 0.15)
                        : alpha(theme.palette.primary.main, 0.1),
                    '& .MuiSvgIcon-root': {
                      color: theme.palette.primary.main,
                      opacity: 1,
                    }
                  },
                }
              }}
            >
              <Tab 
                label="All" 
                icon={<AllInclusiveIcon />} 
                iconPosition="start"
              />
              <Tab 
                label="Fintech" 
                icon={<TrendingUpIcon />} 
                iconPosition="start"
              />
              <Tab 
                label="Shipping" 
                icon={<LocalShippingIcon />} 
                iconPosition="start"
              />
              <Tab 
                label="Media" 
                icon={<MovieIcon />} 
                iconPosition="start"
              />
              <Tab 
                label="Legal" 
                icon={<GavelIcon />} 
                iconPosition="start"
              />
              <Tab 
                label="Tourism" 
                icon={<TravelExploreIcon />} 
                iconPosition="start"
              />
            </Tabs>
          </Box>
        </Box>
        
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
          {filteredProjects.map((project, index) => (
            <Box key={project.title + index.toString()} sx={{ mb: 4 }}>
              <motion.div
                ref={setProjectRef(index)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                onViewportEnter={() => handleProjectInView(index)(true)}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ height: '100%' }}
              >
                <ProjectCard
                  whileHover={{ 
                    y: -10,
                    boxShadow: theme.palette.mode === "dark"
                      ? "0 20px 60px rgba(0, 0, 0, 0.5)"
                      : "0 20px 60px rgba(0, 0, 0, 0.15)"
                  }}
                  style={{ height: '100%' }}
                >
                  <motion.div
                    animate={{
                      scale: hoveredProject === project.title ? 1.05 : 1
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {(project.image || project.videoUrl) && (
                      <StyledCardMedia
                        image={project.image || getYouTubeThumbnail(project.videoUrl || "")}
                        title={project.title}
                        sx={{ height: 240 }}
                      />
                    )}
                  </motion.div>
                  
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between',
                      mb: 1 
                    }}>
                      <Typography 
                        variant="h5" 
                        component="h3"
                        gutterBottom
                        sx={{ 
                          fontWeight: 700,
                          background: hoveredProject === project.title
                            ? `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                            : "inherit",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: hoveredProject === project.title ? "transparent" : "inherit",
                          transition: "all 0.3s ease",
                          mb: 0
                        }}
                      >
                        {project.title}
                      </Typography>
                      
                      {project.companyIcon && (
                        <Box 
                          component="img"
                          src={theme.palette.mode === 'dark' && project.darkModeCompanyIcon 
                            ? project.darkModeCompanyIcon 
                            : project.companyIcon}
                          alt={project.companyName || ''}
                          sx={{ height: 36, width: 'auto' }}
                        />
                      )}
                    </Box>
                    
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ 
                        mb: 2,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {typeof project.description === 'string' 
                        ? project.description 
                        : "A comprehensive project showcasing advanced technical skills and business impact."}
                    </Typography>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                        <strong>Industry:</strong><span style={{ marginLeft: '0.5rem' }}>{project.industry}{getIndustryIcon(project.industry)}</span>
                      </Typography>
                      <Typography variant="body2">
                        {project.startYear}{project.endYear ? ` - ${project.endYear}` : ' - Present'}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
                      {project.technologies.map(tech => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            borderRadius: "16px",
                            background: theme.palette.mode === "dark" 
                              ? alpha(theme.palette.primary.dark, 0.2)
                              : alpha(theme.palette.primary.light, 0.2),
                            color: theme.palette.primary.main,
                            fontWeight: 500,
                            border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                            mb: 0.5,
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  
                  <CardActions sx={{ p: 3, pt: 0, mt: 'auto', justifyContent: 'space-between' }}>
                    {project.companyUrl && (
                      <Button 
                        size="small" 
                        startIcon={<LaunchIcon />}
                        href={project.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          textTransform: "none",
                          fontWeight: 600,
                          borderRadius: "20px",
                        }}
                      >
                        {project.companyName || "Company"}
                      </Button>
                    )}
                    
                    {project.showDemoButton && project.demo && (
                      <Button 
                        size="small" 
                        startIcon={<OpenInNewIcon />}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        color="primary"
                        sx={{
                          textTransform: "none",
                          fontWeight: 600,
                          borderRadius: "20px",
                        }}
                      >
                        Live Demo
                      </Button>
                    )}
                    
                    {project.showCodeButton && project.github && (
                      <Button 
                        size="small" 
                        startIcon={<GitHubIcon />}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          textTransform: "none",
                          fontWeight: 600,
                          borderRadius: "20px",
                        }}
                      >
                        View Code
                      </Button>
                    )}
                    
                    {/* View Details Button */}
                    <Tooltip title="View Project Details">
                      <Button 
                        size="small" 
                        startIcon={<VisibilityIcon />}
                        onClick={() => handleOpenDetails(project)}
                        variant="outlined"
                        color="primary"
                        sx={{
                          textTransform: "none",
                          fontWeight: 600,
                          borderRadius: "20px",
                          ml: 'auto'
                        }}
                      >
                        View Details
                      </Button>
                    </Tooltip>
                  </CardActions>
                </ProjectCard>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Container>
      
      {/* Project Details Modal */}
      {selectedProject && (
        <M3ProjectDetailsModal 
          project={selectedProject}
          open={detailsModalOpen}
          onClose={handleCloseDetails}
        />
      )}
    </SectionContainer>
  );
};

export default M3Projects;
