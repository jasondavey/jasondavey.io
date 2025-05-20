import { FaExternalLinkAlt } from "react-icons/fa";

import React, { useState } from "react";
import { Project } from "./Project";

const getIndustryFromDescription = (
  title: string,
  description: React.ReactNode
): string => {
  // Heuristic: match keywords in title/description
  const str = `${title} ${
    typeof description === "string" ? description : ""
  }`.toLowerCase();
  if (
    str.includes("financ") ||
    str.includes("lending") ||
    str.includes("score")
  )
    return "Fintech";
  if (str.includes("video") || str.includes("caption") || str.includes("media"))
    return "Media";
  if (str.includes("health")) return "Healthcare";
  if (str.includes("ai") || str.includes("machine learning")) return "AI/ML";
  if (str.includes("education") || str.includes("learning")) return "EdTech";
  if (str.includes("logistics") || str.includes("shipping")) return "Logistics";
  return "General";
};

const IndustryBadge: React.FC<{
  title: string;
  description: React.ReactNode;
}> = ({ title, description }) => {
  const industry = getIndustryFromDescription(title, description);
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
  technologies,
  github,
  demo,
  techIconMap,
  details,
  index,
  showDemoButton = true,
  showCodeButton = true,
  companyIcon,
  companyUrl,
  keyArchitecture,
  resultsImpact,
  archImage,
}) => {
  const isEven = index % 2 === 0;

  const [archModalOpen, setArchModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "description" | "architecture" | "results"
  >("description");

  function renderTruncatedDescription(
    node: React.ReactNode,
    maxWords: number,
    wordCount = { count: 0 }
  ): React.ReactNode {
    if (typeof node === "string") {
      const words = node.split(/\s+/);
      if (wordCount.count >= maxWords) return null;
      const remaining = maxWords - wordCount.count;
      if (words.length > remaining) {
        wordCount.count = maxWords;
        return words.slice(0, remaining).join(" ") + "... ";
      } else {
        wordCount.count += words.length;
        return node + " ";
      }
    }
    if (typeof node === "number") {
      return node.toString() + " ";
    }
    if (Array.isArray(node)) {
      return node.map((child) =>
        renderTruncatedDescription(child, maxWords, wordCount)
      );
    }
    if (React.isValidElement(node)) {
      return React.cloneElement(
        node,
        node.props,
        renderTruncatedDescription(node.props.children, maxWords, wordCount)
      );
    }
    return null;
  }

  function countWords(node: React.ReactNode): number {
    if (typeof node === "string") return node.trim().split(/\s+/).length;
    if (typeof node === "number") return 1;
    if (Array.isArray(node))
      return node.reduce((sum, child) => sum + countWords(child), 0);
    if (React.isValidElement(node)) return countWords(node.props.children);
    return 0;
  }

  const techInfos = technologies
    .map((tech) => ({ tech, info: techIconMap[tech] }))
    .filter(({ info }) => !!info);

  const groups: Record<string, typeof techInfos> = {};
  techInfos.forEach(({ tech, info }) => {
    const category = info.category;
    if (!groups[category]) groups[category] = [];
    groups[category].push({ tech, info });
  });

  return (
    <>
      <div className="w-full mb-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex gap-2 mt-2 lg:mt-0">
          {demo && showDemoButton && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition"
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
        </div>
      </div>

      <div
        className={`w-full flex flex-col ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        } items-start gap-8 animate-fade-in opacity-0`}
        style={{ animationDelay: `${0.3 + index * 0.1}s` }}
      >
        {image && (
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <img
              src={image}
              alt={title}
              className="rounded-lg w-full mb-4 object-cover h-48 lg:h-80"
            />
          </div>
        )}

        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-3 text-engineering-accent font-mono text-sm mb-2">
            <span>Featured Project</span>
            {/* Industry badge */}
            <IndustryBadge title={title} description={description} />
          </div>
          <div className="flex items-center justify-between mb-2 w-full">
            <div className="flex items-center gap-2 min-w-0">
              {/* Company logo as clickable link */}
              <a
                href={companyUrl || "https://www.jasondavey.io"}
                target="_blank"
                rel="noopener noreferrer"
                title="Company Website"
              >
                <img
                  src={companyIcon || "/jdLogo.png"}
                  alt="Company Logo"
                  className="w-8 h-8 rounded-full object-cover flex-shrink-0 hover:ring-2 hover:ring-blue-400 transition"
                  style={{ minWidth: 32, minHeight: 32 }}
                />
              </a>
              <h3 className="text-2xl font-bold m-0 p-0 truncate">{title}</h3>
            </div>
            <div className="flex gap-2 ml-4">
              {github && showCodeButton && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition"
                  title="View on GitHub"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387..." />
                  </svg>
                  GitHub
                </a>
              )}
              {demo && showDemoButton && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition"
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
            </div>
          </div>

          <div className="w-full mb-2 p-4 rounded-xl border border-gray-200 bg-gray-50">
            <h4 className="text-lg font-semibold tracking-wide text-gray-800 mb-4 border-b border-gray-200 pb-1 uppercase">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-8 w-full">
              {Object.entries(groups).map(([category, items]) => (
                <div key={category} className="mb-2">
                  <div className="text-xs font-semibold text-engineering-accent mb-1 uppercase tracking-widest text-center w-full">
                    {category}
                  </div>
                  <div className="flex flex-wrap gap-2 w-full justify-center">
                    {items.map(({ tech, info }) => (
                      <a
                        key={tech}
                        href={info.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:scale-110 transition-transform"
                        title={info.icon.props.title}
                      >
                        {info.icon}
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              {technologies.filter((tech) => !techIconMap[tech]).length > 0 && (
                <div className="mb-2">
                  <div className="text-xs font-semibold text-engineering-accent mb-1 uppercase tracking-widest text-center w-full">
                    Other
                  </div>
                  <div className="flex flex-wrap gap-2 w-full justify-center">
                    {technologies
                      .filter((tech) => !techIconMap[tech])
                      .map((tech) => (
                        <span
                          key={tech}
                          className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-2 mb-4">
            <button
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                activeTab === "description"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
              onClick={() => setActiveTab("description")}
              aria-selected={activeTab === "description"}
              role="tab"
            >
              Description
            </button>
            {keyArchitecture && (
              <button
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  activeTab === "architecture"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent"
                }`}
                onClick={() => setActiveTab("architecture")}
                aria-selected={activeTab === "architecture"}
                role="tab"
              >
                Key Architecture
              </button>
            )}
            {resultsImpact && (
              <button
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
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

          <div
            className="rounded-xl bg-background p-4 transition-colors min-h-[120px] max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-engineering-accent/60 scrollbar-track-transparent"
            role="tabpanel"
          >
            {activeTab === "description" && (
              <div className="whitespace-pre-line text-foreground">
                {description}
              </div>
            )}
            {activeTab === "architecture" && keyArchitecture && (
              <div className="whitespace-pre-line text-foreground">
                {keyArchitecture}
                {details}
                <div className="flex gap-4 mt-4">
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
                </div>
              </div>
            )}
            {activeTab === "results" && resultsImpact && (
              <div className="whitespace-pre-line text-foreground">
                {resultsImpact}
              </div>
            )}
          </div>
        </div>
      </div>

      {archModalOpen && archImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          onClick={() => setArchModalOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="bg-background text-foreground rounded-xl shadow-xl border border-border max-w-3xl w-full p-6 relative transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-xl text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setArchModalOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={archImage}
              alt="Architecture Full"
              className="w-full rounded-lg mb-4"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
