import { Project } from "../Project";
import { Technology } from "../../constants/TechnologyEnum";
import { FreedomAdvisorsTechMap } from "@/constants/freedom";

const ProjectEqisCapital: Project = {
  businessTerms: ["TAMP", "Portfolio Management", "Private Label"],
  businessView: (
    <>
      <p className="mb-2">
        <strong>Problem:</strong> Registered Investment Advisors (RIAs) and
        financial advisors face fragmented technology, time-consuming
        operations, and limited flexibility when managing client portfolios and
        scaling their practices.
      </p>
      <p className="mb-2">
        <strong>Purpose:</strong> EqisCapital (now part of Freedom Advisors)
        delivers a unified, private-labeled turnkey asset management platform
        (TAMP) that empowers advisors to operate efficiently, deliver superior
        results for clients, and build equity in their businesses.
      </p>
      <p className="mb-2">
        <strong>Business Solution:</strong> The platform consolidates portfolio
        management, trading, reporting, account opening, and model marketplace
        access into a seamless, flexible system. Advisors can focus on client
        relationships and growth, while operational complexity is handled by
        expert support staff and robust automation.
      </p>
    </>
  ),
  title: "Freedom Advisors Wealth Management",
  companyUrl: "https://freedomadvisors.com/platform/",
  description: (
    <>
      <p className="mb-2">
        Freedom Advisors is a next-generation TAMP offering RIAs and advisors a
        comprehensive, cloud-based platform to power their practices. Accessible
        from any device and fully private-labeled, it unifies all aspects of
        portfolio management, trading, reporting, and client service.
      </p>
      <p className="mb-2">
        Key features include robust client and household-level reporting,
        real-time portfolio performance, transaction history, and document
        management. Advisors benefit from a marketplace of over 100 model
        providers and 600+ curated investment models, with deep due diligence
        handled by the platform.
      </p>
      <p className="mb-2">
        High-touch operational support covers portfolio construction, systematic
        trading, rebalancing, drift tracking, account opening, and custodian
        management. The platform's flexible architecture enables advisors to
        scale efficiently, deliver results, and focus on building lasting client
        relationships and equity value.
      </p>
      <p className="mb-2">
        <strong>Role:</strong> As VP Engineering, led the design and delivery of
        scalable cloud infrastructure, advisor and client portals, secure data
        integrations, and automated workflows powering the EqisCapital platform.
      </p>
    </>
  ),
  // Updated to a generic WealthTech/cloud platform illustration
  image: "/wealthtech_project.webp",
  technologies: [
    Technology.React,
    Technology.TypeScript,
    Technology.DotNet,
    Technology.CSharp,
    Technology.AWS,
    Technology.Nodejs,
    Technology.SQLServer,
    Technology.Microservices,
  ],
  featured: true,
  details: (
    <>
      <h3 className="font-semibold text-lg mb-1">Key Architecture</h3>
      <ul className="list-disc ml-6 text-700 mb-2">
        <li>Cloud-native, multi-tenant SaaS architecture</li>
        <li>Advisor and client portals with role-based access</li>
        <li>Automated trading, rebalancing, and drift alerts</li>
        <li>Real-time portfolio and performance reporting</li>
        <li>Integrated model marketplace with due diligence</li>
        <li>Secure custodial and third-party data integrations</li>
      </ul>
    </>
  ),
  showDemoButton: false,
  showCodeButton: false,
  techIconMap: FreedomAdvisorsTechMap,
  // Updated to use the official Freedom Advisors favicon as a logo
  companyIcon: "/freedomadvisors-favicon.webp",
  companyName: "Freedom Advisors",
  demo: "",
  index: 3,
  keyArchitecture: `
Cloud-native SaaS, multi-tenant
Advisor/client portals, RBAC
Automated trading, rebalancing, drift alerts
Integrated model marketplace, secure data pipelines
`,
  resultsImpact: `
Enabled advisors to scale practices and build equity value
Reduced operational burden through automation and expert support
Delivered flexible, branded platforms for differentiated client service
Supported billions in AUA and thousands of advisors nationwide
`,
  archImage: "/freedom_advisors_architecture.svg",
};

export default ProjectEqisCapital;
