import { Code, Github, Linkedin, Mail, XIcon } from "lucide-react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BUILD_TIMESTAMP } from "../build-info";
import StackSection from "./StackSection";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-engineering-dark text-white py-12">
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
              className="text-sm text-gray-300 hover:text-engineering-accent transition-colors flex items-center gap-1"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jasondavey/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-engineering-accent transition-colors flex items-center gap-1"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="https://x.com/ydohdohdoh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-engineering-accent transition-colors flex items-center gap-1"
            >
              <FaSquareXTwitter className="h-4 w-4" />
            </a>
            <a
              href="mailto:jasonrdavey@gmail.com"
              className="text-sm text-gray-300 hover:text-engineering-accent transition-colors flex items-center gap-1"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>
        <StackSection />
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Jason Davey. All rights reserved.</p>
          <p className="mt-2">
            Designed & Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
        <div className="mt-4 text-xs text-gray-500 text-center">
          Last built:{" "}
          {new Date(BUILD_TIMESTAMP).toLocaleString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
