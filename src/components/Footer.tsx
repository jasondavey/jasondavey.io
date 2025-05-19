import { Code } from "lucide-react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
// Dynamically import BUILD_TIMESTAMP with fallback
import React, { useEffect, useState } from "react";
import StackSection from "./StackSection";
import { TbFileCv } from "react-icons/tb";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [buildTimestamp, setBuildTimestamp] = useState<string | null>(null);

  useEffect(() => {
    import("../build-info")
      .then((mod) => setBuildTimestamp(mod.BUILD_TIMESTAMP))
      .catch(() => setBuildTimestamp(null)); // fallback if module doesn't exist
  }, []);

  return (
    <footer className="bg-background text-foreground py-12 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-engineering-accent" />
            <span className="font-bold">jasondavey.io</span>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/jasondavey/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-engineering-accent transition-colors"
              aria-label="GitHub"
            >
              <FaGithubSquare className="h-5 w-5 text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/jasondavey/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-engineering-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5 text-foreground" />
            </a>
            <a
              href="https://x.com/ydohdohdoh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-engineering-accent transition-colors"
              aria-label="X"
            >
              <FaSquareXTwitter className="h-5 w-5 text-foreground" />
            </a>
            <a
              href="mailto:jasonrdavey@gmail.com"
              className="text-gray-200 hover:text-engineering-accent transition-colors"
              aria-label="Email"
            >
              <SiGmail className="h-5 w-5 text-foreground" />
            </a>
            <a href="/resume.pdf" download>
              <TbFileCv className="h-5 w-5 text-foreground" />
            </a>
          </div>
        </div>
        <StackSection />
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Jason Davey. All rights reserved.</p>
          <p className="mt-2">
            Designed & Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
        <div className="mt-4 text-xs text-muted-foreground text-center">
          Last built:{" "}
          {buildTimestamp
            ? new Date(buildTimestamp).toLocaleString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })
            : "N/A"}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
