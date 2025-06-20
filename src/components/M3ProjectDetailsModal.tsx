import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Chip,
  Tabs,
  Tab,
  Divider,
  IconButton,
  useTheme,
  alpha,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BarChartIcon from "@mui/icons-material/BarChart";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import VideoEmbed from "./VideoEmbed";
import { styled } from "@mui/material/styles";
import { Project } from "./Project";

// Styled components for the modal
const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: Number(theme.shape.borderRadius) * 3,
    background:
      theme.palette.mode === "dark"
        ? `linear-gradient(145deg, ${alpha(
            theme.palette.grey[900],
            0.9
          )}, ${alpha(theme.palette.background.paper, 0.9)})`
        : `linear-gradient(145deg, ${alpha(
            theme.palette.background.paper,
            0.9
          )}, ${alpha(theme.palette.grey[100], 0.9)})`,
    backdropFilter: "blur(10px)",
    border: `1px solid ${
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.05)"
        : "rgba(255, 255, 255, 0.8)"
    }`,
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 10px 40px rgba(0, 0, 0, 0.5)"
        : "0 10px 40px rgba(0, 0, 0, 0.1)",
    padding: theme.spacing(2),
    maxWidth: "900px",
    maxHeight: "90vh",
    width: "90vw",
    overflowY: "auto",
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  minWidth: "auto",
  fontWeight: 500,
  padding: theme.spacing(1, 2),
  borderRadius: theme.spacing(2),
  "&.Mui-selected": {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    fontWeight: 600,
  },
}));

const GlassContent = styled(Box)(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 2,
  background:
    theme.palette.mode === "dark"
      ? alpha(theme.palette.background.paper, 0.3)
      : alpha(theme.palette.background.paper, 0.5),
  backdropFilter: "blur(10px)",
  padding: theme.spacing(3),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  border: `1px solid ${
    theme.palette.mode === "dark"
      ? alpha(theme.palette.common.white, 0.05)
      : alpha(theme.palette.common.black, 0.05)
  }`,
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`project-tabpanel-${index}`}
      aria-labelledby={`project-tab-${index}`}
      {...other}
      style={{ paddingTop: 16 }}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `project-tab-${index}`,
    "aria-controls": `project-tabpanel-${index}`,
  };
}

interface ProjectDetailsModalProps {
  project: Project;
  open: boolean;
  onClose: () => void;
}

const M3ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  open,
  onClose,
}) => {
  const theme = useTheme();
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Determine which tabs to show based on available data
  const showBusinessTab = Boolean(
    project.businessView || project.businessTerms
  );
  const showArchitectureTab = Boolean(
    project.description || project.keyArchitecture
  );
  const showResultsTab = Boolean(project.resultsImpact);
  const showVideoTab = Boolean(project.videoUrl);

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      scroll="paper"
      aria-labelledby="project-details-title"
      maxWidth="lg"
      fullWidth
    >
      <DialogTitle
        id="project-details-title"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {project.companyIcon && (
            <Box
              component="img"
              src={project.companyIcon}
              alt={project.companyName || "Company logo"}
              sx={{
                width: 40,
                height: 40,
                borderRadius: "8px",
                objectFit: "contain",
                p: 0.5,
                background:
                  theme.palette.mode === "dark"
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.05)",
              }}
            />
          )}
          <Box>
            <Typography variant="h5" component="h2" fontWeight={600}>
              {project.title}
            </Typography>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}
            >
              {project.companyName && (
                <Typography variant="subtitle1" color="text.secondary">
                  {project.companyName}
                </Typography>
              )}
              {project.startYear && (
                <Typography variant="subtitle1" color="text.secondary">
                  • {project.startYear}
                  {project.endYear ? ` - ${project.endYear}` : " - Present"}
                </Typography>
              )}
              <Chip
                label={project.industry}
                size="small"
                sx={{
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  color: theme.palette.primary.main,
                  fontWeight: 500,
                  ml: 1,
                }}
              />
            </Box>
          </Box>
        </Box>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: theme.palette.text.secondary,
            "&:hover": {
              color: theme.palette.text.primary,
              backgroundColor: alpha(theme.palette.text.primary, 0.1),
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Box sx={{ px: 3, pb: 1 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            mb: 1,
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          {showBusinessTab && (
            <StyledTab
              label="Business Context"
              icon={<BusinessCenterIcon sx={{ fontSize: 18 }} />}
              iconPosition="start"
              {...a11yProps(0)}
            />
          )}
          {showArchitectureTab && (
            <StyledTab
              label="Architecture"
              icon={<ArchitectureIcon sx={{ fontSize: 18 }} />}
              iconPosition="start"
              {...a11yProps(showBusinessTab ? 1 : 0)}
            />
          )}
          {showResultsTab && (
            <StyledTab
              label="Results & Impact"
              icon={<BarChartIcon sx={{ fontSize: 18 }} />}
              iconPosition="start"
              {...a11yProps(
                (showBusinessTab ? 1 : 0) + (showArchitectureTab ? 1 : 0)
              )}
            />
          )}
          {showVideoTab && (
            <StyledTab
              label="Video Demo"
              icon={<VideoLibraryIcon />}
              iconPosition="start"
              sx={{ minHeight: "auto", py: 1.5 }}
              {...a11yProps(
                (showBusinessTab ? 1 : 0) +
                  (showArchitectureTab ? 1 : 0) +
                  (showResultsTab ? 1 : 0)
              )}
            />
          )}
        </Tabs>
      </Box>

      <Divider />

      <DialogContent dividers={false} sx={{ p: 3 }}>
        {/* Business Context Tab */}
        {showBusinessTab && (
          <TabPanel value={tabValue} index={0}>
            <GlassContent>
              {project.businessSplashImage && (
                <Box
                  component="img"
                  src={project.businessSplashImage}
                  alt="Business context"
                  sx={{
                    width: "100%",
                    height: 240,
                    objectFit: "cover",
                    borderRadius: Number(theme.shape.borderRadius) * 2,
                    mb: 3,
                  }}
                />
              )}
              {project.businessTerms && project.businessTerms.length > 0 && (
                <Box sx={{ mb: 3, display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {project.businessTerms.map((term, index) => (
                    <Chip
                      key={index}
                      label={term}
                      sx={{
                        backgroundColor: alpha(
                          theme.palette.secondary.main,
                          0.1
                        ),
                        color: theme.palette.secondary.main,
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Box>
              )}
              {project.businessView && (
                <Box
                  className="business-view"
                  sx={{
                    color: theme.palette.text.primary,
                    "& p": { mb: 2, color: theme.palette.text.primary },
                    "& strong": {
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                    },
                    whiteSpace: "pre-line",
                  }}
                >
                  {project.businessView}
                </Box>
              )}
            </GlassContent>
          </TabPanel>
        )}

        {/* Architecture Tab */}
        {showArchitectureTab && (
          <TabPanel value={tabValue} index={showBusinessTab ? 1 : 0}>
            <GlassContent>
              {project.description && (
                <Box
                  className="project-description"
                  sx={{
                    color: theme.palette.text.primary,
                    "& p": { mb: 2, color: theme.palette.text.primary },
                    "& strong": {
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                    },
                    whiteSpace: "pre-line",
                  }}
                >
                  {project.description}
                </Box>
              )}

              {project.archImage && (
                <Box sx={{ mt: 4, mb: 3 }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Architecture Diagram
                  </Typography>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      borderRadius: Number(theme.shape.borderRadius) * 2,
                      border: `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <Box
                      component="img"
                      src={project.archImage}
                      alt="Architecture diagram"
                      sx={{
                        width: "100%",
                        borderRadius: Number(theme.shape.borderRadius),
                      }}
                    />
                  </Paper>
                </Box>
              )}

              {project.keyArchitecture && (
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Key Architecture Components
                  </Typography>
                  <Box
                    className="key-architecture"
                    sx={{
                      whiteSpace: "pre-line",
                      color: theme.palette.text.primary,
                      "& p": { mb: 2, color: theme.palette.text.primary },
                      "& strong": {
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                      },
                    }}
                  >
                    {project.keyArchitecture}
                  </Box>
                </Box>
              )}
            </GlassContent>
          </TabPanel>
        )}

        {/* Results & Impact Tab */}
        {showResultsTab && (
          <TabPanel
            value={tabValue}
            index={(showBusinessTab ? 1 : 0) + (showArchitectureTab ? 1 : 0)}
          >
            <GlassContent>
              {project.resultsImpact && (
                <Box
                  className="results-impact"
                  sx={{
                    color: theme.palette.text.primary,
                    "& p": { mb: 2, color: theme.palette.text.primary },
                    "& strong": {
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                    },
                    "& h4": {
                      fontSize: theme.typography.h6.fontSize,
                      fontWeight: 600,
                      mb: 1.5,
                      mt: 3,
                      color: theme.palette.text.primary,
                      "&:first-of-type": {
                        mt: 0,
                      },
                    },
                    "& ul": {
                      pl: 3,
                      mb: 2,
                      color: theme.palette.text.primary,
                    },
                    "& li": {
                      mb: 1.5,
                      color: theme.palette.text.primary,
                    },
                    "& hr": {
                      my: 3,
                      borderColor: theme.palette.divider,
                    },
                    whiteSpace: "pre-line",
                  }}
                >
                  {project.resultsImpact}
                </Box>
              )}
            </GlassContent>
          </TabPanel>
        )}

        {/* Video Demo Tab */}
        {showVideoTab && (
          <TabPanel
            value={tabValue}
            index={
              (showBusinessTab ? 1 : 0) +
              (showArchitectureTab ? 1 : 0) +
              (showResultsTab ? 1 : 0)
            }
          >
            <GlassContent>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <VideoEmbed
                  videoUrl={project.videoUrl || ""}
                  className="w-full rounded-xl overflow-hidden"
                />
              </Box>
            </GlassContent>
          </TabPanel>
        )}
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2, pt: 1 }}>
        {project.companyUrl && (
          <Button
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
            {project.companyName || "Company Website"}
          </Button>
        )}

        {project.github && project.showCodeButton && (
          <Button
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

        {project.demo && project.showDemoButton && (
          <Button
            variant="contained"
            color="primary"
            startIcon={<LaunchIcon />}
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              borderRadius: "20px",
              ml: "auto",
            }}
          >
            Live Demo
          </Button>
        )}

        <Button
          onClick={onClose}
          sx={{
            ml: project.demo && project.showDemoButton ? 2 : "auto",
            textTransform: "none",
            fontWeight: 600,
            borderRadius: "20px",
          }}
        >
          Close
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default M3ProjectDetailsModal;
