import ProjectCard from "@/components/ProjectCard";
import ProjectVerascore from "@/components/projects/ProjectVerascore";
import ProjectVideoSanitizer from "@/components/projects/ProjectVideoSanitizer";
import ProjectEqisCapital from "./projects/ProjectFreedomAdvisors";
import ProjectStampsCom from "./projects/ProjectStampsCom";
import ProjectSoccerTourism from "./projects/ProjectSoccerTourism";
import ProjectDymoStamps from "./projects/ProjectDymoStamps";
import ProjectIntelliPad from "./projects/ProjectIntelliPad";
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
  // ...other projects
];

// Function to get industry from project
const getIndustryFromProject = (project: Project): string => {
  const { title, description } = project;
  const str = `${title} ${
    typeof description === "string" ? description : ""
  }`.toLowerCase();

  if (
    str.includes("financ") ||
    str.includes("lending") ||
    str.includes("score") ||
    str.includes("wealth")
  )
    return "Fintech";
  if (str.includes("video") || str.includes("caption") || str.includes("media"))
    return "Media";
  if (str.includes("health")) return "Healthcare";
  if (str.includes("education") || str.includes("learning")) return "EdTech";
  if (str.includes("logistics") || str.includes("shipping")) return "Mailing";
  if (str.includes("soccer") || str.includes("tourism")) return "Tourism";
  if (str.includes("stamps")) return "Mailing";
  if (
    str.includes("legal") ||
    str.includes("law firm") ||
    str.includes("attorney") ||
    str.includes("intellipad") ||
    (str.includes("crm") && str.includes("firm"))
  )
    return "Legal";
  return "General";
};

// Add year values to projects that don't have them yet
allProjects.forEach((project) => {
  // Set start and end years based on your provided values
  if (project === ProjectVerascore) {
    project.startYear = 2022;
    project.endYear = 2025;
  } else if (project === ProjectVideoSanitizer) {
    project.startYear = 2025;
    project.endYear = 2025;
  } else if (project === ProjectEqisCapital) {
    project.startYear = 2017;
    project.endYear = 2022;
  } else if (project === ProjectSoccerTourism) {
    project.startYear = 2025;
    project.endYear = 2025; // You mentioned 20265 but I assume it was a typo for 2025
  } else if (project === ProjectDymoStamps) {
    project.startYear = 2010;
    project.endYear = 2017;
  } else if (project === ProjectIntelliPad) {
    project.startYear = 2001;
    project.endYear = 2006;
  } else if (project === ProjectStampsCom) {
    project.startYear = 2010;
    project.endYear = 2017;
  }
});

// Sort projects by endYear in descending order (newest first)
const projects: Project[] = [...allProjects].sort(
  (a, b) => b.endYear - a.endYear
);

const Projects: React.FC = () => (
  <section id="projects" className="bg-background">
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
          />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
