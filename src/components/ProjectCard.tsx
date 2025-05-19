import { FaExternalLinkAlt } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  description: React.ReactNode;
  image?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  techIconMap: Record<
    string,
    {
      category: string;
      icon: JSX.Element;
      url: string;
    }
  >;
  details?: React.ReactNode;
  index: number;
  showDemoButton?: boolean;
  showCodeButton?: boolean;
  companyIcon?: string;
}

import React, { useState } from "react";

const ProjectCard: React.FC<ProjectCardProps> = ({
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
}) => {
  // idx starts at 1 in Projects.tsx
  const isEven = index % 2 === 0;
  const [modalOpen, setModalOpen] = useState(false);

  // Helper to count and render up to a max number of words, preserving paragraphs
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
      return node.map((child, idx) =>
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

  // Helper to count total words in the description
  function countWords(node: React.ReactNode): number {
    if (typeof node === "string") return node.trim().split(/\s+/).length;
    if (typeof node === "number") return 1;
    if (Array.isArray(node))
      return node.reduce((sum, child) => sum + countWords(child), 0);
    if (React.isValidElement(node)) return countWords(node.props.children);
    return 0;
  }

  const totalWords = countWords(description);
  const isTruncated = totalWords > 25;
  const truncatedDescription = renderTruncatedDescription(description, 25);

  return (
    <>
      {/* Tech icons and related links below title, spanning both columns */}
      <div className="w-full mb-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Related links (GitHub, Demo) */}
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
        {/* IMAGE SECTION */}
        {image && (
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <img
              src={image}
              alt={title}
              className="rounded-lg w-full mb-4 object-cover h-48 lg:h-80"
            />
          </div>
        )}

        {/* CONTENT SECTION */}
        <div className="w-full lg:w-1/2">
          <div className="text-engineering-accent font-mono text-sm mb-2">
            Featured Project
          </div>
          <div className="flex items-center justify-between mb-2 w-full">
            <div className="flex items-center gap-2 min-w-0">
              <img
                src={companyIcon || "/jdLogo.png"}
                alt="Company Logo"
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                style={{ minWidth: 32, minHeight: 32 }}
              />
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
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.107-.775.418-1.305.762-1.605-2.665-.303-5.466-1.334-5.466-5.933 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.654 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
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
          {/* Tech icon group below title, spanning full row */}
          <div className="flex-1">
            {/* Technology Stack Section with border */}
            <div className="w-full mb-2 p-4 rounded-xl border border-gray-200 bg-gray-50">
              <h4 className="text-lg font-semibold tracking-wide text-gray-800 mb-4 border-b border-gray-200 pb-1 uppercase">
                Technology Stack
              </h4>
              {(() => {
                const techInfos = technologies
                  .map((tech) => ({ tech, info: techIconMap[tech] }))
                  .filter(({ info }) => !!info);
                const groups: Record<
                  string,
                  { tech: string; info: (typeof techInfos)[0]["info"] }[]
                > = {};
                techInfos.forEach(({ tech, info }) => {
                  const category = info.category;
                  if (!groups[category]) groups[category] = [];
                  groups[category].push({ tech, info });
                });
                return (
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
                    {/* Render unknown techs */}
                    {technologies.filter((tech) => !techIconMap[tech]).length >
                      0 && (
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
                );
              })()}
            </div>
          </div>
          <div className="w-full mb-4"></div>
          <div className="bg-white/80 backdrop-blur shadow-lg border-none mb-4 p-6">
            <div className="flex flex-col h-full justify-between text-engineering-gray">
              {isTruncated ? (
                <>
                  <span>{truncatedDescription}</span>
                  <div className="flex justify-end mt-2">
                    <button
                      className="inline-flex items-center justify-center p-1 rounded-full hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-engineering-accent"
                      onClick={() => setModalOpen(true)}
                      aria-label="Click to learn more"
                      title="Click to learn more"
                    >
                      <FiMoreHorizontal className="w-6 h-6 text-engineering-accent" />
                    </button>
                  </div>
                </>
              ) : (
                description
              )}
            </div>
          </div>
          {/* Group tech icons by category and render with headings */}

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
        {/* Modal for full description */}
        {modalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setModalOpen(false)}
            aria-modal="true"
            role="dialog"
          >
            <div
              className="bg-white rounded-lg shadow-lg max-w-[900px] w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-xl text-gray-400 hover:text-gray-700"
                onClick={() => setModalOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <div className="text-engineering-gray whitespace-pre-line">
                {description}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default ProjectCard;
