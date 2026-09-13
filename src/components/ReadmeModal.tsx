import { useState, useEffect, useRef } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
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
import CarbonBadge from "./CarbonBadge";
import CarbonInfoContent from "./CarbonInfoContent";

// Configure marked options for better formatting
marked.setOptions({
  breaks: true, // Add line breaks
  gfm: true, // GitHub Flavored Markdown
});

// Function to enhance the rendered markdown with additional styling
const enhanceMarkdown = (html: string): string => {
  return html
    .replace(/<h2/g, '<h2 class="border-b border-border pb-1 mb-3 mt-8"')
    .replace(/<h1/g, '<h1 class="border-b-2 border-primary/30 pb-2 mb-6 mt-2"')
    .replace(/<ul>/g, '<ul class="my-3 ml-6">')
    .replace(/<ol>/g, '<ol class="my-3 ml-6">')
    .replace(/<pre>/g, '<pre class="bg-muted/50 p-3 rounded-md overflow-auto">')
    .replace(/<code>/g, '<code class="text-sm">')
    .replace(/<p>/g, '<p class="my-3">');
};

interface ReadmeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ReadmeModal = ({ open, onOpenChange }: ReadmeModalProps) => {
  const theme = useTheme();
  const [readmeContent, setReadmeContent] = useState<string>("");
  const [carbonExpanded, setCarbonExpanded] = useState(false);
  const carbonPanelRef = useRef<HTMLDivElement>(null);
  // isLoading is derived: we're loading whenever the modal is open and
  // the content slot is still empty.
  const isLoading = open && readmeContent === "";

  // The panel renders inside the scrollable README area, below whatever the
  // reader currently has scrolled to — without this it can expand entirely
  // off-screen and look like the click did nothing.
  useEffect(() => {
    if (carbonExpanded) {
      carbonPanelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [carbonExpanded]);

  useEffect(() => {
    if (!open || readmeContent !== "") return;
    fetch("/README.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch README");
        }
        return response.text();
      })
      .then((content) => {
        setReadmeContent(content);
      })
      .catch((error) => {
        console.error("Error fetching README:", error);
        setReadmeContent("Failed to load README content. Please try again later.");
      });
  }, [open, readmeContent]);

  return (
    <Dialog
      open={open}
      onClose={() => onOpenChange(false)}
      maxWidth="md"
      fullWidth
      slotProps={{ paper: { sx: { height: "90vh" } } }}
    >
      <DialogTitle
        sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}
      >
        <Box>
          <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
            Project Documentation
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Technical details and specifications for jasondavey.io
          </Typography>
        </Box>
        <IconButton
          aria-label="close"
          onClick={() => onOpenChange(false)}
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

      {isLoading ? (
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              border: `4px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              borderBottomColor: theme.palette.primary.main,
              animation: "spin 1s linear infinite",
              "@keyframes spin": { to: { transform: "rotate(360deg)" } },
            }}
          />
        </Box>
      ) : (
        <DialogContent dividers sx={{ flex: 1, overflowY: "auto" }}>
          <div
            className="prose text-gray-900 dark:text-gray-100 prose-headings:mt-6 prose-headings:mb-3 prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
              prose-p:my-3 prose-li:my-1 prose-ul:my-3 prose-ol:my-3 prose-pre:my-4
              prose-code:bg-gray-100 prose-code:text-gray-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              dark:prose-code:bg-gray-800 dark:prose-code:text-gray-100
              prose-a:text-blue-600 dark:prose-a:text-blue-400
              prose-hr:my-5 md:prose-base dark:prose-invert max-w-none pb-4 transition-colors duration-300"
            dangerouslySetInnerHTML={{
              __html: enhanceMarkdown(DOMPurify.sanitize(marked.parse(readmeContent) as string)),
            }}
          />

          {carbonExpanded && (
            <Box ref={carbonPanelRef} sx={{ mt: 3, pt: 3, borderTop: 1, borderColor: "divider" }}>
              <CarbonInfoContent />
            </Box>
          )}
        </DialogContent>
      )}

      <DialogActions sx={{ px: 3, py: 2, justifyContent: "space-between" }}>
        <CarbonBadge
          darkMode={theme.palette.mode === "dark"}
          expanded={carbonExpanded}
          onClick={() => setCarbonExpanded((v) => !v)}
        />
        <Button
          variant="outlined"
          onClick={() => onOpenChange(false)}
          sx={{ textTransform: "none", fontWeight: 600, borderRadius: "20px" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReadmeModal;
