
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Settings, Server } from "lucide-react";

const SkillsSection = () => {
  const frontendSkills = ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"];
  const backendSkills = ["Node.js", "Express", "Python", "Django", "GraphQL", "REST API", "MongoDB", "PostgreSQL"];
  const toolsSkills = ["Git", "GitHub", "Docker", "AWS", "CI/CD", "Jest", "Webpack"];

  return (
    <section id="skills" className="bg-white">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <h2 className="heading-lg inline-flex items-center">
            <span className="text-engineering-accent mr-3">02.</span>
            My Technical Skills
          </h2>
          <p className="mt-4 text-engineering-gray max-w-2xl mx-auto">
            I've worked with a variety of technologies throughout my journey as a software engineer.
            Here's a quick overview of my technical skillset.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <SkillCard 
            title="Frontend Development"
            description="Building responsive, accessible, and performant user interfaces"
            skills={frontendSkills}
            icon={<Code />}
            delay="0.3s"
          />
          <SkillCard 
            title="Backend Development"
            description="Crafting scalable and reliable server-side applications"
            skills={backendSkills}
            icon={<Server />}
            delay="0.4s"
          />
          <SkillCard 
            title="Tools & Platforms"
            description="Leveraging modern tools to streamline development workflows"
            skills={toolsSkills}
            icon={<Settings />}
            delay="0.5s"
          />
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  title: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
  delay: string;
}

const SkillCard = ({ title, description, skills, icon, delay }: SkillCardProps) => {
  return (
    <Card className="border-none shadow-lg animate-fade-in opacity-0" style={{ animationDelay: delay }}>
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
            <Badge key={index} variant="secondary" className="bg-engineering-light text-engineering-dark">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsSection;
