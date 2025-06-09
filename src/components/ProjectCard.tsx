import { FaExternalLinkAlt, FaLink } from "react-icons/fa";

import React, { useState, useEffect } from "react";
import { Project } from "./Project";
import { Badge } from "@/components/ui/badge";
import VideoEmbed from "./VideoEmbed";

// Industry is now directly defined in each project

const IndustryBadge: React.FC<{
  industry: string;
}> = ({ industry }) => {
  return (
    <span
      className="inline-block bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full border border-blue-300 uppercase tracking-widest"
      title="Industry"
      style={{ letterSpacing: "0.05em" }}
    >
      {industry}
    </span>
  );
};

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  image,
  videoUrl,
  technologies,
  github,
  demo,
  techIconMap,
  details,
  index,
  startYear,
  endYear,
  showDemoButton = true,
  showCodeButton = true,
  companyIcon,
  darkModeCompanyIcon,
  companyUrl,
  companyName,
  resultsImpact,
  archImage,
  businessView,
  businessTerms,
  businessSplashImage,
  externalLinks,
  industry,
}) => {
  const isEven = index % 2 === 0;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [archModalOpen, setArchModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "business" | "architecture" | "results"
  >(businessView ? "business" : "architecture");
  const [linkCopied, setLinkCopied] = useState(false);

  // Function to copy the anchor URL to clipboard
  const copyLinkToClipboard = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const url = `${window.location.origin}${window.location.pathname}#project-${projectId}`;
    navigator.clipboard.writeText(url).then(() => {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    });
  };

  // Detect theme changes
  useEffect(() => {
    // Set initial theme
    const currentTheme = document.documentElement.classList.contains("dark");
    setIsDarkMode(currentTheme);

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const newTheme = document.documentElement.classList.contains("dark");
          setIsDarkMode(newTheme);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  // Determine which logo to use based on theme
  const logoToUse =
    isDarkMode && darkModeCompanyIcon ? darkModeCompanyIcon : companyIcon;

  // Determine if we should apply special styling for dark mode
  // Only apply to Versys logo
  const shouldInvertLogo =
    isDarkMode && logoToUse && logoToUse.includes("versys.com");

  const techInfos = technologies
    .map((tech) => ({ tech, info: techIconMap[tech] }))
    .filter(({ info }) => !!info);

  const groups: Record<string, typeof techInfos> = {};
  techInfos.forEach(({ tech, info }) => {
    const category = info.category;
    if (!groups[category]) groups[category] = [];
    groups[category].push({ tech, info });
  });

  // Create a URL-friendly ID from the project title
  const projectId = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <div
      id={`project-${projectId}`}
      className="my-16 first:mt-8 animate-fade-in opacity-0 scroll-mt-24"
      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
    >
      {/* Project Header with Title and External Links */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-engineering-accent font-mono text-sm mb-2">
          {/* Company Icon and Name */}
          {(companyName || companyIcon) && (
            <div className="flex items-center gap-2">
              {/* Company Icon first */}
              {companyIcon &&
                (companyUrl ? (
                  <a
                    href={companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visit Company Website"
                  >
                    <img
                      src={logoToUse}
                      alt={companyName || "Company Logo"}
                      className={`h-5 rounded-sm ${
                        shouldInvertLogo
                          ? "invert brightness-200 contrast-200"
                          : ""
                      }`}
                    />
                  </a>
                ) : (
                  <img
                    src={logoToUse}
                    alt={companyName || "Company Logo"}
                    className={`h-5 rounded-sm ${
                      shouldInvertLogo
                        ? "invert brightness-200 contrast-200"
                        : ""
                    }`}
                  />
                ))}
              {/* Company Name second */}
              {companyName && (
                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
                  {companyName}
                </span>
              )}

              {/* Project Year Range */}
              <span className="ml-auto font-mono text-xs bg-background/80 px-2 py-0.5 rounded border border-border">
                {!endYear
                  ? `${startYear}–Present`
                  : startYear !== endYear
                  ? `${startYear}–${endYear}`
                  : `${endYear}`}
              </span>
            </div>
          )}
          <IndustryBadge industry={industry} />
          <div className="ml-auto"></div>
        </div>

        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-bold text-foreground transition-colors flex items-center gap-2">
            {title}
            <button
              onClick={copyLinkToClipboard}
              className="group relative inline-flex items-center justify-center"
              title="Copy link to this project"
              aria-label="Copy link to this project"
            >
              <FaLink
                className="text-xs text-engineering-gray/50 hover:text-engineering-accent transition-colors"
                size={14}
              />
              {linkCopied && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-engineering-accent text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                  Link copied!
                </span>
              )}
            </button>
          </h3>
          <div className="flex items-center gap-3">
            {/* GitHub Link */}
            {github && showCodeButton && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="View Code"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}

            {/* Demo Link */}
            {demo && showDemoButton && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded hover:bg-blue-200 dark:hover:bg-blue-800/40 transition"
                title="View Demo"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Demo
              </a>
            )}

            {/* External Links */}
            {externalLinks &&
              externalLinks.length > 0 &&
              externalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 text-xs font-medium bg-engineering-light text-engineering-accent rounded hover:bg-engineering-light/80 transition"
                  title={link.label}
                >
                  {link.label}
                  <FaExternalLinkAlt className="ml-2" size={10} />
                </a>
              ))}
          </div>
        </div>
      </div>

      {/* Main Content with Image/Video and Details */}
      <div
        className={`w-full flex flex-col ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        } items-start gap-8`}
      >
        {/* Project Image and/or Video */}
        {(image || videoUrl) && (
          <div className="flex-1 rounded-lg overflow-hidden flex flex-col gap-4">
            {/* Image (if exists) */}
            {image && (
              <img
                src={image}
                alt={title}
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            )}

            {/* Video (if exists) */}
            {videoUrl && (
              <VideoEmbed videoUrl={videoUrl} className="w-full shadow-md" />
            )}
          </div>
        )}

        {/* Project Details */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Technologies */}
          <div>
            <h4 className="text-xs uppercase tracking-wide text-muted-foreground mb-3 font-semibold">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {technologies.map((tech) => {
                const techInfo = techIconMap[tech];
                const TechBadge = (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs bg-engineering-light text-engineering-accent border border-engineering-light/50 hover:bg-engineering-light/80 transition-colors"
                    title={tech}
                  >
                    {tech}
                  </Badge>
                );

                return techInfo?.url ? (
                  <a
                    key={tech}
                    href={techInfo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Learn more about ${tech}`}
                  >
                    {TechBadge}
                  </a>
                ) : (
                  TechBadge
                );
              })}
            </div>
          </div>

          {/* Business Terms (if available) */}
          {businessTerms && businessTerms.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-wide text-muted-foreground mb-3 font-semibold">
                Business Terms
              </h4>
              <div className="flex flex-wrap gap-2">
                {businessTerms.map((term) => (
                  <span
                    key={term}
                    className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded text-xs"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tab Navigation */}
          <div className="pt-2">
            <div className="w-full grid grid-cols-1 rounded-full overflow-hidden border border-border">
              <div
                className={`w-full grid ${
                  businessView && resultsImpact
                    ? "grid-cols-3"
                    : businessView || resultsImpact
                    ? "grid-cols-2"
                    : "grid-cols-1"
                }`}
              >
                {businessView && (
                  <button
                    className={`py-3 font-medium transition-colors flex items-center justify-center ${
                      activeTab === "business"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-accent"
                    }`}
                    onClick={() => setActiveTab("business")}
                    aria-selected={activeTab === "business"}
                    role="tab"
                  >
                    Business View
                  </button>
                )}
                <button
                  className={`py-3 font-medium transition-colors flex items-center justify-center ${
                    activeTab === "architecture"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-accent"
                  }`}
                  onClick={() => setActiveTab("architecture")}
                  aria-selected={activeTab === "architecture"}
                  role="tab"
                >
                  Architecture
                </button>
                {resultsImpact && (
                  <button
                    className={`py-3 font-medium transition-colors flex items-center justify-center ${
                      activeTab === "results"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-accent"
                    }`}
                    onClick={() => setActiveTab("results")}
                    aria-selected={activeTab === "results"}
                    role="tab"
                  >
                    Results & Impact
                  </button>
                )}
              </div>
            </div>

            {/* Tab Content */}
            <div
              className="w-full mt-4 rounded-xl bg-background p-6 border border-border transition-colors min-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-engineering-accent/60 scrollbar-track-transparent"
              role="tabpanel"
            >
              {activeTab === "business" && (
                <div className="whitespace-pre-line text-foreground leading-relaxed">
                  {/* Handle business splash image */}
                  {businessSplashImage && (
                    <div className="mb-6">
                      <img
                        src={businessSplashImage}
                        alt={`${title} - Splash Image`}
                        className="w-full rounded-lg border border-border shadow-md"
                      />
                    </div>
                  )}
                  {/* Render business view content */}
                  {businessView}

                  {/* Show external links */}
                  {externalLinks && externalLinks.length > 0 && (
                    <div className="flex flex-wrap gap-4 mt-6">
                      {externalLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-engineering-light text-engineering-accent rounded hover:bg-engineering-light/80 transition"
                        >
                          {link.label}{" "}
                          <FaExternalLinkAlt className="ml-2" size={12} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
              {activeTab === "architecture" && (
                <div className="whitespace-pre-line text-foreground dark:text-gray-200 leading-relaxed">
                  {archImage && (
                    <div
                      className="mb-4 cursor-pointer"
                      onClick={() => setArchModalOpen(true)}
                    >
                      <img
                        src={archImage}
                        alt="Architecture Diagram"
                        className="w-1/2 rounded-lg border border-border hover:opacity-90 transition-opacity"
                        title="Click to view full architecture diagram"
                      />
                    </div>
                  )}
                  {description}
                  {details && <div className="mt-4 dark:text-gray-200">{details}</div>}

                  {/* Show demo button and external links inside Architecture tab */}
                  {(showDemoButton && demo) ||
                  (externalLinks && externalLinks.length > 0) ? (
                    <div className="flex flex-wrap gap-4 mt-6">
                      {showDemoButton && demo && (
                        <a
                          href={demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-engineering-accent text-white rounded hover:bg-green-600 transition"
                        >
                          Demo <FaExternalLinkAlt className="ml-2" />
                        </a>
                      )}

                      {externalLinks &&
                        externalLinks.length > 0 &&
                        externalLinks.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-engineering-light text-engineering-accent rounded hover:bg-engineering-light/80 transition"
                          >
                            {link.label}{" "}
                            <FaExternalLinkAlt className="ml-2" size={12} />
                          </a>
                        ))}
                    </div>
                  ) : null}
                </div>
              )}
              {activeTab === "results" && resultsImpact && (
                <div className="whitespace-pre-line text-foreground dark:text-gray-200 leading-relaxed">
                  {resultsImpact}

                  {/* Show external links */}
                  {externalLinks && externalLinks.length > 0 && (
                    <div className="flex flex-wrap gap-4 mt-6">
                      {externalLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-engineering-light text-engineering-accent rounded hover:bg-engineering-light/80 transition"
                        >
                          {link.label}{" "}
                          <FaExternalLinkAlt className="ml-2" size={12} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Image Modal */}
      {archModalOpen && archImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setArchModalOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="bg-background text-foreground rounded-xl shadow-xl border border-border max-w-4xl w-full p-6 relative transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-xl text-muted-foreground hover:text-foreground transition-colors bg-background/80 w-8 h-8 rounded-full flex items-center justify-center"
              onClick={() => setArchModalOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={archImage}
              alt="Architecture Diagram"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
