import ProjectCard from "@/components/ProjectCard";
import { VerascoreTechMap } from "@/constants/verascore";
import { VideoSanitizerTechMap } from "@/constants/video";

//   {
//     id: 1,
//     title: "Video Captioning and Profanity Filtering (Sound and Captions)",
//     description:
//       "A full-stack e-commerce platform with product management, shopping cart, user authentication, and payment processing. Implemented responsive design and optimized performance.",
//     image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
//     technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
//     github: "https://github.com/jasondavey/video-captioning",
//     demo: "#",
//     featured: true,
//   },
//   {
//     id: 2,
//     title: "Financial Health Scoring Platform",
//     description:
//       "I ran technology at VeraScore, a platform designed to give customers seeking credit and lenders lending credit a more comprehensive understanding of an individual’s financial health. The goal was to address the shortcomings of traditional credit scoring systems, which often exclude financially responsible people with low or limited credit histories. By building tools that analyze broader financial behaviors, we aimed to support more inclusive and equitable lending decisions. My role involved shaping the platform’s strategy and execution to ensure it delivered meaningful insights that could improve access to credit for underserved populations.",
//     image: "./verascore_dashboard.png",
//     technologies: [
//       "TypeScript",
//       "React",
//       "Netlify",
//       "Auth0",
//       "FaunaDB",
//       "Plaid",
//       "Datadog",
//       "Smarty",
//       "Twilio",
//     ],
//     github: "https://github.com/jasondavey/analytics-dashboard",
//     demo: "#",
//     featured: true,
//   },
//   {
//     id: 3,
//     title: "Task Management System",
//     description:
//       "A collaborative task management application with drag-and-drop interface, task prioritization, team collaboration, and progress tracking.",
//     image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
//     technologies: ["React", "Redux", "Node.js", "PostgreSQL", "WebSockets"],
//     github: "https://github.com/jasondavey/task-manager",
//     demo: "#",
//     featured: true,
//   },
// ];

const projects = [
  {
    title: "Financial Health Scoring Platform",
    description: (
      <>
        <p className="mb-2">
          VeraScore is a multi-tenant B2B2C platform designed to empower
          partners—such as fintechs, lenders, or financial coaches—to launch
          their own branded version of the product.
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
    showDemoButton: false,
    showCodeButton: false,
  },
  {
    title: "Automated Video Profanity Filtering & Captioning Pipeline",
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
      "Shell Scripts",
      "Media Processing",
      "Audio Redaction",
      "Content Moderation",
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
          Featured Projects
        </h2>
        <p className="mt-4 text-engineering-gray max-w-2xl mx-auto">
          A selection of my recent projects. Each project presented unique
          challenges and opportunities to learn and grow.
        </p>
      </div>
      <div className="space-y-24">
        {projects.map((project, idx) => (
          <ProjectCard
            index={idx + 1}
            key={project.title + idx}
            {...project}
            techIconMap={VerascoreTechMap}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
