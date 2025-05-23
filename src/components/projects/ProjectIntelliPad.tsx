import { Project } from "../Project";
import { Technology } from "../../constants/TechnologyEnum";

const ProjectIntelliPad: Project = {
  startYear: 2001,
  endYear: 2006,
  businessTerms: [
    "Legal CRM",
    "Enterprise Solution",
    "Outlook Integration",
    "Contact Management",
  ],
  businessView: (
    <>
      <p className="mb-2">
        <strong>Problem:</strong> Law firms needed a specialized CRM system that
        could integrate with Microsoft Outlook, maintain consistent contact
        information, and provide advanced marketing capabilities.
      </p>
      <p className="mb-2">
        <strong>Purpose:</strong> To create an enterprise-level contacts
        management system specifically designed for law firms that would
        integrate seamlessly with Microsoft Outlook while providing robust
        marketing and business development tools.
      </p>
      <p className="mb-2">
        <strong>Business Solution:</strong> Developed IntelliPad CRM, a
        comprehensive enterprise contacts management web application that
        integrates with Microsoft Outlook, enables consistent contact
        information across the firm, and provides advanced marketing
        capabilities including event management, mailing campaigns, and business
        development tracking.
      </p>
    </>
  ),
  title: "IntelliPad CRM",
  description: (
    <>
      <p className="mb-2">
        As the Technical Lead for IntelliPad CRM, I led the development of an
        enterprise contacts management web application specifically designed for
        law firms. This comprehensive system was built using a multi-language
        architecture with ColdFusion, Visual Basic, and Java to address the
        complex needs of legal marketing departments.
      </p>
      <p className="mb-2">
        A key technical challenge was creating reliable integration with
        Microsoft Exchange in clustered environments. I rewrote the underlying
        Microsoft Exchange Event Sink in Visual Basic to support clustered
        Exchange environments, ensuring seamless synchronization of contact data
        across the firm while maintaining data integrity.
      </p>
      <p className="mb-2">
        The system provides law firms with a centralized platform for managing
        contacts, tracking marketing activities, and developing business
        opportunities. It features HTML-formatted email campaigns, event
        management, opportunity tracking, and detailed analytics with visual
        reporting tools.
      </p>
      <p className="mb-2">
        <strong>Role:</strong> As Technical Lead, I managed a team of
        ColdFusion, Java, and Visual Basic engineers while establishing
        development practices and client relationships. I implemented critical
        infrastructure including domain networking, security protocols, and
        database backup procedures. Additionally, I developed new tools for the
        corporate website, including an online file management system for client
        access and an enhancement/bugs tracking system.
      </p>
    </>
  ),
  image: "/versys_splash.webp",
  videoUrl: "",
  technologies: [
    Technology.DotNet,
    Technology.CSharp,
    Technology.SQLServer,
    Technology.Nodejs,
    Technology.AWS,
  ],
  featured: true,
  details: (
    <>
      <h3 className="font-semibold text-lg mb-1">Key Technical Achievements</h3>
      <ul className="list-disc ml-6 text-700 mb-2">
        <li>
          Rewrote Microsoft Exchange Event Sink in Visual Basic to support
          clustered environments
        </li>
        <li>Developed online file management system for client file access</li>
        <li>Created enhancement/bugs entry and reporting system</li>
        <li>
          Established development lifecycle, source-code practices, and reusable
          component libraries
        </li>
        <li>
          Configured domain networking, administration, security, and database
          backup procedures
        </li>
      </ul>
    </>
  ),
  showDemoButton: false,
  showCodeButton: false,
  externalLinks: [
    {
      url: "https://intellipadcrm.com/",
      label: "IntelliPad CRM Website",
    },
  ],
  techIconMap: {},
  companyIcon: "/logos/versys_logo.webp",
  darkModeCompanyIcon: "/versys_logo_light.webp",
  companyName: "Versys",
  companyUrl: "https://intellipadcrm.com/",
  demo: "",
  index: 0, // Keeping index for backward compatibility
  keyArchitecture: `
Multi-language architecture (ColdFusion, Visual Basic, Java)
Microsoft Exchange integration with custom Event Sink
Centralized SQL Server database for contact information
Web-based interface with advanced reporting capabilities
Support for clustered Exchange Server environments
`,
  resultsImpact: `
Successfully deployed to law firms across the US and Canada
Enabled consistent contact information management across entire firms
Improved marketing effectiveness through data-driven insights
Streamlined business development processes with opportunity tracking
Reduced administrative overhead for contact management
`,
  archImage: "", // You may want to create an architecture diagram for this project
};

export default ProjectIntelliPad;
