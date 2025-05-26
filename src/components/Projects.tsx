import ProjectCard from "@/components/ProjectCard";
import ProjectVerascore from "@/components/projects/ProjectVerascore";
import ProjectVideoSanitizer from "@/components/projects/ProjectVideoSanitizer";
import ProjectEqisCapital from "./projects/ProjectFreedomAdvisors";
import ProjectStampsCom from "./projects/ProjectStampsCom";
import ProjectSoccerTourism from "./projects/ProjectSoccerTourism";
import ProjectDymoStamps from "./projects/ProjectDymoStamps";
import ProjectIntelliPad from "./projects/ProjectIntelliPad";
import ProjectBlackRock from "./projects/ProjectBlackRock";
import IndustrySummary from "./IndustrySummary";
import { Project } from "./Project";

const allProjects: Project[] = [
  ProjectVerascore,
  ProjectVideoSanitizer,
  ProjectEqisCapital,
  ProjectDymoStamps,
  ProjectStampsCom,
  ProjectSoccerTourism,
  ProjectIntelliPad,
  ProjectBlackRock,
  // ...other projects
];

// Industry classification is now handled directly on each project object

// Sort projects by endYear in descending order (newest first)
// For projects without an endYear (ongoing projects), use current year for sorting
const currentYear = new Date().getFullYear();
const projects: Project[] = [...allProjects].sort(
  (a, b) => (b.endYear || currentYear) - (a.endYear || currentYear)
);

const Projects: React.FC = () => (
  <section id="projects" className="bg-background transition-colors pt-0 pb-16">
    <div className="section-container">
      <div
        className="text-center mb-16 animate-fade-in opacity-0"
        style={{ animationDelay: "0.2s" }}
      >
        <h2 className="heading-lg inline-flex items-center">Portfolio</h2>
        <p className="mt-4 text-engineering-gray max-w-2xl mx-auto">
          A selection of my recent projects. Each project presented unique
          challenges and opportunities to learn and grow.
        </p>
        <hr className="my-10 border-t border-gray-200" />

        {/* Industry Summary Visual */}
        <IndustrySummary projects={allProjects} />
      </div>
      <div className="space-y-12">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            image={project.image}
            videoUrl={project.videoUrl}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
            techIconMap={project.techIconMap}
            details={project.details}
            startYear={project.startYear}
            endYear={project.endYear}
            index={idx + 1}
            showDemoButton={project.showDemoButton}
            showCodeButton={project.showCodeButton}
            companyIcon={project.companyIcon || "/jdLogo.png"}
            darkModeCompanyIcon={project.darkModeCompanyIcon}
            companyUrl={project.companyUrl}
            companyName={project.companyName}
            keyArchitecture={project.keyArchitecture}
            resultsImpact={project.resultsImpact}
            archImage={project.archImage}
            businessView={project.businessView}
            businessTerms={project.businessTerms}
            industry={project.industry}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
