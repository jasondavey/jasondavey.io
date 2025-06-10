import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useThemeContext } from "@/theme";
import { Box, Typography, CircularProgress, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PublicIcon from "@mui/icons-material/Public";

interface ExternalLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
  description?: string;
}

const ExternalLinkModal: React.FC<ExternalLinkModalProps> = ({
  isOpen,
  onClose,
  url,
  title,
  description,
}) => {
  const { mode } = useThemeContext();
  const theme = useTheme();

  // Extract domain from URL for display
  const getDomain = (url: string) => {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname;
    } catch (e) {
      return "";
    }
  };

  const domain = getDomain(url);

  const handleVisit = () => {
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px] md:max-w-[600px] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl gap-2">
            <PublicIcon color="primary" />
            <span>External Link</span>
          </DialogTitle>
        </DialogHeader>

        <Box className="p-6">
          <Box 
            sx={{ 
              p: 4, 
              borderRadius: 2,
              bgcolor: alpha(theme.palette.background.paper, mode === 'dark' ? 0.4 : 0.8),
              border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              mb: 4,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              boxShadow: theme.shadows[3]
            }}
          >
            <Typography 
              variant="h6" 
              component="h3"
              sx={{ 
                color: 'text.primary',
                fontWeight: 600 
              }}
            >
              {title}
            </Typography>

            {description && (
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.secondary',
                  lineHeight: 1.6
                }}
              >
                {description}
              </Typography>
            )}

            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mt: 2,
                py: 1,
                px: 2,
                borderRadius: 1,
                bgcolor: alpha(theme.palette.background.default, mode === 'dark' ? 0.4 : 0.6),
                border: `1px solid ${alpha(theme.palette.divider, 0.05)}`
              }}
            >
              <PublicIcon sx={{ 
                fontSize: 20, 
                mr: 1, 
                color: mode === 'dark' ? 'primary.light' : 'primary.main'
              }} />
              <Typography 
                variant="body2" 
                sx={{ 
                  fontWeight: 500,
                  color: 'text.primary'
                }}
              >
                {domain}
              </Typography>
            </Box>
          </Box>

          <Box 
            sx={{ 
              bgcolor: alpha(theme.palette.info.main, mode === 'dark' ? 0.08 : 0.04),
              p: 3, 
              borderRadius: 2, 
              mb: 2,
              border: `1px solid ${alpha(theme.palette.info.main, mode === 'dark' ? 0.15 : 0.1)}`,
              boxShadow: theme.shadows[1]
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
              <Box 
                component="span" 
                sx={{ 
                  display: 'inline-flex',
                  p: 0.5,
                  borderRadius: '50%',
                  mr: 1,
                  bgcolor: alpha(theme.palette.info.main, mode === 'dark' ? 0.15 : 0.08)
                }}
              >
                <PublicIcon fontSize="small" color="primary" />
              </Box>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontWeight: 600,
                  color: 'info.main'
                }}
              >
                Security Notice
              </Typography>
            </Box>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'text.secondary',
                lineHeight: 1.6
              }}
            >
              You're about to leave Jason Davey's portfolio website and visit an external site. 
              External sites are not under my control and may have different privacy and security policies.
            </Typography>
          </Box>
        </Box>

        <DialogFooter>
          <Button 
            variant="outline" 
            onClick={onClose} 
            className="mr-2"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleVisit} 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <OpenInNewIcon className="mr-2 h-4 w-4" /> Continue to {domain}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ExternalLinkModal;
