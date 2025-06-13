import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { Code, Globe } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { TbFileCv, TbCertificate } from "react-icons/tb";
import { FaCoffee } from "react-icons/fa";
import ReadmeModal from "./ReadmeModal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [readmeOpen, setReadmeOpen] = useState(false);

  // Function to handle smooth scrolling with consistent speed
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();

    // Only proceed if it's a hash link (internal page navigation)
    if (targetId.startsWith("#")) {
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Close mobile menu if open
        if (menuOpen) {
          closeMenu();
        }

        // Get the target position
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.scrollY;
        // Get the current scroll position
        const startPosition = window.scrollY;
        // Calculate distance
        const distance = targetPosition - startPosition;

        // Speed in pixels per millisecond (adjust as needed)
        const speed = 0.5;
        // Calculate duration based on distance and speed
        const duration = Math.abs(distance / speed);
        // Cap duration to provide minimum and maximum scroll times
        const cappedDuration = Math.max(500, Math.min(duration, 2000));

        // Start time
        let startTime: number | null = null;

        // Animation function
        function animation(currentTime: number) {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / cappedDuration, 1);

          // Easing function for smoother start/stop
          const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

          window.scrollTo(0, startPosition + distance * ease(progress));

          if (timeElapsed < cappedDuration) {
            requestAnimationFrame(animation);
          } else {
            // Update URL hash without causing a jump
            window.history.pushState(null, "", targetId);
          }
        }

        requestAnimationFrame(animation);
      }
    }
  };

  // No need for CSS smooth scrolling as we're using a custom implementation
  // This useEffect can be removed or kept empty
  useEffect(() => {
    // We're using our custom smooth scroll implementation instead

    return () => {
      // Clean up if needed
    };
  }, []);

  // Handle scroll events to update navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 80;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Prevent body scrolling when menu is open and set viewport height for iOS
  useEffect(() => {
    // Fix for iOS viewport height issue
    const setVh = () => {
      // First we get the viewport height and we multiply it by 1% to get a value for a vh unit
      const vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Call the function to set --vh on mount
    setVh();

    // Add event listener for window resize
    window.addEventListener("resize", setVh);

    // Handle body scrolling
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      window.removeEventListener("resize", setVh);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Navigation links
  const navLinks = [
    { href: "#projects", label: "Portfolio" },
    { href: "#about", label: "Who Am I" },
    { href: "#leadership", label: "Leadership" },
    { href: "#technical-skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Inquire" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-white ${
        scrolled
          ? "bg-gray-900/95 border-b border-gray-700 backdrop-blur-lg shadow-md"
          : "bg-gray-900/40 backdrop-blur-sm py-2"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex items-center gap-2"
            onClick={(e) => handleSmoothScroll(e, "#")}
          >
            <Code className="h-6 w-6 text-white" />
            <span className="font-bold text-lg text-white">jasondavey.io</span>
          </a>
          <button
            onClick={() => setReadmeOpen(true)}
            aria-label="Technical Documentation"
            title="Click here to find out how this website was built"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Globe className="h-5 w-5" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-0">
          {navLinks.map((link, index) => (
            <div key={link.href} className="flex items-center">
              <a
                href={link.href}
                className="relative text-sm font-medium px-3 py-2 transition-colors duration-200 hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {link.label}
              </a>
              {index < navLinks.length - 1 && (
                <span className="text-gray-500 text-opacity-50 text-sm mx-0.5">
                  |
                </span>
              )}
            </div>
          ))}
          <a
            href="https://www.buymeacoffee.com/jasondavey"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Buy me a coffee"
            title="Cappuccino for a chat"
            className="text-yellow-400 hover:text-yellow-300 transition-colors ml-2"
          >
            <FaCoffee className="h-5 w-5" />
          </a>
        </nav>

        {/* Desktop Social Links */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/jasondavey/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithubSquare className="h-5 w-5 text-white hover:text-gray-300 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/jasondavey/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5 text-white hover:text-blue-300 transition-colors" />
          </a>

          <a
            href={`mailto:${import.meta.env.VITE_EMAIL_ADDRESS_HELLO}`}
            aria-label="Email"
          >
            <SiGmail className="h-5 w-5 text-white hover:text-red-300 transition-colors" />
          </a>
          <a href="/jasonrdavey.pdf" download title="Download Resume">
            <TbFileCv className="h-6 w-6 text-white hover:text-gray-300 transition-colors" />
          </a>
          <a
            href="/JasonDaveyPatent.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="View Patent"
          >
            <TbCertificate className="h-6 w-6 text-white hover:text-gray-300 transition-colors" />
          </a>

          {/* Theme toggle */}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="ml-1"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
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
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ height: "calc(var(--vh, 1vh) * 100)" }}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          onClick={closeMenu}
          aria-hidden="true"
          style={{ height: "calc(var(--vh, 1vh) * 100)" }}
        />

        {/* Slide-in Menu Panel */}
        <div
          className={`fixed right-0 top-0 bottom-0 w-[280px] bg-gray-900 shadow-xl flex flex-col overflow-y-auto transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            height: "calc(var(--vh, 1vh) * 100)",
            maxHeight: "calc(var(--vh, 1vh) * 100)",
          }}
        >
          {/* Mobile Menu Content */}
          <div
            className="p-6 flex flex-col h-full"
            style={{ minHeight: "calc(var(--vh, 1vh) * 100 - 48px)" }}
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="flex items-center gap-2"
                  onClick={(e) => handleSmoothScroll(e, "#")}
                >
                  <Code className="h-6 w-6 text-white" />
                  <span className="font-bold text-lg text-white">
                    jasondavey.io
                  </span>
                </a>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setReadmeOpen(true);
                    closeMenu();
                  }}
                  aria-label="Technical Documentation"
                  title="Technical Documentation"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Globe className="h-5 w-5" />
                </button>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMenu}
                aria-label="Close menu"
                className="text-white hover:bg-gray-800 rounded-full p-2"
              >
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
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </Button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex-1">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block py-3 px-4 text-lg font-medium text-white hover:bg-gray-800 rounded-md transition-colors"
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Social Links */}
            <div className="mt-auto pt-6 border-t border-gray-800">
              <div className="flex justify-center items-center gap-6 py-4">
                <a
                  href="https://github.com/jasondavey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithubSquare className="h-6 w-6 text-white hover:text-gray-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jasondavey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-6 w-6 text-white hover:text-blue-300" />
                </a>
                <a
                  href="https://www.buymeacoffee.com/jasondavey"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Buy me a coffee"
                  className="text-yellow-400 hover:text-yellow-300"
                >
                  <FaCoffee className="h-6 w-6" />
                </a>


                <a
                  href={`mailto:${import.meta.env.VITE_EMAIL_ADDRESS_HELLO}`}
                  aria-label="Email"
                >
                  <SiGmail className="h-6 w-6 text-white hover:text-red-300" />
                </a>
                <a
                  href="/jasonrdavey.pdf"
                  download
                  aria-label="Download Resume"
                >
                  <TbFileCv className="h-6 w-6 text-white hover:text-gray-300" />
                </a>
                <a
                  href="/JasonDaveyPatent.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Patent"
                >
                  <TbCertificate className="h-6 w-6 text-white hover:text-gray-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Documentation Modal */}
      <ReadmeModal open={readmeOpen} onOpenChange={setReadmeOpen} />
    </header>
  );
};

export default Navbar;
