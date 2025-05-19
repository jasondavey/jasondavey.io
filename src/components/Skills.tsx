
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Settings, Server } from "lucide-react";

const SkillsSection = () => {
  const leadershipSkills = ["Engineering Leadership", "Team Building", "Product Strategy", "Cross-functional Collaboration", "Agile Methodologies", "Technical Mentorship"];
  const technicalSkills = ["Cloud Architecture", "Full-stack Development", "JAMStack", "DevOps", "CI/CD", "Infrastructure as Code", "API Integration"];
  const domainSkills = ["Financial Technology", "Security & Compliance", "User Experience", "Performance Optimization", "Shipping & Logistics", "AI/ML Integration"];

  return (
    <section id="skills" className="bg-background transition-colors">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <h2 className="heading-lg inline-flex items-center">
            <span className="text-engineering-accent mr-3">02.</span>
            Technical Skills
          </h2>
          <p className="mt-4 text-engineering-gray max-w-2xl mx-auto">
            Throughout my career, I've developed a diverse skillset spanning leadership, technical architecture, 
            and domain expertise across multiple industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <SkillCard 
            title="Leadership & Strategy"
            description="Building high-performing engineering teams and driving organizational success"
            skills={leadershipSkills}
            icon={<Settings />}
            delay="0.3s"
          />
          <SkillCard 
            title="Technical Expertise"
            description="Architecting and implementing scalable, secure, and efficient systems"
            skills={technicalSkills}
            icon={<Code />}
            delay="0.4s"
          />
          <SkillCard 
            title="Domain Knowledge"
            description="Applying technology to solve complex business problems across industries"
            skills={domainSkills}
            icon={<Server />}
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
            <Badge key={index} variant="secondary" className="bg-muted text-foreground">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsSection;
