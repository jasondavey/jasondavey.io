import { Project } from "../Project";
import { VerascoreTechMap } from "@/constants/verascore";
import { Technology } from "../../constants/TechnologyEnum";

const ProjectVerascore: Project = {
  businessView: (
    <>
      <p className="mb-2">
        <strong>Problem:</strong> Many consumers and small businesses are
        excluded from fair access to credit due to traditional credit scoring
        models that fail to consider broader financial behaviors and alternative
        data sources. This perpetuates inequities in lending and limits
        opportunities for financial growth.
      </p>
      <p className="mb-2">
        <strong>Purpose:</strong> VeraScore aims to democratize financial health
        assessment by leveraging alternative data, advanced analytics, and a
        multi-tenant cloud platform. The goal is to empower lenders with more
        holistic, equitable, and data-driven decision-making tools, while
        providing end-users with actionable insights to improve their financial
        well-being.
      </p>
      <p className="mb-2">
        <strong>Business Solution:</strong> By offering a B2B2C SaaS platform,
        VeraScore enables financial institutions to launch branded, compliant,
        and secure financial health scoring solutions. The platform supports
        rapid onboarding, robust partner management, and seamless integration
        with leading data providers, delivering measurable impact for both
        lenders and consumers.
      </p>
    </>
  ),
  title: "Financial Health Scoring Platform",
  companyUrl: "https://www.myverascore.com/",
  description: (
    <>
      <p className="mb-2">
        The VeraScore platform is architected as a multi-tenant{" "}
        <strong>business-to-business-to-consumer</strong> (B2B2C) system,
        enabling financial institutions and other partners to operate branded
        deployments of the service within a shared infrastructure.
      </p>
      <p className="mb-2">
        The system provisions each partner with a dedicated application suite,
        consisting of a customer onboarding and dashboard interface (end-user
        experience), a lender interface for member aggregation, and an
        administrative control panel. Each application is deployed under an
        isolated subdomain (e.g., <i>foobank.myverascore.com</i>) to support
        logical separation and branding.
      </p>
      <p className="mb-2">
        Configuration and metadata for each partner are centrally managed via a
        Client Registry. The system enforces tenant isolation through per-tenant
        child databases in Fauna, combined with scoped access configurations
        defined in Auth0.
      </p>
      <p className="mb-2">
        Authentication and authorization are implemented through Auth0,
        utilizing OAuth2 protocols, refresh token lifecycles, and role-based
        access control (RBAC). The backend is composed of two core service
        layers: the SPA API, which handles user-centric operations such as
        onboarding, two-factor authentication (2FA), and profile management; and
        the Integrations API, which coordinates with external providers (e.g.,
        Plaid for financial data ingestion, Equifax for credit checks, and
        Twilio for secure communications).
      </p>
      <p className="mb-2">
        The system is designed with a strong emphasis on data privacy, security,
        and multi-tenant isolation. Personally identifiable information (PII)
        and sensitive financial data are siloed at the tenant level to ensure
        regulatory compliance and reduce risk exposure.
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
