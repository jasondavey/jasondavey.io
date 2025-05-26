import { useState, useEffect } from "react";
import { marked } from "marked";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

// Configure marked options for better formatting
marked.setOptions({
  breaks: true,      // Add line breaks
  gfm: true,         // GitHub Flavored Markdown
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
  const [readmeContent, setReadmeContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[80%] md:max-w-[70%] max-h-[90vh] h-[90vh] p-6 flex flex-col overflow-hidden">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="text-2xl">Project Documentation</DialogTitle>
          <DialogDescription>
            Technical details and specifications for jasondavey.io
          </DialogDescription>
        </DialogHeader>
        
        {isLoading ? (
          <div className="flex-1 flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <ScrollArea className="flex-1 -mx-6 px-6 py-4">
            <div 
              className="prose prose-headings:mt-6 prose-headings:mb-3 prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
                prose-p:my-3 prose-li:my-1 prose-ul:my-3 prose-ol:my-3 prose-pre:my-4 prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-hr:my-5 md:prose-base dark:prose-invert max-w-none pb-4"
              dangerouslySetInnerHTML={{ 
                __html: enhanceMarkdown(marked.parse(readmeContent) as string)
              }}
            />
          </ScrollArea>
        )}
        
        <div className="flex justify-end pt-4 mt-2 border-t border-border flex-shrink-0">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReadmeModal;
