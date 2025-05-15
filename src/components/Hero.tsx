
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";

const Hero = () => {
  return <section className="relative min-h-screen flex items-center bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-engineering-accent/10 blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-60 h-60 rounded-full bg-blue-400/10 blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl animate-fade-in opacity-0" style={{
        animationDelay: "0.2s"
      }}>
          <h1 className="heading-xl mb-6">
            <span className="block text-foreground">Build Tech With</span>
            <span className="block text-engineering-gray mt-2">Jason D</span>
          </h1>
          <p className="text-lg text-engineering-gray mb-8 max-w-2xl">I recently read that job titles are out, job outcomes are in. </p>

        </div>

        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center">
          <span className="text-sm text-engineering-gray mb-2">Scroll down</span>
          <Button 
            variant="ghost" 
            size="icon" 
            className="bg-engineering-accent/10 hover:bg-engineering-accent/20 p-2 rounded-full animate-bounce"
            onClick={() => document.getElementById("stack")?.scrollIntoView({
              behavior: "smooth"
            })}
          >
            <ArrowDownIcon className="h-8 w-8 text-engineering-accent" />
          </Button>
        </div>
      </div>
    </section>;
};

export default Hero;
