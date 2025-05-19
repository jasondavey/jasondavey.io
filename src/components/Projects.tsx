import ProjectCard from "@/components/ProjectCard";
import { VideoSanitizerTechMap } from "@/constants/video";
import { VerascoreTechMap } from "@/constants/verascore";

const projects = [
  {
    title: "Financial Health Scoring Platform",
    description: (
      <>
        <p className="mb-2">
          VeraScore is a multi-tenant{" "}
          <strong>business to business to consumer</strong> (B2B2C) platform
          designed to empower partners—such as fintechs, lenders, or financial
          coaches—to launch their own branded version of the product.
        </p>
        <p className="mb-2">
          Each partner is provisioned with a set of customized React single-page
          applications (SPAs) including Members (end-user experience), Lenders
          (financial services interface), and Tardis (admin console), each
          deployed under a unique subdomain (e.g., partner-y.myverascore.com).
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
          secure user communication.{" "}
        </p>
        <p className="mb-2">
          Data privacy and isolation are a top priority, with personally
          identifiable information (PII) stored in Auth0 and financial data
          siloed per tenant in Fauna databases.
        </p>
      </>
    ),
    image: "./verascore_dashboard.png",
    technologies: [
      "React",
      "Ionic",
      "TypeScript",
      "Netlify",
      "FaunaDB",
      "Auth0",
      "Plaid",
      "Twilio",
      "Mailgun",
      "Datadog",
      "CRS",
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
  },
  {
    title: "Video Profanity & Captioning Pipeline",
    description: (
      <>
        <p className="mb-2">
          This project delivers an automated video sanitization pipeline that
          programmatically detects, censors, and subtitles spoken profanity in
          video content. Designed for scale and precision, the system ingests a
          video file, transcribes it using Amazon Transcribe, analyzes
          timestamps of offensive terms, and produces a final output where those
          terms are masked with beeps and accurately reflected in subtitles. The
          result is a viewer-safe video experience without requiring manual
          editing or intervention.
        </p>
        <p className="mb-2">
          From a technical perspective, the pipeline leverages AWS Lambda for
          modular processing, S3 for asset storage, FFmpeg for audio
          manipulation, and a custom profanity filter to generate time-based
          audio overlays. A key innovation was dynamically generating sine wave
          beeps aligned to spoken word timings and overlaying them
          precisely—muting the original speech during those windows using FFmpeg
          filters. The system was also enhanced to create structured S3
          directories per video request to group original inputs, intermediates,
          subtitles, and final output, greatly simplifying asset traceability
          and management.
        </p>
        <p>
          In terms of business value, this system enables scalable and automated
          content moderation, ideal for platforms, publishers, or learning
          providers needing to make videos safe for broader audiences without
          expensive manual review. It supports extensibility—such as custom word
          filters, localized audio cues, or AI-enhanced profanity
          detection—making it a foundation for broader content governance
          solutions.
        </p>
      </>
    ),
    image: "./video_sanitize.png",
    technologies: [
      "AWS Lambda",
      "Amazon S3",
      "Amazon Transcribe",
      "TypeScript",
      "Nodejs",
      "FFmpeg",
      "Bash",
      "WebVTT",
      "JSON",
    ],
    github: "https://github.com/jasondavey/videokilledtheradiostar",
    featured: true,
    details: (
      <>
        <h3 className="font-semibold text-lg mb-1">Key Architecture</h3>
        <ul className="list-disc ml-6 text-gray-700 mb-2">
          <li>
            Serverless AWS Lambda pipeline: ingest, transcribe, process, and
            output video
          </li>
          <li>Amazon S3 for all asset storage and lifecycle management</li>
          <li>FFmpeg for precise audio redaction and subtitle overlay</li>
          <li>Custom profanity filter with time-aligned beep overlays</li>
          <li>Structured S3 directories for traceable asset management</li>
        </ul>
        <h3 className="font-semibold text-lg mb-1">Results & Impact</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Automated, scalable content moderation for video platforms</li>
          <li>
            Manual editing eliminated; rapid turnaround for large video
            libraries
          </li>
          <li>Extensible: supports custom filters, cues, and AI enhancement</li>
        </ul>
      </>
    ),
    showDemoButton: false,
    showCodeButton: true,
    techIconMap: VideoSanitizerTechMap,
  },
  // ...other projects
];

const Projects = () => (
  <section id="projects" className="bg-background">
    <div className="section-container">
      <div
        className="text-center mb-16 animate-fade-in opacity-0"
        style={{ animationDelay: "0.2s" }}
      >
        <h2 className="heading-lg inline-flex items-center">
          <span className="text-engineering-accent mr-3">03.</span>
          Portfolio of Work
        </h2>
        <p className="mt-4 text-engineering-gray max-w-2xl mx-auto">
          A selection of my recent projects. Each project presented unique
          challenges and opportunities to learn and grow.
        </p>
        <hr className="my-10 border-t border-gray-200" />
      </div>
      <div className="space-y-12">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
            techIconMap={project.techIconMap}
            details={project.details}
            index={idx + 1}
            showDemoButton={project.showDemoButton}
            showCodeButton={project.showCodeButton}
            companyIcon={project.companyIcon || "/jdLogo.png"}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
