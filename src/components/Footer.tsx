// Dynamically import BUILD_TIMESTAMP with fallback
import { useEffect, useState } from "react";
import StackSection from "./StackSection";
import CarbonBadge from "./CarbonBadge";
import ReadmeModal from "./ReadmeModal";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [buildTimestamp, setBuildTimestamp] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [readmeOpen, setReadmeOpen] = useState(false);

  // Detect theme changes
  useEffect(() => {
    // Set initial theme
    const currentTheme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    setTheme(currentTheme);

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const newTheme = document.documentElement.classList.contains("dark")
            ? "dark"
            : "light";
          setTheme(newTheme);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    import("../build-info")
      .then((mod) => setBuildTimestamp(mod.BUILD_TIMESTAMP))
      .catch(() => setBuildTimestamp(null)); // fallback if module doesn't exist
  }, []);

  return (
    <footer className="bg-background text-foreground py-12 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6"></div>
        <StackSection />
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Jason Davey. All rights reserved.</p>
          <p className="mt-2">
            Designed & Built with React, TypeScript & Tailwind CSS
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button 
              variant="link" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              onClick={() => setReadmeOpen(true)}
            >
              <FileText size={14} />
              <span>View Technical Documentation</span>
            </Button>
            <CarbonBadge darkMode={theme === "dark"} />
          </div>
          
          {/* README Modal */}
          <ReadmeModal open={readmeOpen} onOpenChange={setReadmeOpen} />
        </div>
        <div className="mt-4 text-xs text-muted-foreground text-center">
          Last built:{" "}
          {buildTimestamp
            ? new Date(buildTimestamp).toLocaleString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
              })
            : "N/A"}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
