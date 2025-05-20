import ProjectCard from "@/components/ProjectCard";
import ProjectVerascore from "@/components/projects/ProjectVerascore";
import ProjectVideoSanitizer from "@/components/projects/ProjectVideoSanitizer";
import { Project } from "./Project";

const projects: Project[] = [
  ProjectVerascore,
  ProjectVideoSanitizer,
  // ...other projects
];

const Projects: React.FC = () => (
  <section id="projects" className="bg-background">
    <div className="section-container">
      <div
        className="text-center mb-16 animate-fade-in opacity-0"
        style={{ animationDelay: "0.2s" }}
      >
        <h2 className="heading-lg inline-flex items-center">
          Portfolio of Work
        </h2>
        <p className="mt-4 text-engineering-gray max-w-2xl mx-auto">
          A selection of my recent projects. Each project presented unique
          challenges and opportunities to learn and grow.
        </p>
        <hr className="my-10 border-t border-gray-200" />
      </div>
      <div className="space-y-12">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
            techIconMap={project.techIconMap}
            details={project.details}
            index={idx + 1}
            showDemoButton={project.showDemoButton}
            showCodeButton={project.showCodeButton}
            companyIcon={project.companyIcon || "/jdLogo.png"}
            companyUrl={project.companyUrl}
            keyArchitecture={project.keyArchitecture}
            resultsImpact={project.resultsImpact}
            archImage={project.archImage}
            businessView={project.businessView}
            businessTerms={project.businessTerms}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
