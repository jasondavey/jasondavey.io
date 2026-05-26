import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ExternalLinkProvider } from "@/context/ExternalLinkContext";

const Index = () => {
  return (
    <ExternalLinkProvider>
      <div className="min-h-screen w-full max-w-full overflow-x-hidden">
        <Navbar />
        <SpeedInsights />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Leadership />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </ExternalLinkProvider>
  );
};

export default Index;
