import { Project } from "../Project";
import { Technology } from "../../constants/TechnologyEnum";

const ProjectDymoStamps: Project = {
  businessTerms: [
    "Postal Solutions",
    "Cloud-Native",
    "SaaS Platform",
    "Patented Technology",
  ],
  businessView: (
    <>
      <p className="mb-2">
        <strong>Problem:</strong> Small businesses and home office users needed
        a convenient way to print postage without expensive hardware or trips to
        the post office.
      </p>
      <p className="mb-2">
        <strong>Purpose:</strong> To create a cloud-native postage printing
        solution that's secure, user-friendly, and accessible to users with DYMO
        label printers.
      </p>
      <p className="mb-2">
        <strong>Business Solution:</strong> Designed and delivered DYMO Stamps
        Online®, a patented web-based solution for printing postage that earned
        recognition from PC Mag for its convenience and user-friendly interface.
      </p>
    </>
  ),
  title: "DYMO Stamps Online®",
  description: (
    <>
      <p className="mb-2">
        As the inventor of a patented online postage system (US Patent
        11037223B1), I designed and implemented a secure web-based solution for
        printing postage that balances security requirements with user
        experience.
      </p>
      <p className="mb-2">
        The system addresses critical security concerns in online postage
        printing by implementing a novel approach to client-side validation that
        prevents offline abuse while maintaining a seamless user experience. The
        patent covers a method for conducting web-based postage transactions
        with built-in validation checks, ensuring each revenue-generating
        request meets strict security protocols.
      </p>
      <p className="mb-2">
        This innovation became the foundation for DYMO Stamps Online®, a
        cloud-native postage printing solution designed specifically for small
        businesses and home office users with DYMO label printers. The platform
        earned recognition from PC Mag, which praised its convenience compared
        to visiting a post office and its user-friendly interface for printing
        postage.
      </p>
      <p className="mb-2">
        <strong>Role:</strong> As the primary inventor on the patent, I
        architected the solution, led its implementation, and designed the
        security protocols that balanced USPS requirements with a frictionless
        user experience. Read the full patent at{" "}
        <a
          href="https://patents.google.com/patent/US11037223B1/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          US11037223B1
        </a>{" "}
        and the PC Mag review at{" "}
        <a
          href="https://www.pcmag.com/archive/dymo-stamps-online-303933"
          target="_blank"
          rel="noopener noreferrer"
        >
          PC Mag
        </a>
        .
      </p>
    </>
  ),
  image: "",
  videoUrl: "https://www.youtube.com/watch?v=ZmZoSsFlU_o",
  technologies: [
    Technology.TypeScript,
    Technology.AWS,
    Technology.Nodejs,
    Technology.React,
    Technology.Docker,
    Technology.DotNet,
  ],
  featured: true,
  details: (
    <>
      <h3 className="font-semibold text-lg mb-1">Key Technical Achievements</h3>
      <ul className="list-disc ml-6 text-700 mb-2">
        <li>
          Secured US Patent 11037223B1 for a system and method of printing
          postage
        </li>
        <li>
          Designed secure client-server architecture that prevents offline abuse
        </li>
        <li>
          Created web-based applet system for reliable printer integration
        </li>
        <li>
          Implemented validation checks for revenue-generating transactions
        </li>
        <li>Developed solution compatible with USPS security requirements</li>
      </ul>

      <div className="mt-4 flex flex-col sm:flex-row gap-3">
        <a
          href="https://patents.google.com/patent/US11037223B1/en"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-engineering-accent text-white rounded-md hover:bg-engineering-accent-hover transition-colors inline-flex items-center gap-2 font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          View Patent
        </a>
        <a
          href="https://www.pcmag.com/archive/dymo-stamps-online-303933"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-800 transition-colors inline-flex items-center gap-2 font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
          Read PC Mag Review
        </a>
      </div>
    </>
  ),
  showDemoButton: false,
  showCodeButton: false,
  externalLinks: [
    {
      url: "https://patents.google.com/patent/US11037223B1/en",
      label: "Patent US11037223B1",
    },
    {
      url: "https://www.pcmag.com/archive/dymo-stamps-online-303933",
      label: "PC Mag Review",
    },
  ],
  techIconMap: {},
  companyIcon: "./logos/stamps.com.png",
  companyName: "Stamps.com",
  companyUrl: "https://www.stamps.com",
  demo: "",
  startYear: 2010,
  endYear: 2017,
  index: 3, // Keeping index for backward compatibility
  keyArchitecture: `
Secure web-based architecture with client-side validation
Custom browser applet for reliable printer integration
Real-time verification and transaction validation
USPS-compliant postage generation system
`,
  resultsImpact: `
Secured US Patent 11037223B1 for innovative approach to online postage
Received positive review from PC Mag highlighting convenience and usability
Enabled small businesses to print postage without expensive hardware
Created user-friendly solution that met strict USPS security requirements
`,
  archImage: "/architecture/stamps_dso_architecture.svg", // Updated architecture diagram based on patent
};

export default ProjectDymoStamps;
