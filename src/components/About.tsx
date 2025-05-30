import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";
import WorldCitiesLine from "@/components/WorldCitiesLine";

const About = () => {
  return (
    <section id="about" className="bg-background transition-colors pt-0 pb-16">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div
            className="lg:w-1/2 animate-fade-in opacity-0"
            style={{ animationDelay: "0.3s" }}
          >
            <h2 className="heading-lg mb-6 flex items-center">Who Am I?</h2>
            <div className="space-y-4 text-engineering-gray">
              <p>
                British born, American raised. I consider myself a personable
                individual, passionate about guiding engineering teams to
                deliver business value early and often. I'm involved from
                conception to release, fostering success through hands-on
                technical and project leadership.
              </p>
              <p>
                I believe in employing community best practices and techniques
                across applications and infrastructure stacks. My approach is
                underlined by the belief that success comes from having genuine
                passion in what you do.
              </p>
              <p>
                With extensive experience in full-stack development, cloud
                architecture, and team leadership, I focus on building systems
                that are thoughtful, trustworthy, and human-centered.
              </p>
              <p>
                You'll also find that I have an excellent work ethic, respectful
                of myself and others, and easy to get along with.
              </p>
            </div>
          </div>

          <div
            className="lg:w-1/2 animate-fade-in opacity-0"
            style={{ animationDelay: "0.5s" }}
          >
            <Card className="bg-white p-6 rounded-lg shadow-md border-none relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-engineering-accent/20"></div>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden bg-engineering-light flex items-center justify-center">
                  <Avatar className="w-full h-full">
                    <AvatarImage
                      src="/jasondavey-headshot.jpg"
                      alt="Jason Davey"
                      className="object-cover"
                    />
                    <AvatarFallback>
                      <User className="w-24 h-24 text-engineering-blue" />
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <h3 className="heading-md mb-3 text-primary font-bold drop-shadow">
                    Jason Davey
                  </h3>
                  <p className="text-engineering-gray mb-3">VP Engineering</p>
                  <p className="text-sm text-engineering-gray">
                    Based in Decatur, GA
                    <br />
                    15+ years of experience
                    <br />
                    Specializing in engineering leadership & cloud architecture
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      {/* World cities line section */}
      <div className="mt-4 w-full">
        <h3 className="text-center text-lg font-semibold mb-2 text-engineering-accent">
          International Experience
        </h3>
        <div className="w-full flex justify-center">
          {/* Responsive, dark-mode aware SVG as React component */}
          <WorldCitiesLine className="w-full max-w-3xl h-auto" />
        </div>
      </div>
    </section>
  );
};

export default About;
