import { Project } from "../Project";
import { Technology } from "../../constants/TechnologyEnum";
import { StampsComTechMap } from "@/constants/stamps";

const ProjectStampsCom: Project = {
  startYear: 2010,
  endYear: 2017,
  businessTerms: [
    "Shipping & Logistics",
    "Postal Solutions",
    "Global Delivery",
    "E-commerce",
  ],
  businessView: (
    <>
      <p className="mb-2">
        <strong>Problem:</strong> Small businesses and enterprises faced
        inefficient, costly international shipping processes, while DYMO printer
        users lacked a seamless cloud-native solution for postage printing.
      </p>
      <p className="mb-2">
        <strong>Purpose:</strong> To create scalable, user-focused shipping and
        mailing platforms that optimize global logistics while providing
        intuitive, accessible experiences for diverse customer segments.
      </p>
      <p className="mb-2">
        <strong>Business Solution:</strong> Designed and delivered the
        GlobalPost system with patented technology for international shipping
        efficiency, while launching DYMO Stamps Online®—a cloud-native solution
        recognized by PC Mag for its excellence in the small business market.
      </p>
    </>
  ),
  title: "Global Shipping & Mailing Platforms",
  description: (
    <>
      <p className="mb-2">
        As Principal Engineer at Stamps.com in Mountain View, I led the
        development of scalable, user-focused shipping and mailing solutions
        that merged innovation with operational excellence. My work centered on
        creating high-impact platforms that optimized global logistics, enhanced
        user experience, and delivered measurable performance improvements.
      </p>
      <p className="mb-2">
        The GlobalPost system represented a significant architectural
        advancement in international shipping, combining domestic postage
        generation with intelligent international routing. The system's novel
        approach to cross-border logistics was innovative enough to secure a
        U.S. postal patent for its technical implementation.
      </p>
      <p className="mb-2">
        Concurrently, I spearheaded the launch of DYMO Stamps Online®, a
        cloud-native solution designed specifically for small business and home
        office users with DYMO label printers. This platform earned recognition
        from PC Mag for its intuitive interface and accessibility.
      </p>
      <p className="mb-2">
        <strong>Role:</strong> As Principal Engineer, I architected both
        solutions, led cross-functional teams through implementation, and
        established crucial DevOps practices including automated deployment
        pipelines and infrastructure provisioning that significantly improved
        release reliability.
      </p>
    </>
  ),
  image: "",
  videoUrl: "https://www.youtube.com/watch?v=ainv0oVYDMs",
  technologies: [
    Technology.React,
    Technology.AWS,
    Technology.Docker,
    Technology.PostgreSQL,
    Technology.Nodejs,
    Technology.TypeScript,
    Technology.CSharp,
    Technology.DotNet,
    Technology.Terraform,
    Technology.Microservices,
  ],
  featured: true,
  details: (
    <>
      <h3 className="font-semibold text-lg mb-1">Key Technical Achievements</h3>
      <ul className="list-disc ml-6 text-700 mb-2">
        <li>
          Built cloud-native architecture for DYMO Stamps Online® platform
        </li>
        <li>Implemented CI/CD pipelines for improved release reliability</li>
        <li>Automated infrastructure provisioning with Terraform</li>
        <li>
          Designed high-performance APIs for time-sensitive postal transactions
        </li>
        <li>Created responsive, accessible UIs for diverse user bases</li>
      </ul>
    </>
  ),
  showDemoButton: false,
  showCodeButton: false,
  techIconMap: StampsComTechMap,
  companyIcon: "./logos/stamps.com.png",
  companyName: "Stamps.com",
  companyUrl: "https://www.stamps.com",
  demo: "",
  index: 5, // Adjust as needed based on where you want this to appear
  keyArchitecture: `
Microservices architecture with distributed transaction coordination
Secure, high-performance APIs handling time-sensitive postal transactions
High-availability system design with active monitoring
`,
  resultsImpact: `
Successfully launched GlobalPost system optimizing international shipping
Released DYMO Stamps Online® to critical acclaim from PC Mag reviewers
Accelerated engineering velocity with DevOps practices and infrastructure automation
Delivered intuitive UX with focus on performance and service quality for compliant postal transactions
`,
  archImage: "/architecture/stamps_architecture.svg", // Architecture diagram
};

export default ProjectStampsCom;
