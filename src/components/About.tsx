
import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-engineering-light">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            <h2 className="heading-lg mb-6 flex items-center">
              <span className="text-engineering-accent mr-3">01.</span>
              About Me
            </h2>
            <div className="space-y-4 text-engineering-gray">
              <p>
                Hello! My name is John Doe, and I enjoy creating things that live on the internet. 
                My interest in technology started back in 2010 when I decided to try customizing WordPress themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at a technology consultancy, a start-up, and a large corporation. My main focus these days is building accessible, inclusive products and digital experiences for various clients.
              </p>
              <p>
                When I'm not at the computer, I'm usually rock climbing, playing basketball, or exploring new coffee shops in the city.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
            <Card className="bg-white p-6 rounded-lg shadow-md border-none relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-engineering-accent/20"></div>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="relative w-48 h-48 rounded-full bg-engineering-light flex items-center justify-center">
                  <User className="w-24 h-24 text-engineering-blue" />
                </div>
                <div>
                  <h3 className="heading-md mb-3">John Doe</h3>
                  <p className="text-engineering-gray mb-3">Software Engineer</p>
                  <p className="text-sm text-engineering-gray">
                    Based in San Francisco, CA<br />
                    10+ years of experience<br />
                    Specializing in full-stack development
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
