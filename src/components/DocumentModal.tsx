import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Box, Button as MuiButton, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import DownloadIcon from "@mui/icons-material/Download";
import DescriptionIcon from "@mui/icons-material/Description";
import ArticleIcon from "@mui/icons-material/Article";

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentUrl: string;
  title: string;
  documentType: "resume" | "patent";
}

const DocumentModal: React.FC<DocumentModalProps> = ({
  isOpen,
  onClose,
  documentUrl,
  title,
  documentType,
}) => {
  const theme = useTheme();

  const handleDownload = () => {
    // Create an anchor element and trigger download
    const link = document.createElement("a");
    link.href = documentUrl;
    link.download = documentType === "resume" ? "JasonDaveyResume.pdf" : "JasonDaveyPatent.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] md:max-w-[850px] h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl gap-2">
            {documentType === "resume" ? (
              <ArticleIcon color="primary" />
            ) : (
              <DescriptionIcon color="primary" />
            )}
            <span>{title}</span>
          </DialogTitle>
        </DialogHeader>

        <Box className="flex-grow overflow-hidden relative">
          {/* Document preview */}
          <Box
            component="iframe"
            src={documentUrl}
            sx={{
              width: "100%",
              height: "100%",
              border: "none",
              backgroundColor: alpha(theme.palette.background.paper, 0.5),
              borderRadius: 1,
            }}
            title={title}
          />
        </Box>

        <DialogFooter className="mt-4 gap-2 flex-row">
          <Typography variant="body2" sx={{ color: "text.secondary", flexGrow: 1 }}>
            You can view and download this document for your reference.
          </Typography>
          <Button onClick={onClose} variant="outline" className="mr-2">
            Close
          </Button>
          <MuiButton
            onClick={handleDownload}
            variant="contained"
            color="primary"
            startIcon={<DownloadIcon />}
            sx={{ textTransform: "none", fontWeight: 600, borderRadius: "20px" }}
          >
            Download {documentType === "resume" ? "Resume" : "Patent"}
          </MuiButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DocumentModal;
