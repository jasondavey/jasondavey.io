
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StackSection from "@/components/StackSection";
import About from "@/components/About";
import SkillsSection from "@/components/Skills";
import ProjectsSection from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <StackSection />
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
