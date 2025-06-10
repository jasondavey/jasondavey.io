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
      <DialogContent 
        style={{ zIndex: 9999 }} 
        className="sm:max-w-[80%] md:max-w-[70%] max-h-[90vh] h-[90vh] p-6 flex flex-col overflow-hidden bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-800 dark:shadow-xl"
      >
        {/* Close button overlay */}
        <div className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 cursor-pointer" onClick={() => onOpenChange(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="text-2xl text-gray-900 dark:text-white">Project Documentation</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-300">
            Technical details and specifications for jasondavey.io
          </DialogDescription>
        </DialogHeader>
        
        {isLoading ? (
          <div className="flex-1 flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary dark:border-primary/70"></div>
          </div>
        ) : (
          <ScrollArea className="flex-1 -mx-6 px-6 py-4">
            <div 
              className="prose text-gray-900 dark:text-gray-100 prose-headings:mt-6 prose-headings:mb-3 prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
                prose-p:my-3 prose-li:my-1 prose-ul:my-3 prose-ol:my-3 prose-pre:my-4 
                prose-code:bg-gray-100 prose-code:text-gray-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                dark:prose-code:bg-gray-800 dark:prose-code:text-gray-100
                prose-a:text-blue-600 dark:prose-a:text-blue-400
                prose-hr:my-5 md:prose-base dark:prose-invert max-w-none pb-4 transition-colors duration-300"
              dangerouslySetInnerHTML={{ 
                __html: enhanceMarkdown(marked.parse(readmeContent) as string)
              }}
            />
          </ScrollArea>
        )}
        
        <div className="flex justify-end pt-4 mt-2 border-t border-gray-200 dark:border-gray-700 flex-shrink-0 transition-colors duration-300">
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)}
            className="bg-white text-gray-800 border-gray-200 hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReadmeModal;
