import React, { useState, ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  achievements: string[];
  hasPatent?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    id: "verascore",
    company: "VeraScore",
    role: "VP Engineering",
    period: "June 2022 - Present",
    description: [
      "As Vice President of Engineering at VeraScore, I lead cross-functional engineering efforts to deliver an inclusive, data-forward financial health platform designed to empower underserved communities with access to fair credit.",
      "My role combines high-level technical strategy, team leadership, and cross-disciplinary collaboration to build systems that are fast, trustworthy, and deeply human-centered.",
    ],
    achievements: [
      "Architected and led development of VeraScore's flagship financial scoring platform from prototype to production.",
      "Directed the end-to-end design and implementation of VeraScore's flagship platform, balancing rapid iteration with long-term architectural resilience",
      "Architected a modern JAMStack-based platform with a CI/CD pipeline and cost-efficient cloud infrastructure to support scalable deployment",
      "Currently developing an early-stage system leveraging Model Context Protocol (MCP) and AI assistants to provide customized insights",
      "Cultivated a high-trust engineering culture rooted in curiosity, ownership, and continuous learning",
    ],
  },
  {
    id: "eqis",
    company: "EQIS Capital",
    role: "VP Engineering",
    period: "August 2017 - November 2022",
    description: [
      "At EQIS Capital, I led high-performing, cross-functional teams across engineering, QA, product management, UI/UX and data design to modernize and scale our digital investment platform.",
      "My focus was on managing a team of nine to deliver performance-optimized, secure, and user-centric systems through a culture of technical excellence and iterative innovation.",
    ],
    achievements: [
      "Spearheaded Project Phoenix, resulting in a 70% reduction in operational costs and accelerated time-to-market by 4x",
      "Directed a company-wide migration to cloud infrastructure, enhancing deployment agility and improving system resilience by 30%",
      "Built a team environment rooted in psychological safety, fast iteration, and shared ownership of outcomes",
      "Instituted advanced security protocols, elevating platform-wide protection against cyber threats",
      "Redesigned the feature release lifecycle, cutting time-to-market by 25%",
    ],
  },
  {
    id: "stamps",
    company: "Stamps.com",
    role: "Principal Engineer",
    period: "June 2010 - August 2017",
    hasPatent: true,
    description: [
      "As Principal Engineer at Stamps.com, I led the development of user-focused shipping and mailing solutions that merged innovation with operational excellence.",
      "My work centered on creating high-impact platforms that optimized global logistics, enhanced user experience, and demonstrated measurable performance and reliability improvements.",
    ],
    achievements: [
      "Contributed to the architecture team and led the front and middle stack development of the GlobalPost system, significantly improving international shipping efficiency",
      "Secured US Patent 11037223B1 for technical innovation",
      "Spearheaded the launch of DYMO Stamps Online®, a cloud-native solution praised by PC Mag for its intuitive user experience",
      "Automated deployment pipelines and infrastructure provisioning, elevating release reliability and engineering velocity",
      "Championed best practices in CI/CD and DevOps to enhance delivery consistency and operational resilience",
      "Mentored teams of student engineers from Worcester Polytechnic University (WPI), who won best project two years running",
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(experiences[0].id);

  return (
    <section
      id="experience"
      className="bg-background transition-colors pt-0 pb-16"
    >
      <div className="section-container">
        <div
          className="text-center mb-16 animate-fade-in opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="heading-lg inline-flex items-center">
            Professional Experience
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            My leadership journey has allowed me to work with amazing teams on
            impactful projects across multiple industries.
          </p>
        </div>

        <div
          className="max-w-4xl mx-auto animate-fade-in opacity-0"
          style={{ animationDelay: "0.4s" }}
        >
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
                <Card className="border-none shadow-lg bg-background p-8 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-md bg-engineering-accent/10 text-engineering-accent">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-sm text-engineering-accent mb-6">
                    {exp.period}
                  </p>

                  <div className="space-y-4 mb-6 text-muted-foreground">
                    {exp.description.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>

                  <h4 className="font-semibold mb-3 text-foreground">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1 mt-2">
                    {exp.achievements.map((achievement, i) => {
                      // Get the ID of the current experience and achievement for the key
                      const achievementKey = `${exp.id}-achievement-${i}`;
                      
                      return (
                        <li
                          key={achievementKey}
                          className="text-muted-foreground flex items-start"
                        >
                          <span className="inline-flex mr-2 text-primary">•</span>
                          <span className="flex-1">
                            {exp.id === "stamps" && i === 1 && exp.hasPatent ? (
                              <>Secured <a 
                                href="/JasonDaveyPatent.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-secondary underline font-medium transition-colors"
                              >
                                US Patent 11037223B1
                              </a> for technical innovation</>
                            ) : (
                              achievement
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
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
