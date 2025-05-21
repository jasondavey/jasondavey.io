import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Settings, Server, Terminal, Database, Cloud, BrainCircuit } from "lucide-react";
import LeadershipSection from "./Leadership";

const SkillsSection = () => {
  const architectureSkills = [
    "System Design",
    "Microservices",
    "Distributed Systems",
    "Event-Driven Architecture",
    "Scalable Solutions",
    "Design Patterns",
    "Data Modeling",
  ];
  const technicalSkills = [
    "Cloud Architecture",
    "Full-stack Development",
    "JAMStack",
    "DevOps",
    "CI/CD",
    "Infrastructure as Code",
    "API Integration",
  ];
  const domainSkills = [
    "Financial Technology",
    "Security & Compliance",
    "User Experience",
    "Performance Optimization",
    "Shipping & Logistics",
    "AI/ML Integration",
  ];

  return (
    <div id="skills">
      {/* Leadership Section - Placed first */}
      <LeadershipSection />
      
      <section id="technical-skills" className="bg-background transition-colors py-16">
        <div className="section-container">
          <div
            className="text-center mb-12 animate-fade-in opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="heading-lg inline-flex items-center">
              Technical Skills
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Throughout my career, I've developed a diverse skillset spanning
              architecture, implementation, and domain expertise across
              multiple industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Architecture & Design */}
            <div className="bg-background border border-border rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
              <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-3">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">Architecture & Design</h3>
                </div>
                <p className="text-muted-foreground mb-4">Creating scalable, resilient, and well-structured technical solutions</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {architectureSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Expertise */}
            <div className="bg-background border border-border rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
              <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                    <Code className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">Technical Expertise</h3>
                </div>
                <p className="text-muted-foreground mb-4">Architecting and implementing scalable, secure, and efficient systems</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {technicalSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Domain Knowledge */}
            <div className="bg-background border border-border rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md animate-fade-in opacity-0" style={{ animationDelay: "0.5s" }}>
              <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3">
                    <Server className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">Domain Knowledge</h3>
                </div>
                <p className="text-muted-foreground mb-4">Applying technology to solve complex business problems across industries</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {domainSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// We're no longer using this component as we've integrated the skills directly into the section
// Keeping as a reference in case we need to revert or modify later
/*
interface SkillCardProps {
  title: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
  delay: string;
}

const SkillCard = ({
  title,
  description,
  skills,
  icon,
  delay,
}: SkillCardProps) => {
  return (
    <Card className="border-none" style={{ animationDelay: delay }}>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-md bg-engineering-light text-engineering-accent">
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-engineering-gray mb-6">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-muted text-foreground"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
*/

export default SkillsSection;
