import { useState, useEffect } from "react";
import { marked } from "marked";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  CircularProgress,
  Paper,
  useTheme
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeContext } from "@/theme";

// Configure marked options for better formatting
marked.setOptions({
  breaks: true,      // Add line breaks
  gfm: true,         // GitHub Flavored Markdown
});

// Styled components for enhanced design
const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: `${Number(theme.shape.borderRadius) * 2}px`,
    boxShadow: theme.shadows[24],
    background: theme.palette.mode === 'dark' 
      ? `linear-gradient(145deg, ${theme.palette.background.paper}, ${theme.palette.primary.dark})`
      : `linear-gradient(145deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
    backdropFilter: 'blur(10px)',
    border: `1px solid ${theme.palette.divider}`,
    overflow: 'hidden',
  }
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  fontSize: '1.75rem',
  fontWeight: 700,
  color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3, 3, 2),
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(3),
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.mode === 'dark' 
      ? theme.palette.primary.dark 
      : theme.palette.primary.light,
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: theme.palette.primary.main,
  },
}));

// Function to enhance the rendered markdown with additional styling
const enhanceMarkdown = (html: string, isDarkMode: boolean): string => {
  const darkModeHighlight = isDarkMode 
    ? 'rgba(255, 255, 255, 0.05)' 
    : 'rgba(0, 0, 0, 0.04)';
    
  const codeBackground = isDarkMode
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.06)';
    
  const borderColor = isDarkMode
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)';

  return html
    .replace(/<h2/g, `<h2 style="border-bottom: 1px solid ${borderColor}; padding-bottom: 0.5rem; margin-bottom: 1rem; margin-top: 2rem; font-size: 1.5rem; font-weight: 600;"`)
    .replace(/<h1/g, `<h1 style="border-bottom: 2px solid ${borderColor}; padding-bottom: 0.75rem; margin-bottom: 1.5rem; margin-top: 0.5rem; font-size: 1.75rem; font-weight: 700;"`)
    .replace(/<ul>/g, '<ul style="margin: 1rem 0; padding-left: 1.5rem;">')
    .replace(/<ol>/g, '<ol style="margin: 1rem 0; padding-left: 1.5rem;">')
    .replace(/<pre>/g, `<pre style="background: ${darkModeHighlight}; padding: 1rem; border-radius: 8px; overflow: auto; margin: 1rem 0;"`)
    .replace(/<code>/g, `<code style="font-family: monospace; font-size: 0.9rem; background: ${codeBackground}; padding: 0.2rem 0.4rem; border-radius: 4px;"`)
    .replace(/<p>/g, '<p style="margin: 1rem 0; line-height: 1.6;">');
};

interface M3ReadmeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const M3ReadmeModal = ({ open, onOpenChange }: M3ReadmeModalProps) => {
  const [readmeContent, setReadmeContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { mode } = useThemeContext();
  const theme = useTheme();
  const isDarkMode = mode === 'dark';

  useEffect(() => {
    if (open && readmeContent === "") {
      setIsLoading(true);
      // Fetch the README.md content
      fetch("/README.md")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch README");
          }
          return response.text();
        })
        .then((content) => {
          setReadmeContent(content);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching README:", error);
          setReadmeContent("Failed to load README content. Please try again later.");
          setIsLoading(false);
        });
    }
  }, [open, readmeContent]);

  return (
    <AnimatePresence>
      {open && (
        <StyledDialog
          open={open}
          onClose={() => onOpenChange(false)}
          maxWidth="lg"
          fullWidth
          PaperProps={{
            style: { maxHeight: '90vh', height: '90vh' },
            sx: {
              overflow: 'hidden'
            }
          }}
        >
          <StyledDialogTitle>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Typography variant="h4" component="span">
                Project Documentation
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              Technical details and specifications for jasondavey.io
            </Typography>
          </StyledDialogTitle>
          
          {isLoading ? (
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              py: 8,
              height: '100%'
            }}>
              <CircularProgress 
                size={60} 
                thickness={4} 
                color="secondary"
                sx={{
                  '& .MuiCircularProgress-circle': {
                    strokeLinecap: 'round',
                  }
                }}
              />
            </Box>
          ) : (
            <StyledDialogContent dividers>
              <Box
                sx={{
                  color: 'text.primary',
                  '& a': {
                    color: 'secondary.main',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  },
                  '& img': {
                    maxWidth: '100%',
                    borderRadius: 1,
                  },
                }}
                dangerouslySetInnerHTML={{ 
                  __html: enhanceMarkdown(marked.parse(readmeContent) as string, isDarkMode)
                }}
              />
            </StyledDialogContent>
          )}
          
          <DialogActions sx={{ 
            p: 2, 
            borderTop: `1px solid ${theme.palette.divider}` 
          }}>
            <Button
              onClick={() => onOpenChange(false)}
              variant="outlined"
              color="primary"
              sx={{
                borderRadius: `${Number(theme.shape.borderRadius) * 2}px`,
                px: 3,
                py: 1,
                textTransform: 'none',
                fontWeight: 500
              }}
            >
              Close
            </Button>
          </DialogActions>
        </StyledDialog>
      )}
    </AnimatePresence>
  );
};

export default M3ReadmeModal;
