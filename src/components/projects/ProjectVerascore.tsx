import { Project } from "../Project";
import { VerascoreTechMap } from "@/constants/verascore";
import { Technology } from "../../constants/TechnologyEnum";

const ProjectVerascore: Project = {
  title: "Financial Health Scoring Platform",
  companyUrl: "https://www.myverascore.com/",
  description: (
    <>
      <p className="mb-2">
        VeraScore is a multi-tenant{" "}
        <strong>business to business to consumer</strong> (B2B2C) platform
        designed to empower partners — financial institutions to launch their
        own branded version of the platform.
      </p>
      <p className="mb-2">
        Each partner is provisioned with a set of applications including a
        customer facing onboarding and dashboard (end-user experience), a
        Lenders (aggregated member interface), and an Administrator
        application. Each deployed under a unique subdomain (e.g.,
        foobank.myverascore.com).
      </p>
      <p className="mb-2">
        Partner-specific data configurations are managed centrally in a Client
        Registry, while tenant isolation is enforced via dedicated child
        databases in Fauna and scoped configuration in Auth0.
      </p>
      <p className="mb-2">
        The platform’s authentication and authorization are managed by Auth0,
        utilizing OAuth2 flows, refresh tokens, and role-based access control
        (RBAC) across all front-end applications. APIs are structured into two
        primary services: the SPA API, responsible for core user operations
        like onboarding, 2FA, and profile management, and the Integrations
        API, which orchestrates third-party services such as Plaid for
        transaction ingestion, Equifax for soft credit pulls, and Twilio for
        secure user communication.{' '}
      </p>
      <p className="mb-2">
        Data privacy and isolation are a top priority, with personally
        identifiable information (PII) and financial data siloed per tenant.
      </p>
    </>
  ),
  image: "./verascore_dashboard.png",
  technologies: [
    Technology.React,
    Technology.Ionic,
    Technology.TypeScript,
    Technology.Netlify,
    Technology.FaunaDB,
    Technology.Auth0,
    Technology.Plaid,
    Technology.Twilio,
    Technology.Mailgun,
    Technology.Datadog,
    Technology.CRS,
  ],
  github: "https://github.com/myverascore",
  demo: "https://www.myverascore.com/how-it-works",
  featured: true,
  details: (
    <>
      <h3 className="font-semibold text-lg mb-1">Key Architecture</h3>
      <ul className="list-disc ml-6 text-gray-700 mb-2">
        <li>Three React SPAs (Members, Lenders, Tardis)</li>
        <li>Centralized Auth (Auth0, RBAC, OAuth2)</li>
        <li>FaunaDB for tenant-isolated data; S3 for file storage</li>
        <li>Integrations: Plaid, Equifax, Twilio, Mailgun, Datadog</li>
      </ul>
      <h3 className="font-semibold text-lg mb-1">Results & Impact</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Broader, fairer lending decisions</li>
        <li>Improved onboarding with SMS and address verification</li>
      </ul>
    </>
  ),
  companyIcon: "/verascore.png",
  showDemoButton: false,
  showCodeButton: false,
  techIconMap: VerascoreTechMap,
  index: 1,
  keyArchitecture: `
Three React SPAs (Members, Lenders, Tardis)
Centralized Auth (Auth0, RBAC, OAuth2)
FaunaDB for tenant-isolated data; S3 for file storage
Integrations: Plaid, Equifax, Twilio, Mailgun, Datadog
`,
  resultsImpact: `
Broader, fairer lending decisions
Improved onboarding with SMS and address verification
`,
  archImage: "verascore_architecture.png",
};

export default ProjectVerascore;
