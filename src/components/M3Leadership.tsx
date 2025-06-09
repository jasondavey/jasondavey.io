import React, { useRef } from "react";
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card,
  CardContent,
  Avatar,
  useTheme,
  alpha
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useThemeContext } from "@/theme";
import PeopleIcon from '@mui/icons-material/People';
import { TbTargetArrow } from "react-icons/tb";
import { FaChartLine } from "react-icons/fa";

// Styled components for enhanced visual design
const SectionContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(15, 0),
  overflow: "hidden",
  backgroundColor: theme.palette.mode === "dark" 
    ? alpha(theme.palette.primary.dark, 0.05)
    : alpha(theme.palette.primary.light, 0.05),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
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
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.palette.mode === "dark"
      ? "0 15px 40px rgba(0, 0, 0, 0.4)"
      : "0 15px 40px rgba(0, 0, 0, 0.15)",
  }
}));

// Leadership philosophy card component
interface PhilosophyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const PhilosophyCard: React.FC<PhilosophyCardProps> = ({ icon, title, description, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });
  const theme = useTheme();
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.2 * index }}
      style={{ height: "100%" }}
    >
      <StyledCard>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box 
              sx={{ 
                color: theme.palette.primary.main,
                fontSize: "2rem",
                display: "flex",
                alignItems: "center",
                mr: 2
              }}
            >
              {icon}
            </Box>
            
            <Typography 
              variant="h5" 
              component="h3"
              sx={{ 
                fontWeight: 700,
                background: `linear-gradient(90deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {title}
            </Typography>
          </Box>
          
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ lineHeight: 1.7 }}
          >
            {description}
          </Typography>
        </CardContent>
      </StyledCard>
    </motion.div>
  );
};



const M3Leadership = () => {
  const { mode } = useThemeContext();
  const theme = useTheme();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // Leadership principles data
  const principles = [
    {
      icon: <PeopleIcon fontSize="inherit" />,
      title: "Empowering Teams",
      description: "I believe in building high-performance teams by fostering autonomy, continuous learning, and creating an environment where everyone's voice is valued.",
    },
    {
      icon: <TbTargetArrow size="1.8em" />,
      title: "Mission-Driven",
      description: "Success comes from having a clear vision and purpose. I drive alignment between team goals and broader organizational objectives to deliver impactful results.",
    },
    {
      icon: <FaChartLine size="1.6em" />,
      title: "Data-Informed Decisions",
      description: "I leverage analytics to make strategic decisions, balancing quantitative metrics with qualitative insights and maintaining a focus on continuous improvement.",
    },
  ];
  
  return (
    <SectionContainer ref={ref} id="leadership">
      {/* Animated background elements */}
      <Box sx={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        {/* Gradient orbs */}
        <motion.div
          style={{ 
            position: "absolute", 
            top: "30%", 
            right: "-5%",
            width: "40vw",
            height: "40vw",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 70%)`,
            y: backgroundY
          }}
        />
        <motion.div
          style={{ 
            position: "absolute", 
            bottom: "-10%", 
            left: "-10%",
            width: "50vw",
            height: "50vw",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.1)} 0%, transparent 70%)`,
            y: useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])
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
              Leadership
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
              Leadership Philosophy
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
              My approach to leadership combines technical expertise with a focus on people development,
              creating environments where innovation thrives and teams excel.
            </Typography>
          </motion.div>
        </Box>
        
        {/* Leadership principles */}
        <Box 
          sx={{ 
            display: "grid", 
            gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "1fr 1fr 1fr" },
            gap: 4,
          }}
        >
          {principles.map((principle, index) => (
            <Box key={index}>
              <PhilosophyCard
                icon={principle.icon}
                title={principle.title}
                description={principle.description}
                index={index}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </SectionContainer>
  );
};

export default M3Leadership;
