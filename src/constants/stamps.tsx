import { SiTypescript, SiDotnet, SiReact, SiPostgresql, SiTerraform, SiDocker } from "react-icons/si";
import { FaNodeJs, FaCode, FaLayerGroup, FaServer } from "react-icons/fa";

export const StampsComTechMap: Record<
  string,
  { icon: JSX.Element; url: string; category: string }
> = {
  TypeScript: {
    icon: <SiTypescript className="text-blue-600" title="TypeScript" />,
    url: "https://www.typescriptlang.org/",
    category: "Frontend",
  },
  React: {
    icon: <SiReact className="text-blue-400" title="React" />,
    url: "https://react.dev/",
    category: "Frontend",
  },
  DotNet: {
    icon: <SiDotnet className="text-purple-600" title=".NET" />,
    url: "https://dotnet.microsoft.com/",
    category: "Backend",
  },
  CSharp: {
    icon: <FaCode className="text-green-600" title="C#" />,
    url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    category: "Backend",
  },
  AWS: {
    icon: <FaServer className="text-orange-500" title="AWS" />,
    url: "https://aws.amazon.com/",
    category: "Cloud",
  },
  Nodejs: {
    icon: <FaNodeJs className="text-green-700" title="Node.js" />,
    url: "https://nodejs.org/",
    category: "Backend",
  },
  PostgreSQL: {
    icon: <SiPostgresql className="text-blue-600" title="PostgreSQL" />,
    url: "https://www.postgresql.org/",
    category: "Database",
  },
  Docker: {
    icon: <SiDocker className="text-blue-500" title="Docker" />,
    url: "https://www.docker.com/",
    category: "DevOps",
  },
  Terraform: {
    icon: <SiTerraform className="text-purple-500" title="Terraform" />,
    url: "https://www.terraform.io/",
    category: "Infrastructure",
  },
  Microservices: {
    icon: <FaLayerGroup className="text-blue-600" title="Microservices" />,
    url: "https://microservices.io/",
    category: "Architecture",
  }
};
