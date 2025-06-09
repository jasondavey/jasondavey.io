import M3Navbar from "@/components/M3Navbar";
import M3Hero from "@/components/M3Hero";
import M3About from "@/components/M3About";
import M3Projects from "@/components/M3Projects";
import M3Leadership from "@/components/M3Leadership";
import M3Skills from "@/components/M3Skills";
import M3Experience from "@/components/M3Experience";
import M3Contact from "@/components/M3Contact";
import M3Footer from "@/components/M3Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <M3Navbar />
      <SpeedInsights />
      <M3Hero />
      <M3About />
      <M3Projects />
      <M3Leadership />
      <M3Skills />
      <M3Experience />
      <M3Contact />
      <M3Footer />
    </div>
  );
};

export default Index;
