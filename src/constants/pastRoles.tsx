import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SecurityIcon from "@mui/icons-material/Security";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import SchoolIcon from "@mui/icons-material/School";
import { RoleFocusData } from "./roleFocusTypes";

export const pastRoles: RoleFocusData[] = [
  {
    id: "nularity-ai",
    role: "VP Engineering",
    company: "Nularity AI",
    duration: "April 2025 - August 2025",
    mission:
      "Co-founded the engineering function at a stealth-mode platform that extracts decision-grade insights from enterprise data. Set the technical direction, built the first systems, and stood up a deploy pipeline that let the team ship daily within two months.",
    logoSrc: "/logos/nularity.ai.png",
    logoAlt: "Nularity AI",
    stats: [
      { label: "2 months", detail: "to demo-ready MVP" },
      { label: "8 weeks", detail: "to daily production deploys" },
      { label: "3 models", detail: "unified in one LLM gateway" },
    ],
    pillars: [
      {
        id: "zero-to-one",
        title: "0 → 1 Engineering",
        icon: <RocketLaunchIcon fontSize="inherit" />,
        summary:
          "Co-founded the engineering org and delivered a demo-ready MVP on AWS in two months.",
        details: (
          <>
            <p>
              Joined as the founding engineering hire at a stealth-mode startup and set the initial
              technical direction from a blank slate — architecture, tooling, and process, all
              decided in the first weeks.
            </p>
            <p>
              Delivered a demo-ready MVP on AWS within two months, giving the founders something
              real to show investors and early design partners well ahead of a typical seed-stage
              timeline.
            </p>
          </>
        ),
        technologies: ["AWS", "TypeScript", "React"],
      },
      {
        id: "llm-gateway",
        title: "Multi-Model AI Gateway",
        icon: <SmartToyIcon fontSize="inherit" />,
        summary:
          "Designed a multi-model LLM gateway spanning Claude 3, GPT-4 Turbo, and Gemini 2.5.",
        details: (
          <>
            <p>
              Designed a gateway layer that let the product route between Claude 3, GPT-4 Turbo, and
              Gemini 2.5 depending on task, cost, and latency requirements, rather than locking the
              product to a single provider.
            </p>
            <p>
              This abstraction meant the product could adopt a better or cheaper model the moment
              one became available, without a rewrite of the application layer calling it.
            </p>
          </>
        ),
        technologies: ["Claude 3", "GPT-4 Turbo", "Gemini 2.5"],
      },
      {
        id: "iac-delivery",
        title: "Infrastructure & Delivery",
        icon: <CloudDoneIcon fontSize="inherit" />,
        summary:
          "Built the IaC/CDK stack and frontend, enabling daily production deploys by week eight.",
        details: (
          <>
            <p>
              Designed the frontend and built the full IaC/CDK stack — Vite + React on the client,
              DynamoDB for data, Cognito for auth, and CloudFront for delivery — along with the
              CI/CD pipelines to ship it.
            </p>
            <p>
              By week eight the team was deploying to production daily, a deliberate early
              investment in delivery infrastructure that paid for itself almost immediately.
            </p>
          </>
        ),
        technologies: ["Vite", "React", "AWS CDK", "DynamoDB", "Cognito", "CloudFront"],
      },
    ],
  },
  {
    id: "verascore",
    role: "VP Engineering",
    company: "VeraScore",
    duration: "June 2022 - April 2025",
    mission:
      "Led cross-functional engineering efforts to deliver an inclusive, data-forward financial health platform designed to empower underserved communities with access to fair credit. My role combined high-level technical strategy, team leadership, and cross-disciplinary collaboration to build systems that are fast, trustworthy, and deeply human-centered.",
    logoSrc: "/logos/verascore.com.png",
    logoAlt: "VeraScore",
    stats: [
      { label: "<6 months", detail: "prototype to production" },
      { label: "MCP + AI", detail: "early-stage customized insights system" },
      { label: "JAMStack", detail: "cost-efficient, scalable architecture" },
    ],
    pillars: [
      {
        id: "flagship-launch",
        title: "Flagship Platform Launch",
        icon: <RocketLaunchIcon fontSize="inherit" />,
        summary:
          "Architected and led development of VeraScore's flagship financial scoring platform from prototype to production in under six months.",
        details: (
          <>
            <p>
              Architected and led development of VeraScore&apos;s flagship financial scoring
              platform from prototype to production in under six months, directing the end-to-end
              design and implementation.
            </p>
            <p>
              Balanced rapid iteration against long-term architectural resilience throughout — the
              platform needed to move fast as a startup while holding up as a regulated fintech
              product handling sensitive financial data.
            </p>
          </>
        ),
        technologies: ["React", "Node.js", "Next.js", "TypeScript"],
      },
      {
        id: "jamstack-architecture",
        title: "Modern JAMStack Architecture",
        icon: <ArchitectureIcon fontSize="inherit" />,
        summary:
          "Architected a modern JAMStack-based platform with a CI/CD pipeline and cost-efficient cloud infrastructure to support scalable deployment.",
        details: (
          <>
            <p>
              Architected a modern JAMStack-based platform paired with a CI/CD pipeline and
              cost-efficient cloud infrastructure, built to support scalable deployment as a
              multi-tenant B2B2C system serving financial institutions and their end customers.
            </p>
          </>
        ),
        technologies: ["JAMStack", "AWS", "CI/CD", "MUI"],
      },
      {
        id: "early-ai-integration",
        title: "Early AI Integration",
        icon: <SmartToyIcon fontSize="inherit" />,
        summary:
          "Developed an early-stage system leveraging Model Context Protocol (MCP) and AI assistants to provide customized insights.",
        details: (
          <>
            <p>
              Developed an early-stage system leveraging Model Context Protocol (MCP) and AI
              assistants to provide customers with customized financial insights — ahead of MCP
              becoming a widely adopted industry pattern.
            </p>
          </>
        ),
        technologies: ["MCP", "TypeScript"],
      },
      {
        id: "engineering-culture",
        title: "Engineering Culture",
        icon: <GroupsIcon fontSize="inherit" />,
        summary:
          "Cultivated a high-trust engineering culture rooted in curiosity, ownership, and continuous learning.",
        details: (
          <>
            <p>
              Cultivated a high-trust engineering culture rooted in curiosity, ownership, and
              continuous learning — combining high-level technical strategy with team leadership and
              cross-disciplinary collaboration to build systems that are fast, trustworthy, and
              deeply human-centered.
            </p>
          </>
        ),
        technologies: ["Leadership", "Mentorship"],
      },
    ],
  },
  {
    id: "eqis-capital",
    role: "VP Engineering",
    company: "EQIS Capital",
    duration: "August 2017 - November 2022",
    mission:
      "Led high-performing, cross-functional teams across engineering, QA, product management, and UI/UX to modernize and scale our digital investment platform. My focus was on delivering performance-optimized, secure, and user-centric systems through a culture of technical excellence and iterative innovation.",
    logoSrc: "/logos/freedomadvisors.com.webp",
    logoAlt: "EQIS Capital",
    stats: [
      { label: "70%", detail: "operational cost reduction (Project Phoenix)" },
      { label: "4x", detail: "faster time-to-market" },
      { label: "+30%", detail: "system resilience after cloud migration" },
      { label: "25%", detail: "faster release lifecycle" },
    ],
    pillars: [
      {
        id: "project-phoenix",
        title: "Project Phoenix",
        icon: <TrendingUpIcon fontSize="inherit" />,
        summary:
          "Spearheaded Project Phoenix, resulting in a 70% reduction in operational costs and accelerated time-to-market by 4x.",
        details: (
          <>
            <p>
              Spearheaded Project Phoenix, a company-wide initiative that cut operational costs by
              70% and accelerated time-to-market by 4x — the flagship modernization effort of my
              tenure at EQIS Capital.
            </p>
          </>
        ),
        technologies: ["C#", "ASP.NET", "SQL Server"],
      },
      {
        id: "cloud-migration",
        title: "Cloud Migration & Resilience",
        icon: <CloudDoneIcon fontSize="inherit" />,
        summary:
          "Directed a company-wide migration to cloud infrastructure, enhancing deployment agility and improving system resilience by 30%.",
        details: (
          <>
            <p>
              Directed a company-wide migration to cloud infrastructure, enhancing deployment
              agility and improving system resilience by 30% — moving a regulated digital investment
              platform off legacy infrastructure without disrupting the business running on it.
            </p>
          </>
        ),
        technologies: ["Azure", "SQL Server", "Redis"],
      },
      {
        id: "release-security",
        title: "Release Lifecycle & Security",
        icon: <SecurityIcon fontSize="inherit" />,
        summary:
          "Redesigned the feature release lifecycle, cutting time-to-market by 25%, and instituted advanced security protocols platform-wide.",
        details: (
          <>
            <p>
              Redesigned the feature release lifecycle, cutting time-to-market by 25%, and
              instituted advanced security protocols to elevate platform-wide protection against
              cyber threats for a platform handling client investment data.
            </p>
          </>
        ),
        technologies: ["C#", "ASP.NET", "React", "TypeScript"],
      },
      {
        id: "team-culture",
        title: "Team Culture",
        icon: <GroupsIcon fontSize="inherit" />,
        summary:
          "Built a team environment rooted in psychological safety, fast iteration, and shared ownership of outcomes.",
        details: (
          <>
            <p>
              Built a team environment rooted in psychological safety, fast iteration, and shared
              ownership of outcomes across engineering, QA, product management, and UI/UX — the
              cultural foundation that made the technical modernization possible.
            </p>
          </>
        ),
        technologies: ["Leadership", "Agile"],
      },
    ],
  },
  {
    id: "stamps-com",
    role: "Principal Engineer",
    company: "Stamps.com",
    duration: "June 2010 - August 2017",
    mission:
      "Led the development of scalable, user-focused shipping and mailing solutions that merged innovation with operational excellence. My work centered on creating high-impact platforms that optimized global logistics, enhanced user experience, and demonstrated measurable performance and reliability improvements.",
    logoSrc: "/logos/stamps.com.png",
    logoAlt: "Stamps.com",
    stats: [
      { label: "U.S. Patent", detail: "for international shipping innovation" },
      { label: "PC Mag Featured", detail: "DYMO Stamps Online launch" },
      { label: "2x", detail: "WPI best-project wins under mentorship" },
    ],
    pillars: [
      {
        id: "globalpost",
        title: "GlobalPost International Shipping",
        icon: <LocalShippingIcon fontSize="inherit" />,
        summary:
          "Architected and led the development of the GlobalPost system, significantly improving international shipping efficiency.",
        details: (
          <>
            <p>
              Architected and led the development of the GlobalPost system, significantly improving
              international shipping efficiency, and secured a U.S. postal patent for the underlying
              technical innovation.
            </p>
          </>
        ),
        technologies: ["C#", "ASP.NET", "SQL Server"],
      },
      {
        id: "dymo-launch",
        title: "DYMO Stamps Online Launch",
        icon: <NewspaperIcon fontSize="inherit" />,
        summary:
          "Spearheaded the launch of DYMO Stamps Online®, a cloud-native solution praised by PC Mag for its intuitive user experience.",
        details: (
          <>
            <p>
              Spearheaded the launch of DYMO Stamps Online®, a cloud-native solution praised by PC
              Mag for its intuitive user experience — bringing desktop shipping software to the
              browser without sacrificing the workflow professional shippers relied on.
            </p>
          </>
        ),
        technologies: ["C#", "JavaScript", "HTML/CSS"],
      },
      {
        id: "devops-release",
        title: "DevOps & Release Engineering",
        icon: <BuildCircleIcon fontSize="inherit" />,
        summary:
          "Automated deployment pipelines and infrastructure provisioning, elevating release reliability and engineering velocity.",
        details: (
          <>
            <p>
              Automated deployment pipelines and infrastructure provisioning, elevating release
              reliability and engineering velocity, and championed CI/CD and DevOps best practices
              to enhance delivery consistency and operational resilience across the team.
            </p>
          </>
        ),
        technologies: ["CI/CD", "AWS", "Azure"],
      },
      {
        id: "mentorship",
        title: "Mentorship & Talent Development",
        icon: <SchoolIcon fontSize="inherit" />,
        summary:
          "Mentored teams of student engineers from Worcester Polytechnic University (WPI), who won best project two years running.",
        details: (
          <>
            <p>
              Mentored teams of student engineers from Worcester Polytechnic University (WPI) on
              their Major Qualifying Projects — under that advisement, teams won best project two
              years running.
            </p>
          </>
        ),
        technologies: ["Mentorship"],
      },
    ],
  },
];
