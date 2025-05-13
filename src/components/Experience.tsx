
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "tech-corp",
    company: "Tech Corporation",
    role: "Senior Software Engineer",
    period: "January 2021 - Present",
    description: [
      "Led the development of a microservices architecture that improved system reliability by 35%",
      "Mentored junior developers and conducted code reviews to maintain high code quality standards",
      "Implemented CI/CD pipelines that reduced deployment time by 50%",
      "Collaborated with product managers to refine and implement new features"
    ],
    technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker"]
  },
  {
    id: "innovative-startup",
    company: "Innovative Startup",
    role: "Full Stack Developer",
    period: "June 2018 - December 2020",
    description: [
      "Built and deployed a customer-facing web application from scratch using React and Node.js",
      "Designed and implemented REST APIs for mobile and web applications",
      "Optimized database queries resulting in a 40% reduction in page load times",
      "Participated in agile development cycles and sprint planning"
    ],
    technologies: ["JavaScript", "React", "Express", "MongoDB", "Redis"]
  },
  {
    id: "digital-solutions",
    company: "Digital Solutions Inc.",
    role: "Web Developer",
    period: "August 2016 - May 2018",
    description: [
      "Developed responsive web interfaces for client projects",
      "Maintained legacy code and implemented new features as required",
      "Collaborated with designers to implement pixel-perfect UI components",
      "Created documentation for coding standards and best practices"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP"]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(experiences[0].id);

  return (
    <section id="experience" className="bg-engineering-light">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <h2 className="heading-lg inline-flex items-center">
            <span className="text-engineering-accent mr-3">04.</span>
            Where I've Worked
          </h2>
          <p className="mt-4 text-engineering-gray max-w-2xl mx-auto">
            My professional journey has allowed me to work with amazing teams on impactful projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
          <Tabs defaultValue={experiences[0].id} className="w-full">
            <TabsList className="flex flex-wrap justify-center mb-8 bg-transparent">
              {experiences.map((exp) => (
                <TabsTrigger 
                  key={exp.id} 
                  value={exp.id}
                  className="px-6 py-3 data-[state=active]:text-engineering-accent data-[state=active]:border-b-2 data-[state=active]:border-engineering-accent"
                >
                  {exp.company}
                </TabsTrigger>
              ))}
            </TabsList>

            {experiences.map((exp) => (
              <TabsContent key={exp.id} value={exp.id}>
                <Card className="border-none shadow-lg bg-white p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-md bg-engineering-accent/10 text-engineering-accent">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-engineering-gray">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-sm text-engineering-accent mb-6">{exp.period}</p>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-engineering-accent">▹</span>
                        <span className="text-engineering-gray">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 rounded-full bg-engineering-accent/10 text-sm text-engineering-accent">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Experience;
