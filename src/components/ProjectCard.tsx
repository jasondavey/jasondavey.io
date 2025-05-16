import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: React.ReactNode;
  image?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  techIconMap: Record<string, JSX.Element>;
  details?: React.ReactNode;
  index: number;
  showDemoButton?: boolean;
  showCodeButton?: boolean;
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
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <div className="bg-white/80 backdrop-blur shadow-lg border-none mb-4 p-6">
            <div className="text-engineering-gray">
              {isTruncated ? (
                <>
                  {truncatedDescription}
                  <button
                    className="text-engineering-accent underline cursor-pointer"
                    onClick={() => setModalOpen(true)}
                  >
                    More...
                  </button>
                </>
              ) : (
                description
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) =>
              techIconMap[tech] ? (
                <span key={tech} className="text-2xl" title={tech}>
                  {techIconMap[tech]}
                </span>
              ) : (
                <span
                  key={tech}
                  className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs"
                >
                  {tech}
                </span>
              )
            )}
          </div>
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
            {showCodeButton && github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-engineering-accent text-engineering-accent rounded hover:bg-green-50 transition"
              >
                Code <FaExternalLinkAlt className="ml-2" />
              </a>
            )}
          </div>
        </div>
        {/* Modal for full description */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-8 relative">
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
