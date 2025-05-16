import { FaExternalLinkAlt } from "react-icons/fa";
import { Card, CardContent } from "./ui/card";

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

  return (
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
        <Card className="bg-white/80 backdrop-blur shadow-lg border-none mb-4">
          <CardContent className="p-6">
            <p className="text-engineering-gray">{description}</p>
          </CardContent>
        </Card>
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
    </div>
  );
};
export default ProjectCard;
