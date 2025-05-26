import { Rocket, Users, Globe, Settings, Target } from "lucide-react";

const LeadershipSection = () => (
  <section
    id="leadership"
    className="bg-background transition-colors pt-0 pb-16"
  >
    <div className="section-container">
      <div
        className="text-center mb-12 animate-fade-in opacity-0"
        style={{ animationDelay: "0.2s" }}
      >
        <h2 className="heading-lg inline-flex items-center">Leadership</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Strategic vision, culture development, and outcome-driven leadership
          across diverse technical domains.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Strategic Technical Leadership */}
        <div
          className="bg-background border border-border rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md animate-fade-in opacity-0"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">
                Strategic Technical Leadership
              </h3>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                <span>
                  <strong className="text-foreground">
                    Architected VeraScore's JAMStack platform
                  </strong>{" "}
                  with{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    rapid 6-month delivery
                  </span>
                  , balancing agility and resilience
                </span>
              </p>
              <p className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                <span>
                  <strong className="text-foreground">
                    Spearheaded Project Phoenix
                  </strong>{" "}
                  with{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    70% cost reduction
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    4x faster
                  </span>{" "}
                  time-to-market
                </span>
              </p>
              <p className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                <span>
                  <strong className="text-foreground">
                    Transformed EQIS Capital infrastructure
                  </strong>{" "}
                  with{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    +30% resilience
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    -25% time-to-market
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Team Building & Culture */}
        <div
          className="bg-background border border-border rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md animate-fade-in opacity-0"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-600"></div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">Team Building & Culture</h3>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>
                <span>
                  <strong className="text-foreground">
                    Built and scaled distributed teams
                  </strong>{" "}
                  with thoughtful hiring, onboarding, and growth frameworks
                </span>
              </p>
              <p className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>
                <span>
                  <strong className="text-foreground">
                    Fostered a culture
                  </strong>{" "}
                  of psychological safety, curiosity, and continuous learning
                </span>
              </p>
              <p className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>
                <span>
                  <strong className="text-foreground">
                    Instituted mentoring systems
                  </strong>{" "}
                  focused on ownership and accountability
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Cross-Functional Collaboration */}
        <div
          className="bg-background border border-border rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md animate-fade-in opacity-0"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="h-2 bg-gradient-to-r from-amber-500 to-orange-600"></div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mr-3">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">
                Cross-Functional Collaboration
              </h3>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span>
                <span>
                  <strong className="text-foreground">
                    Aligned engineering with business goals
                  </strong>{" "}
                  through partnerships with Product, Design, Legal, and Business
                </span>
              </p>
              <p className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span>
                <span>
                  <strong className="text-foreground">Roadmap planning</strong>{" "}
                  focused on user-first design, accessibility, and ethical data
                  practices
                </span>
              </p>
              <p className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span>
                <span>
                  <strong className="text-foreground">
                    Championed responsible AI frameworks
                  </strong>
                  , reinforcing VeraScore's social mission
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Operational Excellence */}
        <div
          className="bg-background border border-border rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md animate-fade-in opacity-0"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-600"></div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3">
                <Settings className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">Operational Excellence</h3>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></span>
                <span>
                  <strong className="text-foreground">
                    Led DevOps modernization
                  </strong>{" "}
                  (CI/CD, observability) company-wide
                </span>
              </p>
              <p className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></span>
                <span>
                  <strong className="text-foreground">
                    Instituted advanced security protocols
                  </strong>{" "}
                  and agile release processes
                </span>
              </p>
              <p className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></span>
                <span>
                  <strong className="text-foreground">
                    Delivered award-winning cloud-native products
                  </strong>{" "}
                  at Stamps.com, securing a U.S. patent
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Outcome-Driven Mindset - Spans full width on mobile, half width on larger screens */}
        <div
          className="bg-background border border-border rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md col-span-1 md:col-span-2 animate-fade-in opacity-0"
          style={{ animationDelay: "0.7s" }}
        >
          <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mr-3">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">Outcome-Driven Mindset</h3>
            </div>
            <div className="md:grid md:grid-cols-3 gap-4 space-y-3 md:space-y-0 text-muted-foreground">
              <p className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-2 flex-shrink-0"></span>
                <span>
                  <strong className="text-foreground">
                    Delivered measurable improvements
                  </strong>{" "}
                  in platform performance, time-to-market, and cost-efficiency
                </span>
              </p>
              <p className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-2 flex-shrink-0"></span>
                <span>
                  <strong className="text-foreground">
                    Reinforced value delivery
                  </strong>{" "}
                  as an ongoing, iterative process across product and
                  engineering lifecycles
                </span>
              </p>
              <p className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-2 flex-shrink-0"></span>
                <span>
                  <strong className="text-foreground">
                    Demonstrated versatility
                  </strong>{" "}
                  and leadership across fintech, logistics, and diverse
                  industries
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LeadershipSection;
