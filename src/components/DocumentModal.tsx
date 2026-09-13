import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  IconButton,
  useTheme,
  alpha,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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
    const link = document.createElement("a");
    link.href = documentUrl;
    link.download = documentType === "resume" ? "JasonDaveyResume.pdf" : "JasonDaveyPatent.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      slotProps={{ paper: { sx: { height: "80vh" } } }}
    >
      <DialogTitle
        sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {documentType === "resume" ? (
            <ArticleIcon color="primary" />
          ) : (
            <DescriptionIcon color="primary" />
          )}
          <Typography variant="h6" component="span" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
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

      <DialogContent sx={{ display: "flex", flexDirection: "column", overflow: "hidden", pb: 2 }}>
        <Box sx={{ flexGrow: 1, position: "relative" }}>
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
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2, gap: 1 }}>
        <Typography variant="body2" sx={{ color: "text.secondary", flexGrow: 1 }}>
          You can view and download this document for your reference.
        </Typography>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{ textTransform: "none", fontWeight: 600, borderRadius: "20px" }}
        >
          Close
        </Button>
        <Button
          onClick={handleDownload}
          variant="contained"
          color="primary"
          startIcon={<DownloadIcon />}
          sx={{ textTransform: "none", fontWeight: 600, borderRadius: "20px" }}
        >
          Download {documentType === "resume" ? "Resume" : "Patent"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DocumentModal;
