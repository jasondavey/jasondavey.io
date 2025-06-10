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
      <DialogContent className="sm:max-w-[550px] md:max-w-[600px] overflow-hidden border-opacity-70 shadow-lg bg-background">
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
              bgcolor: mode === 'dark' ? alpha(theme.palette.background.paper, 0.8) : alpha(theme.palette.background.paper, 0.8),
              border: `1px solid ${alpha(theme.palette.divider, mode === 'dark' ? 0.3 : 0.1)}`,
              mb: 4,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              boxShadow: mode === 'dark' ? `0 4px 12px ${alpha(theme.palette.common.black, 0.5)}` : theme.shadows[3]
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
                bgcolor: mode === 'dark' ? alpha(theme.palette.background.default, 0.7) : alpha(theme.palette.background.default, 0.6),
                border: `1px solid ${alpha(theme.palette.divider, mode === 'dark' ? 0.2 : 0.05)}`
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
                  color: mode === 'dark' ? 'text.primary' : 'text.primary',
                  opacity: mode === 'dark' ? 0.9 : 1
                }}
              >
                {domain}
              </Typography>
            </Box>
          </Box>

          <Box 
            sx={{ 
              bgcolor: mode === 'dark' ? alpha(theme.palette.background.paper, 0.5) : alpha(theme.palette.info.main, 0.04),
              p: 3, 
              borderRadius: 2, 
              mb: 2,
              border: `1px solid ${alpha(mode === 'dark' ? theme.palette.primary.main : theme.palette.info.main, mode === 'dark' ? 0.3 : 0.1)}`,
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
                  bgcolor: mode === 'dark' ? alpha(theme.palette.primary.main, 0.2) : alpha(theme.palette.info.main, 0.08)
                }}
              >
                <PublicIcon fontSize="small" color="primary" />
              </Box>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontWeight: 600,
                  color: mode === 'dark' ? 'primary.light' : 'info.main'
                }}
              >
                Security Notice
              </Typography>
            </Box>
            <Typography 
              variant="body2" 
              sx={{ 
                color: mode === 'dark' ? 'text.primary' : 'text.secondary',
                lineHeight: 1.6,
                fontWeight: mode === 'dark' ? 400 : 400
              }}
            >
              You're about to leave Jason Davey's portfolio website and visit an external site. 
              External sites are not under my control and may have different privacy and security policies.
            </Typography>
          </Box>
        </Box>

        <DialogFooter>
          <Button 
            onClick={onClose} 
            className="mr-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleVisit} 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
          >
            <OpenInNewIcon className="mr-2 h-4 w-4" /> Continue to {domain}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ExternalLinkModal;
