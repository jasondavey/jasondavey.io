import { Project } from "../Project";
import { VerascoreTechMap } from "@/constants/verascore";
import { Technology } from "../../constants/TechnologyEnum";

const ProjectVerascore: Project = {
  businessTerms: ["PaaS", "B2B2C", "Fair Lending", "Holistic Scoring"],
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
  details: <></>,
  companyIcon: "/verascore.png",
  companyName: "VeraScore",
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
  resultsImpact: (
    <div className="space-y-8">
      {/* Partners Section */}
      <div>
        <h4 className="font-semibold mb-2 text-foreground">
          For Partners (Financial Institutions, Fintechs, Credit Unions)
        </h4>
        <ul className="list-disc ml-6 text-foreground space-y-3 mb-4">
          <li>
            <strong>Launch Inclusive Financial Products Quickly:</strong>{" "}
            Partners can offer branded financial tools that promote equitable
            access, leveraging VeraScore’s infrastructure to serve markets often
            overlooked by traditional credit systems.
          </li>
          <li>
            <strong>Data-Driven, Responsible Lending:</strong> Through
            integrations with alternative data providers like Plaid and Equifax,
            institutions can make more holistic and accurate credit decisions —
            not solely based on traditional FICO scores — improving both risk
            management and fairness.
          </li>
          <li>
            <strong>Expand Market Reach:</strong> By lowering the barrier to
            entry for creditworthy individuals with limited traditional credit
            history, partners can tap into previously underserved segments,
            opening up new revenue channels while contributing to financial
            equity.
          </li>
          <li>
            <strong>Stay Compliant and Secure at Scale:</strong> Advanced
            multi-tenant isolation and regulatory-grade data handling ensure
            partners can scale outreach while maintaining rigorous privacy and
            compliance standards.
          </li>
        </ul>
      </div>
      <hr className="my-4 border-t border-gray-200" />
      {/* End Users Section */}
      <div>
        <h4 className="font-semibold mb-2 text-foreground">
          For End Users (Consumers of Partner Services)
        </h4>
        <ul className="list-disc ml-6 text-foreground space-y-3 mb-4">
          <li>
            <strong>Access to Fair Credit Opportunities:</strong> Individuals
            with limited credit history but strong financial behaviors (e.g.,
            consistent cash flow, bill payments) can be fairly evaluated, giving
            them a real chance to access credit, build financial stability, and
            thrive.
          </li>
          <li>
            <strong>Dignified Digital Experience:</strong> By interacting with a
            trusted, branded interface—often their existing financial
            provider—users feel respected and empowered rather than excluded or
            misjudged by legacy systems.
          </li>
          <li>
            <strong>Transparent, Secure Engagement:</strong> Through the use of
            OAuth2, role-based access control (RBAC), and industry-standard
            encryption, users can confidently share personal and financial
            information in exchange for meaningful financial opportunities.
          </li>
        </ul>
      </div>
      <hr className="my-4 border-t border-gray-200" />
      {/* Lenders & Admins Section */}
      <div>
        <h4 className="font-semibold mb-2 text-foreground">
          For Lenders and Administrators (Internal Users of Partner
          Organizations)
        </h4>
        <ul className="list-disc ml-6 text-foreground space-y-3 mb-4">
          <li>
            <strong>Equity-Aligned Underwriting Tools:</strong> The lender
            interface aggregates user data in a way that supports nuanced and
            responsible decision-making, enabling staff to see the full
            financial picture—not just credit scores.
          </li>
          <li>
            <strong>Configurable Lending Policies:</strong> Administrators can
            adjust lending logic and risk thresholds within a centralized
            registry, allowing for tailored credit products aimed at specific
            communities or borrower profiles.
          </li>
          <li>
            <strong>Improved Efficiency with Impact:</strong> Staff are equipped
            with tools that not only streamline operations but also directly
            contribute to fairer lending outcomes and better borrower-lender
            relationships.
          </li>
        </ul>
      </div>
    </div>
  ),
  archImage: "./verascore_architecture.png",
};

export default ProjectVerascore;
