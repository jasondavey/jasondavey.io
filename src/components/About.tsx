import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User, MoreHorizontal } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-engineering-light">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div
            className="lg:w-1/2 animate-fade-in opacity-0"
            style={{ animationDelay: "0.3s" }}
          >
            <h2 className="heading-lg mb-6 flex items-center">
              <span className="text-engineering-accent mr-3">01.</span>
              About Me
            </h2>
            <div className="space-y-4 text-engineering-gray">
              <p>
                I'm passionate about guiding engineering teams to deliver
                business value early and often. I'm deeply involved from
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
                that are fast, trustworthy, and human-centered.
              </p>
            </div>
          </div>

          <div
            className="lg:w-1/2 animate-fade-in opacity-0"
            style={{ animationDelay: "0.5s" }}
          >
            <Card className="bg-white p-6 rounded-lg shadow-md border-none relative overflow-hidden">
                {/* Three dots icon at top right */}
                <button
                  className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-engineering-accent"
                  aria-label="More options"
                >
                  <MoreHorizontal className="w-6 h-6 text-engineering-accent" />
                </button>
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-engineering-accent/20"></div>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden bg-engineering-light flex items-center justify-center">
                  <Avatar className="w-full h-full">
                    <AvatarImage
                      src="/headshot.png"
                      alt="Jason Davey"
                      className="object-cover"
                    />
                    <AvatarFallback>
                      <User className="w-24 h-24 text-engineering-blue" />
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <h3 className="heading-md mb-3">Jason Davey</h3>
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
    </section>
  );
};

export default About;
