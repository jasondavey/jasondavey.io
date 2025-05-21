import { Card, CardContent } from "@/components/ui/card";

const LeadershipSection = () => (
  <section id="leadership" className="bg-background transition-colors">
    <div className="section-container">
      <div
        className="text-center mb-16 animate-fade-in opacity-0"
        style={{ animationDelay: "0.2s" }}
      >
        <h2 className="heading-lg inline-flex items-center">Leadership</h2>
      </div>
      <Card className="border-none bg-engineering-lightest max-w-3xl mx-auto">
        <CardContent className="p-8">
          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-900 flex items-center justify-center">
                <span className="mr-2">🚀</span>Strategic Technical Leadership
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔️</span>
                  <span>
                    <strong>Architected VeraScore's JAMStack platform</strong>{" "}
                    and delivered MVP-to-production in{" "}
                    <span className="text-blue-700 font-semibold">
                      under 6 months
                    </span>
                    , balancing agility and resilience.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔️</span>
                  <span>
                    <strong>Spearheaded Project Phoenix</strong>—achieved{" "}
                    <span className="text-blue-700 font-semibold">
                      70% cost reduction
                    </span>{" "}
                    and{" "}
                    <span className="text-blue-700 font-semibold">
                      4x faster
                    </span>{" "}
                    time-to-market, transforming engineering culture.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔️</span>
                  <span>
                    <strong>Transformed EQIS Capital infrastructure</strong> via
                    cloud migration, security, and DevOps modernization ({" "}
                    <span className="text-blue-700 font-semibold">
                      +30% resilience
                    </span>
                    ,{" "}
                    <span className="text-blue-700 font-semibold">
                      -25% time-to-market
                    </span>
                    ).
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-900 flex items-center justify-center">
                <span className="mr-2">🤝</span>Team Building & Culture
                Development
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔️</span>
                  <span>
                    <strong>Built and scaled distributed teams</strong> with
                    thoughtful hiring, onboarding, and growth frameworks.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔️</span>
                  <span>
                    <strong>Fostered a culture</strong> of psychological safety,
                    curiosity, and continuous learning—enabling high performance
                    and innovation.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔️</span>
                  <span>
                    <strong>Instituted mentoring systems</strong> emphasizing
                    ownership and accountability (notably at VeraScore & EQIS
                    Capital).
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-900 flex items-center justify-center">
                <span className="mr-2">🌐</span>Cross-Functional Collaboration
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔️</span>
                  <span>
                    <strong>Aligned engineering with business goals</strong>{" "}
                    through close partnership with Product, Design, Legal, and
                    Business stakeholders.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔️</span>
                  <span>
                    <strong>Roadmap planning</strong> focused on user-first
                    design, accessibility, and ethical data practices.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔️</span>
                  <span>
                    <strong>Championed responsible AI frameworks</strong>,
                    reinforcing VeraScore’s social mission.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-900 flex items-center justify-center">
                <span className="mr-2">⚙️</span>Operational Excellence
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔️</span>
                  <span>
                    <strong>Led DevOps modernization</strong> (CI/CD,
                    observability) company-wide.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔️</span>
                  <span>
                    <strong>Instituted advanced security protocols</strong> and
                    agile release processes—integrating automation and tooling
                    for delivery and compliance.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔️</span>
                  <span>
                    <strong>
                      Delivered award-winning cloud-native products
                    </strong>{" "}
                    at Stamps.com, securing a U.S. patent for innovation.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-900 flex items-center justify-center">
                <span className="mr-2">🎯</span>Outcome-Driven Mindset
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔️</span>
                  <span>
                    <strong>Delivered measurable improvements</strong> in
                    platform performance, time-to-market, and cost-efficiency.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔️</span>
                  <span>
                    <strong>Reinforced value delivery</strong> as an ongoing,
                    iterative process across product and engineering lifecycles.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔️</span>
                  <span>
                    <strong>Demonstrated versatility</strong> and leadership
                    across fintech, logistics, and other industries under
                    diverse operational constraints.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default LeadershipSection;
