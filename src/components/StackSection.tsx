import { 
  FaReact, 
  FaAws, 
  FaGithub, 
  FaNodeJs, 
  FaHeart, 
  FaCode, 
  FaVial,
  FaCommentAlt
} from "react-icons/fa";
import {
  SiVite,
  SiTailwindcss,
  SiShadcnui,
  SiVercel,
  SiAmazonroute53,
  SiCypress
} from "react-icons/si";
import { MdEmail } from "react-icons/md";

const stack = [
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Vite", icon: <SiVite className="text-purple-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  {
    name: "shadcn/ui",
    icon: <SiShadcnui />,
  },
  { name: "EmailJS", icon: <MdEmail className="text-pink-400" /> },
  { name: "Vercel", icon: <SiVercel /> },
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
    <section id="stack" className="py-4 border-b">
      <div className="section-container text-center py-1">
        <p className="text-engineering-gray mb-2 max-w-2xl mx-auto">
          <strong>{hostName}</strong> is built with a modern stack for speed,
          scalability, and great developer experience. The favicon was generated
          using{" "}
          <a
            href="https://favicon.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-engineering-accent"
          >
            favicon.io
          </a>
          .
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
      {/* Tools Used Section */}
      <div className="section-container text-center mt-0 py-4">
        <div className="flex flex-wrap items-stretch justify-center gap-8 mb-6">
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow p-6 w-64 flex flex-col">
            <div className="font-bold text-lg mb-2 text-engineering-accent flex items-center gap-2">
              <FaHeart className="text-red-500" />
              Lovable
            </div>
            <div className="text-sm text-engineering-gray flex-grow">
              Content and code for this project were generated and orchestrated
              using Lovable's AI-driven workflow.
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow p-6 w-64 flex flex-col">
            <div className="font-bold text-lg mb-2 text-engineering-accent flex items-center gap-2">
              <FaCode className="text-blue-500" />
              Windsurf IDE
            </div>
            <div className="text-sm text-engineering-gray flex-grow">
              Development was performed in Windsurf, an AI-powered IDE
              seamlessly integrated with ChatGPT for agentic coding.
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow p-6 w-64 flex flex-col">
            <div className="font-bold text-lg mb-2 text-engineering-accent flex items-center gap-2">
              <FaCommentAlt className="text-green-500" />
              ChatGPT
            </div>
            <div className="text-sm text-engineering-gray flex-grow">
              ChatGPT provided intelligent assistance, code suggestions, and
              content generation throughout the build process.
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow p-6 w-64 flex flex-col">
            <div className="font-bold text-lg mb-2 text-engineering-accent flex items-center gap-2">
              <SiCypress className="text-green-600" />
              Cypress
            </div>
            <div className="text-sm text-engineering-gray flex-grow">
              Cypress powers the automated testing pipeline, ensuring all site
              features function correctly before deployment to production.
            </div>
          </div>
        </div>
        <p className="text-xs text-engineering-gray">
          These tools enabled rapid prototyping, high-quality code, and seamless
          collaboration between human and AI.
        </p>
      </div>
    </section>
  );
};

export default StackSection;
