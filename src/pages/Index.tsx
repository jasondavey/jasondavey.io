import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StackSection from "@/components/StackSection";
import About from "@/components/About";
import SkillsSection from "@/components/Skills";
import ProjectsSection from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SpeedInsights />
      <Hero />

      <About />
      <SkillsSection />
      <ProjectsSection />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
