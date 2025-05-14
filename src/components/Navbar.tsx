
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Code, FileText } from "lucide-react";

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
          <span className="font-bold text-lg">Portfolio</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-medium hover:text-engineering-accent transition-colors">
            About
          </a>
          <a href="#skills" className="text-sm font-medium hover:text-engineering-accent transition-colors">
            Skills
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-engineering-accent transition-colors">
            Projects
          </a>
          <a href="#experience" className="text-sm font-medium hover:text-engineering-accent transition-colors">
            Experience
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-engineering-accent transition-colors">
            Contact
          </a>
        </nav>
        
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="hidden md:flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Resumé
          </Button>
        </a>

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
