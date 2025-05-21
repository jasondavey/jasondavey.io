import { SiTypescript, SiDotnet, SiReact } from "react-icons/si";
import { FaNodeJs, FaCode, FaLayerGroup, FaDatabase, FaAws, FaServer } from "react-icons/fa";

export const FreedomAdvisorsTechMap: Record<
  string,
  { icon: JSX.Element; url: string; category: string }
> = {
  TypeScript: {
    icon: <SiTypescript className="text-blue-600" title="TypeScript" />,
    url: "https://www.typescriptlang.org/docs/",
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
    icon: <FaAws className="text-orange-500" title="AWS" />,
    url: "https://aws.amazon.com/",
    category: "Cloud",
  },
  Nodejs: {
    icon: <FaNodeJs className="text-green-700" title="Node.js" />,
    url: "https://nodejs.org/",
    category: "Backend",
  },
  SQLServer: {
    icon: <FaDatabase className="text-red-600" title="SQL Server" />,
    url: "https://www.microsoft.com/en-us/sql-server/",
    category: "Database",
  },
  Microservices: {
    icon: <FaLayerGroup className="text-blue-600" title="Microservices" />,
    url: "https://microservices.io/",
    category: "Architecture",
  }
};
