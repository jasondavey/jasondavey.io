import { Project } from "../Project";
import { Technology } from "../../constants/TechnologyEnum";

// Define the tech icons map for BlackRock project
const BlackRockTechMap = {
  [Technology.Java]: {
    category: "Language",
    icon: <span className="text-red-500">☕</span>,
    url: "https://www.java.com/",
  },
  [Technology.JavaScript]: {
    category: "Language",
    icon: <span className="text-yellow-500">JS</span>,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  [Technology.Spring]: {
    category: "Framework",
    icon: <span className="text-green-500">🍃</span>,
    url: "https://spring.io/",
  },
  [Technology.SQL]: {
    category: "Database",
    icon: <span className="text-blue-500">SQL</span>,
    url: "https://www.mysql.com/",
  },
  [Technology.Selenium]: {
    category: "Testing",
    icon: <span className="text-green-600">Se</span>,
    url: "https://www.selenium.dev/",
  },
  [Technology.ContinuousIntegration]: {
    category: "DevOps",
    icon: <span className="text-blue-500">CI</span>,
    url: "https://www.jenkins.io/",
  },
};

const ProjectBlackRock: Project = {
  industry: "Fintech",
  startYear: 2008,
  endYear: 2010,
  businessTerms: [
    "Financial Services",
    "Asset Management",
    "Enterprise Software",
    "Cost Optimization",
    "Finance", // Added explicit finance term
  ],
  businessView: (
    <>
      <p className="mb-2">
        <strong>Problem:</strong> BlackRock faced substantial unnecessary
        software licensing costs due to unused or underutilized applications on
        corporate desktops, with no automated way to track and manage these
        licenses.
      </p>
      <p className="mb-2">
        <strong>Purpose:</strong> To implement an automated license control
        system that could identify and manage application installations,
        tracking usage patterns and automatically uninstalling applications that
        exceeded business thresholds for inactivity.
      </p>
      <p className="mb-2">
        <strong>Business Solution:</strong> Developed a sophisticated software
        license control system that automatically tracked application usage and
        reclaimed licenses for unused software, resulting in thousands of
        dollars in cost savings across corporate desktops.
      </p>
    </>
  ),
  title: "Enterprise Software License Control System",
  description: (
    <>
      <p className="mb-2">
        At BlackRock, a global financial services and asset management leader, I
        developed a comprehensive software license control system to address the
        challenge of managing expensive software licenses across the
        organization. This system automated the identification of application
        installations, tracked usage patterns, and automatically uninstalled
        applications when they exceeded predefined business thresholds for
        inactivity.
      </p>
      <p className="mb-2">
        The solution resulted in significant cost savings by reclaiming unused
        licenses and providing detailed analytics on software utilization
        throughout the enterprise. This data-driven approach enabled more
        strategic decisions about software investments and standardization.
      </p>
      <p className="mb-2">
        Beyond this project, as Technical Lead, I initiated and led a
        comprehensive review and overhaul of the Software Development Life Cycle
        (SDLC) process, resulting in the successful renewal of standards and
        processes in July 2009. I also architected and led engineering teams in
        implementing various web-based, globally distributed systems.
      </p>
      <p className="mb-2">
        <strong>Role:</strong> As Technical Lead, I drove architectural design
        based on object-oriented principles and patterns modeling, managed the
        in-house applications framework ("commons"), and ensured engineering
        quality through disciplined approaches to best practices including unit
        testing, code quality control, automated deployment, continuous
        integration, and UI testing.
      </p>
    </>
  ),
  image: "/splash/blackrock_splash.jpg",
  technologies: [
    Technology.Java,
    Technology.JavaScript,
    Technology.Spring,
    Technology.SQL,
    Technology.Selenium,
    Technology.ContinuousIntegration,
  ],
  featured: true,
  details: (
    <>
      <h3 className="font-semibold text-lg mb-1">Key Technical Achievements</h3>
      <ul className="list-disc ml-6 text-700 mb-2">
        <li>
          Designed and implemented automated software license tracking and
          management system
        </li>
        <li>
          Led comprehensive SDLC process overhaul, resulting in renewed
          standards
        </li>
        <li>Architected globally distributed web-based systems</li>
        <li>
          Implemented best practices for code quality including unit testing,
          code reviews, and automated testing
        </li>
        <li>
          Established continuous integration pipeline for faster and more
          reliable deployments
        </li>
        <li>
          Led technical documentation efforts supporting all SDLC requirements
        </li>
        <li>Served as active member of the GSS architecture and SOA teams</li>
      </ul>
    </>
  ),
  showDemoButton: false,
  showCodeButton: false,
  techIconMap: BlackRockTechMap,
  companyIcon: "./logos/blackrock.com.png",
  companyName: "BlackRock",
  companyUrl: "https://www.blackrock.com",
  demo: "",
  businessSplashImage: "/splash/blackrock_splash.jpg",
  keyArchitecture: `
Centralized license tracking and management system
Automated threshold-based license reclamation
Enterprise-wide deployment with minimal performance impact
Integration with desktop management systems
`,
  resultsImpact: `
Saved thousands of dollars by automatically reclaiming unused software licenses
Successfully overhauled SDLC process with renewed standards in July 2009
Improved engineering quality through implementation of best practices and testing frameworks
Established architectural foundations for globally distributed systems
`,
};

export default ProjectBlackRock;
