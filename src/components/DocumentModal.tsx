import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useThemeContext } from "@/theme";
import { Box, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import DownloadIcon from "@mui/icons-material/Download";
import DescriptionIcon from "@mui/icons-material/Description";
import ArticleIcon from "@mui/icons-material/Article";

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentUrl: string;
  title: string;
  documentType: 'resume' | 'patent';
}

const DocumentModal: React.FC<DocumentModalProps> = ({
  isOpen,
  onClose,
  documentUrl,
  title,
  documentType,
}) => {
  const { mode } = useThemeContext();
  const theme = useTheme();

  const handleDownload = () => {
    // Create an anchor element and trigger download
    const link = document.createElement('a');
    link.href = documentUrl;
    link.download = documentType === 'resume' ? 'JasonDaveyResume.pdf' : 'JasonDaveyPatent.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] md:max-w-[850px] h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl gap-2">
            {documentType === 'resume' ? 
              <ArticleIcon color="primary" /> : 
              <DescriptionIcon color="primary" />
            }
            <span>{title}</span>
          </DialogTitle>
        </DialogHeader>

        <Box className="flex-grow overflow-hidden relative">
          {/* Document preview */}
          <Box 
            component="iframe"
            src={`${documentUrl}#toolbar=0`}
            sx={{
              width: '100%',
              height: '100%',
              border: 'none',
              backgroundColor: alpha(theme.palette.background.paper, 0.5),
              borderRadius: 1
            }}
            title={title}
          />
        </Box>

        <DialogFooter className="mt-4 gap-2 flex-row">
          <Typography variant="body2" sx={{ color: 'text.secondary', flexGrow: 1 }}>
            You can view and download this document for your reference.
          </Typography>
          <Button 
            onClick={onClose} 
            variant="outline" 
            className="mr-2"
          >
            Close
          </Button>
          <Button 
            onClick={handleDownload} 
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          >
            <DownloadIcon className="h-4 w-4" />
            Download {documentType === 'resume' ? 'Resume' : 'Patent'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DocumentModal;
