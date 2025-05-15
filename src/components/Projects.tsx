
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Video Captioning and Profanity Filtering (Sound and Captions)",
    description:
      "A full-stack e-commerce platform with product management, shopping cart, user authentication, and payment processing. Implemented responsive design and optimized performance.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    github: "https://github.com/jasondavey/video-captioning",
    demo: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Real-Time Analytics Dashboard",
    description:
      "A dashboard for visualizing business metrics in real-time. Features include customizable widgets, data filtering, and export capabilities.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    technologies: ["TypeScript", "React", "D3.js", "Socket.io", "Express"],
    github: "https://github.com/jasondavey/analytics-dashboard",
    demo: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management System",
    description:
      "A collaborative task management application with drag-and-drop interface, task prioritization, team collaboration, and progress tracking.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    technologies: ["React", "Redux", "Node.js", "PostgreSQL", "WebSockets"],
    github: "https://github.com/jasondavey/task-manager",
    demo: "#",
    featured: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-background">
      <div className="section-container">
        <div
          className="text-center mb-16 animate-fade-in opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="heading-lg inline-flex items-center">
            <span className="text-engineering-accent mr-3">03.</span>
            Featured Projects
          </h2>
          <p className="mt-4 text-engineering-gray max-w-2xl mx-auto">
            A selection of my recent projects. Each project presented unique
            challenges and opportunities to learn and grow.
          </p>
        </div>

        <div className="space-y-24">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            className="border-engineering-accent text-engineering-accent"
          >
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center gap-8 animate-fade-in opacity-0`}
      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
    >
      <div className="lg:w-3/5 relative group">
        <div className="absolute inset-0 bg-engineering-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <Card className="overflow-hidden border-none shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover object-center"
          />
        </Card>
      </div>

      <div className={`lg:w-2/5 ${isEven ? "lg:pl-8" : "lg:pr-8"}`}>
        <div className="text-engineering-accent font-mono text-sm mb-2">
          Featured Project
        </div>
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <Card className="bg-white/80 backdrop-blur shadow-lg border-none mb-4">
          <CardContent className="p-6">
            <p className="text-engineering-gray">{project.description}</p>
          </CardContent>
        </Card>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <Badge
              key={techIndex}
              variant="outline"
              className="bg-background border-engineering-accent/30"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              className="text-engineering-gray hover:text-engineering-accent transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              className="text-engineering-gray hover:text-engineering-accent transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
