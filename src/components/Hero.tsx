
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-engineering-accent/10 blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-60 h-60 rounded-full bg-blue-400/10 blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <h1 className="heading-xl mb-6">
            <span className="block text-foreground">Jason Davey.</span>
            <span className="block text-engineering-gray mt-2">VP Engineering & Technical Leader.</span>
          </h1>
          <p className="text-lg text-engineering-gray mb-8 max-w-2xl">
            I guide engineering teams to deliver business value early and often. With 15+ years of experience 
            in engineering leadership and cloud architecture, I build high-performing teams that create 
            scalable, user-centric systems to solve complex business challenges.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-engineering-accent hover:bg-engineering-accent/90" 
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Projects
            </Button>
            <Button size="lg" variant="outline" className="border-engineering-accent text-engineering-accent hover:bg-engineering-accent/10"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
          <Button variant="ghost" size="icon" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            <ArrowDownIcon className="h-6 w-6 animate-bounce" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
