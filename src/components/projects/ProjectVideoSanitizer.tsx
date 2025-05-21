import { Project } from "../Project";
import { VideoSanitizerTechMap } from "@/constants/video";
import { Technology } from "../../constants/TechnologyEnum";

const ProjectVideoSanitizer: Project = {
  businessTerms: [
    "Serverless",
    "Content Moderation",
    "Video Processing",
    "Automated Captioning",
    "Profanity Filtering",
  ],
  businessView: (
    <>
      <p className="mb-2">
        <strong>Problem:</strong> Video platforms, publishers, and educational
        providers face significant challenges moderating large volumes of
        user-generated or third-party video content for profanity and
        inappropriate language. Manual review is costly, slow, and error-prone,
        limiting scalability and audience reach.
      </p>
      <p className="mb-2">
        <strong>Purpose:</strong> This project aims to automate the detection,
        censorship, and captioning of spoken profanity in videos, enabling
        organizations to deliver safe, compliant, and accessible content at
        scale—without manual intervention.
      </p>
      <p className="mb-2">
        <strong>Business Solution:</strong> By leveraging serverless cloud
        infrastructure, advanced speech-to-text, and custom audio processing,
        the pipeline provides a turnkey solution for scalable content
        moderation. It supports extensibility for custom word lists, localized
        cues, and AI-driven enhancements, making it suitable for a variety of
        content governance needs.
      </p>
    </>
  ),
  title: "Video Profanity & Captioning Pipeline",
  companyUrl: "https://www.jasondavey.io",
  description: (
    <>
      <p className="mb-2">
        This project delivers an automated video sanitization pipeline that
        programmatically detects, censors, and subtitles spoken profanity in
        video content. Designed for scale and precision, the system ingests a
        video file, transcribes it using Amazon Transcribe, analyzes timestamps
        of offensive terms, and produces a final output where those terms are
        masked with beeps and accurately reflected in subtitles. The result is a
        viewer-safe video experience without requiring manual editing or
        intervention.
      </p>
      <p className="mb-2">
        From a technical perspective, the pipeline leverages AWS Lambda for
        modular processing, S3 for asset storage, FFmpeg for audio manipulation,
        and a custom profanity filter to generate time-based audio overlays. A
        key innovation was dynamically generating sine wave beeps aligned to
        spoken word timings and overlaying them precisely—muting the original
        speech during those windows using FFmpeg filters. The system was also
        enhanced to create structured S3 directories per video request to group
        original inputs, intermediates, subtitles, and final output, greatly
        simplifying asset traceability and management.
      </p>
      <p>
        In terms of business value, this system enables scalable and automated
        content moderation, ideal for platforms, publishers, or learning
        providers needing to make videos safe for broader audiences without
        expensive manual review. It supports extensibility—such as custom word
        filters, localized audio cues, or AI-enhanced profanity detection—making
        it a foundation for broader content governance solutions.
      </p>
    </>
  ),
  image: "./video_sanitize.png",
  technologies: [
    Technology.AWSLambda,
    Technology.AmazonS3,
    Technology.AmazonTranscribe,
    Technology.TypeScript,
    Technology.Nodejs,
    Technology.FFmpeg,
    Technology.Bash,
    Technology.WebVTT,
    Technology.JSON,
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
          Manual editing eliminated; rapid turnaround for large video libraries
        </li>
        <li>Extensible: supports custom filters, cues, and AI enhancement</li>
      </ul>
    </>
  ),
  showDemoButton: false,
  showCodeButton: true,
  techIconMap: VideoSanitizerTechMap,
  companyIcon: "/jdLogo.png",
  demo: "",
  index: 2,
  keyArchitecture: `
Serverless AWS Lambda pipeline (ingest, transcribe, process, output)
Amazon S3 for asset storage and lifecycle management
FFmpeg for precise audio redaction and subtitle overlay
Custom profanity filter with time-aligned beep overlays
Structured S3 directories for traceable asset management
`,
  resultsImpact: `
Automated, scalable moderation for video platforms
Eliminates manual editing, enabling rapid turnaround for large libraries
Extensible: supports custom filters, cues, and AI enhancement
`,
  archImage: "video_sanitizer_architecture.png",
};

export default ProjectVideoSanitizer;
