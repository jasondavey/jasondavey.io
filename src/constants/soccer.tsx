import React from "react";
import { SiTypescript, SiPostgresql, SiTerraform, SiDocker } from "react-icons/si";
import { FaReact, FaNodeJs, FaAws, FaLayerGroup } from "react-icons/fa";

// This type signature exactly matches what Project.ts interface expects
export const SoccerTourismTechMap: Record<
  string,
  { category: string; icon: JSX.Element; url: string }
> = {
  React: {
    category: "Frontend",
    icon: <FaReact className="text-blue-400" title="React" />,
    url: "https://react.dev/",
  },
  TypeScript: {
    category: "Language",
    icon: <SiTypescript className="text-blue-600" title="TypeScript" />,
    url: "https://www.typescriptlang.org/",
  },
  AWS: {
    category: "Infrastructure",
    icon: <FaAws className="text-orange-500" title="AWS" />,
    url: "https://aws.amazon.com/",
  },
  Nodejs: {
    category: "Backend",
    icon: <FaNodeJs className="text-green-700" title="Node.js" />,
    url: "https://nodejs.org/",
  },
  PostgreSQL: {
    category: "Database",
    icon: <SiPostgresql className="text-blue-600" title="PostgreSQL" />,
    url: "https://www.postgresql.org/",
  },
  Microservices: {
    category: "Architecture",
    icon: <FaLayerGroup className="text-blue-600" title="Microservices" />,
    url: "https://microservices.io/",
  },
  Docker: {
    category: "DevOps",
    icon: <SiDocker className="text-blue-500" title="Docker" />,
    url: "https://www.docker.com/",
  },
  Terraform: {
    category: "Infrastructure",
    icon: <SiTerraform className="text-purple-500" title="Terraform" />,
    url: "https://www.terraform.io/",
  }
};
