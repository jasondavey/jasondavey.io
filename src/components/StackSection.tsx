import { FaReact, FaAws, FaGithub, FaNodeJs } from "react-icons/fa";
import {
  SiVite,
  SiTailwindcss,
  SiShadcnui,
  SiVercel,
  SiAmazonroute53,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";

const stack = [
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Vite", icon: <SiVite className="text-purple-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  {
    name: "shadcn/ui",
    icon: <SiShadcnui className="text-black dark:text-white" />,
  },
  { name: "EmailJS", icon: <MdEmail className="text-pink-400" /> },
  { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
  {
    name: "AWS Route53",
    icon: <SiAmazonroute53 className="text-orange-500" />,
  },
];

import { useEffect, useState } from "react";

const StackSection = () => {
  const [hostName, setHostName] = useState<string>("this site");

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hostname) {
      setHostName(window.location.hostname);
    }
  }, []);

  return (
    <section id="stack" className="py-16 bg-white dark:bg-black border-b">
      <div className="section-container text-center">
        <h2 className="heading-lg mb-4">stack used at {hostName}</h2>
        <p className="text-engineering-gray mb-8 max-w-2xl mx-auto">
          This website <strong>{hostName}</strong> is built with a modern stack
          for speed, scalability, and great developer experience.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {stack.map(({ name, icon }) => (
            <div key={name} className="flex flex-col items-center w-28">
              <div className="text-4xl mb-2">{icon}</div>
              <span className="text-sm text-engineering-gray">{name}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-engineering-gray">
          Deployed on <span className="font-semibold">Vercel</span>. Domain
          managed with <span className="font-semibold">AWS Route53</span>.
        </p>
      </div>
    </section>
  );
};

export default StackSection;
