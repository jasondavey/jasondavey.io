import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";
import TypingQuotes from "@/components/TypingQuotes";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-engineering-accent/10 blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-60 h-60 rounded-full bg-blue-400/10 blur-3xl"></div>

        {/* Added image as background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/8fdf2308-40d8-4dc0-b34e-3f2f1a0d2c83.png"
            alt="Jason at whiteboard"
            className="w-full h-full object-cover opacity-20 md:opacity-25"
          />
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        </div>
      </div>

      <div className="section-container relative z-10">
        <div
          className="max-w-3xl animate-fade-in opacity-0"
          style={{
            animationDelay: "0.2s",
          }}
        >
          <h1 className="heading-xl mb-6">
            <span className="block text-foreground">Build Tech With</span>
            <span className="block text-engineering-gray mt-2">Jason D</span>
          </h1>
          <p className="text-lg text-green-500 mb-8 max-w-2xl">
            <TypingQuotes
              quotes={[
                "Hello friend...",
                "Ask me what I mean by...",
                '"I bend over backwards to be lazy."',
                "I like to build systems that work for people.",
                "I like to deliver business value early and often.",
                'I believe that "done" means it\'s being used by the customer, not just dev complete or built.',
                "I believe that success comes from having passion in what you do.",
                "Get in touch with me at jasonrdavey@gmail.com",
                "or call or text me at",
                "(415) 693-8290",
              ]}
            />
          </p>
          <style>{`
            .blinking-cursor {
              display: inline-block;
              width: 0.7ch;
              height: 1.2em;
              line-height: 1.2em;
              background: currentColor;
              margin-left: 2px;
              animation: blink 1s step-end infinite;
            }
            @keyframes blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0; }
            }
          `}</style>
        </div>

        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <Button
            variant="ghost"
            size="icon"
            className="bg-engineering-accent/20 hover:bg-engineering-accent/30 p-3 rounded-full animate-bounce"
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            aria-label="Scroll down"
          >
            <ArrowDownIcon className="h-8 w-8 text-engineering-accent" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
