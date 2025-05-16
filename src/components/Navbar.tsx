import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Code,
  DownloadIcon,
  Github,
  Linkedin,
  Mail,
  XIcon,
} from "lucide-react";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <Code className="h-6 w-6 text-engineering-accent" />
          <span className="font-bold text-lg">jasondavey.io</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#stack"
            className="text-sm font-medium hover:text-engineering-accent hover:bg-engineering-accent/10 transition-colors rounded px-2 py-1"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-sm font-medium hover:text-engineering-accent hover:bg-engineering-accent/10 transition-colors rounded px-2 py-1"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-sm font-medium hover:text-engineering-accent hover:bg-engineering-accent/10 transition-colors rounded px-2 py-1"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-sm font-medium hover:text-engineering-accent hover:bg-engineering-accent/10 transition-colors rounded px-2 py-1"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-engineering-accent hover:bg-engineering-accent/10 transition-colors rounded px-2 py-1"
          >
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3 mr-2">
            <a
              href="https://github.com/jasondavey/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-engineering-accent transition-colors"
              aria-label="GitHub"
            >
              <FaGithubSquare className="h-5 w-5" color="black" />
            </a>
            <a
              href="https://www.linkedin.com/in/jasondavey/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-engineering-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" color="blue" />
            </a>
            <a
              href="https://x.com/ydohdohdoh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-engineering-accent transition-colors"
              aria-label="X"
            >
              <FaSquareXTwitter className="h-5 w-5" color="black" />
            </a>
            <a
              href="mailto:jasonrdavey@gmail.com"
              className="text-gray-600 hover:text-engineering-accent transition-colors"
              aria-label="Email"
            >
              <SiGmail className="h-5 w-5" color="red" />
            </a>
            <a href="/resume.pdf" download>
              <TbFileCv className="h-7 w-7" />
            </a>
          </div>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden">
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
