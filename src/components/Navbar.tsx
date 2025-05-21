import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { Code } from "lucide-react";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { FaCoffee } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-white bg-gray-900/80 border-b border-gray-700 backdrop-blur-lg shadow-md">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <Code className="h-6 w-6 text-white" />
          <span className="font-bold text-lg text-white">jasondavey.io</span>
        </a>

        <nav className="hidden md:flex items-center">
          {[
            {
              href: "#projects",
              label: <strong>Portfolio</strong>,
              className:
                "relative text-sm font-medium px-3 py-1 transition-colors duration-200 hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full",
            },
            {
              href: "#about",
              label: "Who Am I",
              className:
                "relative text-sm font-medium px-3 py-1 transition-colors duration-200 hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full",
            },
            {
              href: "#leadership",
              label: "Leadership",
              className:
                "relative text-sm font-medium px-3 py-1 transition-colors duration-200 hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full",
            },
            {
              href: "#skills",
              label: "Skills",
              className:
                "relative text-sm font-medium px-3 py-1 transition-colors duration-200 hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full",
            },
            {
              href: "#experience",
              label: "Experience",
              className:
                "relative text-sm font-medium px-3 py-1 transition-colors duration-200 hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full",
            },
            {
              href: "#contact",
              label: "Contact",
              className:
                "relative text-sm font-medium px-3 py-1 transition-colors duration-200 hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full",
            },
            {
              href: "https://www.buymeacoffee.com/jasondavey",
              label: <FaCoffee className="h-5 w-5" />,
              className:
                "text-yellow-400 hover:text-yellow-300 transition-colors",
              extraProps: {
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Buy me a coffee",
                title: "Chat?",
              },
            },
          ].map((item, idx, arr) => (
            <>
              {idx !== 0 && idx !== arr.length && idx !== arr.length - 1 && (
                <span
                  className="mx-2 text-gray-500 select-none"
                  style={{ alignSelf: "center", fontWeight: 200 }}
                  aria-hidden="true"
                >
                  |
                </span>
              )}
              <a
                key={item.href}
                href={item.href}
                className={item.className}
                {...(item.extraProps || {})}
              >
                {item.label}
              </a>
            </>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3 mr-2">
            <a
              href="https://github.com/jasondavey/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="GitHub"
            >
              <FaGithubSquare className="h-5 w-5 text-white hover:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/jasondavey/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5 text-white hover:text-blue-300" />
            </a>

            <a
              href="https://x.com/ydohdohdoh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="X"
            >
              <FaSquareXTwitter className="h-5 w-5 text-white hover:text-gray-300" />
            </a>
            <a
              href={`mailto:${import.meta.env.VITE_EMAIL_ADDRESS_HELLO}`}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Email"
            >
              <SiGmail className="h-5 w-5 text-white hover:text-red-300" />
            </a>
            <a href="/resume.pdf" download>
              <TbFileCv className="h-7 w-7 text-white hover:text-gray-300" />
            </a>
          </div>
        </div>

        {/* Theme toggle button */}
        <ThemeToggle />

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
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

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="fixed inset-0 z-[60] bg-gray-900/95 backdrop-blur-md flex flex-col items-center justify-start pt-24 space-y-8 md:hidden animate-fade-in"
          >
            <nav className="flex flex-col items-center w-full">
              {[
                {
                  href: "#projects",
                  label: <strong>Portfolio</strong>,
                  className:
                    "text-lg font-medium text-white hover:text-blue-400",
                },
                {
                  href: "#about",
                  label: "About",
                  className:
                    "text-lg font-medium text-white hover:text-blue-400",
                },
                {
                  href: "#leadership",
                  label: "Leadership",
                  className:
                    "text-lg font-medium text-white hover:text-blue-400",
                },
                {
                  href: "#skills",
                  label: "Skills",
                  className:
                    "text-lg font-medium text-white hover:text-blue-400",
                },
                {
                  href: "#experience",
                  label: "Experience",
                  className:
                    "text-lg font-medium text-white hover:text-blue-400",
                },
                {
                  href: "#contact",
                  label: "Contact",
                  className:
                    "text-lg font-medium text-white hover:text-blue-400",
                },
              ].map((item, idx, arr) => (
                <div key={item.href} className="flex items-center w-full">
                  {idx !== 0 &&
                    idx !== arr.length &&
                    idx !== arr.length - 1 && (
                      <span
                        className="mx-2 text-gray-500 select-none"
                        style={{ fontWeight: 200 }}
                        aria-hidden="true"
                      >
                        |
                      </span>
                    )}
                  <a
                    href={item.href}
                    className={item.className + " flex-1 text-center"}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </nav>
            <div className="flex items-center gap-4 mt-6">
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
                title="Buy me a coffee"
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <FaCoffee className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/ydohdohdoh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <FaSquareXTwitter className="h-6 w-6 text-white hover:text-gray-300" />
              </a>
              <a
                href={`mailto:${import.meta.env.VITE_EMAIL_ADDRESS_HELLO}`}
                aria-label="Email"
              >
                <SiGmail className="h-6 w-6 text-white hover:text-red-300" />
              </a>
              <a href="/resume.pdf" download>
                <TbFileCv className="h-7 w-7 text-white hover:text-gray-300" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
