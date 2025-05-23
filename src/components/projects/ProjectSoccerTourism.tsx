import { Project } from "../Project";
import { SoccerTourismTechMap } from "@/constants/soccer";

const ProjectSoccerTourism: Project = {
  startYear: 2025, // Ongoing project - no endYear
  businessTerms: [
    "Soccer Tourism",
    "AI Travel Concierge",
    "Community Empowerment",
    "Sustainable Tourism",
    "Sports Travel",
  ],
  businessView: (
    <>
      <p className="mb-2">
        <strong>Problem:</strong> Soccer tourists struggle with complex trip
        planning involving match tickets, flights, accommodations, and local
        experiences, while local communities often don't benefit from the influx
        of tourism.
      </p>
      <p className="mb-2">
        <strong>Purpose:</strong> To create an AI-powered platform that
        revolutionizes soccer tourism by seamlessly orchestrating travel
        experiences while ensuring local communities benefit from and are
        empowered by soccer tourism.
      </p>
      <p className="mb-2">
        <strong>Business Solution:</strong> Beyond the Stars provides an
        AI-powered digital concierge that handles all aspects of soccer tourism
        planning while directing micro-grants to community projects chosen by
        local grassroots soccer clubs, transforming how fans experience matches
        globally.
      </p>
    </>
  ),
  title: "Beyond the Stars: AI Soccer Tourism Platform",
  description: (
    <>
      <p className="mb-2">
        Beyond the Stars is an innovative AI-powered digital concierge platform
        that transforms soccer tourism by orchestrating authentic,
        community-centered travel experiences. The platform handles the complex
        logistics of soccer tourism while ensuring local communities benefit
        from and are empowered by the influx of visitors.
      </p>
      <p className="mb-2">
        The platform features a sophisticated AI orchestration system built on
        AWS services that coordinates multiple specialized agents to handle
        match ticket acquisition, flight booking, hotel reservations, and local
        experience planning. Using Amazon Bedrock for personalized
        recommendations, Amazon Personalize for dynamic travel suggestions, and
        Amazon Neptune with Vector DB for conversational memory, the system
        maintains constraints and preferences across all booking processes,
        ensuring a seamless end-to-end experience.
      </p>
      <p className="mb-2">
        A key innovation is the Community Opportunity Manager, which connects
        tourists with authentic local experiences created by community leaders
        through a certification platform powered by AWS Step Functions and
        Amazon Cognito. Additionally, the platform includes real-time tourist
        load monitoring via Amazon Kinesis Data Streams and Amazon Location
        Service to prevent overtourism and preserve cultural authenticity, with
        Amazon SageMaker providing predictive models for crowd control and
        dynamic rerouting.
      </p>
      <p className="mb-2">
        <strong>Role:</strong> As Lead Architect, I designed the multi-agent AI
        system, implemented the orchestration layer, and developed the community
        empowerment features that form the core of the platform's unique value
        proposition.
      </p>
      <p className="mb-2">
        <strong>Cloud-Native Architecture:</strong> - Multi-agent AI
        orchestration system coordinating specialized agents for ticket
        acquisition, flight booking, hotel reservations, and experience planning
        - Event-driven architecture with Amazon EventBridge orchestrating
        workflows (e.g., book hotel only if match tickets are secured) -
        Microservices design with AWS Lambda and containerized services for
        scalability and resilience
      </p>
      <p className="mb-2">
        <strong>Data & Storage</strong>: - Amazon DynamoDB for user profiles,
        preferences, bookings, and itineraries - Amazon Aurora Serverless for
        relational data like community leader records and trip metadata - Amazon
        S3 for documents, media, and analytics logs - Amazon Neptune with Vector
        DB for conversational memory, tracking preferences and past interactions
      </p>
      <p className="mb-2">
        <strong>AI/ML Services</strong>: - Amazon Bedrock for personalized
        recommendation models - Amazon Personalize for generating dynamic travel
        recommendations - Amazon Kendra for interactive chat capabilities
        supported by Bedrock and Personalize
      </p>
      <p className="mb-2">
        <strong>Payment & Transaction Processing</strong>: - Amazon API Gateway
        + Lambda as payment broker and handler - Third-party payment
        integrations (Stripe, Adyen) - AWS Secrets Manager for securing API keys
        and credentials - Amazon CloudTrail + AWS Config for auditing and
        compliance
      </p>
      <p className="mb-2">
        <strong>Community Platform</strong>: - AWS Step Functions for managing
        certification and training workflows - Amazon Cognito for identity
        management and role-based access control
      </p>
      <p className="mb-2">
        <strong>Community Platform</strong>: - AWS Step Functions for managing
        certification and training workflows - Amazon Cognito for identity
        management and role-based access control - DynamoDB for certification
        status and renewal tracking
      </p>
      <p className="mb-2">
        <strong>Real-Time Monitoring & Rerouting</strong>: - Amazon Kinesis Data
        Streams for ingesting and processing venue crowd telemetry - Amazon
        Location Service for geolocation-based rerouting and experience
        suggestions - Amazon SageMaker for predictive models in crowd control
        and dynamic rerouting
      </p>
      <p className="mb-2">
        <strong>Trip Portal & Notifications</strong>: - AWS AppSync + DynamoDB
        for real-time synchronization of trip status updates and group chats -
        Amazon SNS/Pinpoint for alerts and updates via SMS/email - Amazon Chime
        SDK for in-app messaging and support
      </p>
      <p className="mb-2">
        <strong>Trip Portal & Notifications</strong>: - AWS AppSync + DynamoDB
        for real-time synchronization of trip status updates and group chats -
        Amazon SNS/Pinpoint for alerts and updates via SMS/email - Amazon Chime
        SDK for in-app messaging and support Real-time tourist load monitoring
        and dynamic rerouting to prevent cultural dilution Secure payment
        orchestration system connecting multiple travel service providers
        Community opportunity management platform enabling local leaders to
        create and showcase authentic experiences
      </p>
    </>
  ),
  image: "./danish-ibrahim-0xICxRQTDEY-unsplash.jpg", // Soccer stadium image showing community atmosphere
  videoUrl: "",
  technologies: [
    "AWS",
    "React",
    "Microservices",
    "Nodejs",
    "TypeScript",
    "DynamoDB",
    "Aurora",
    "Lambda",
    "AppSync",
    "EventBridge",
    "S3",
    "API Gateway",
    "Cognito",
    "Step Functions",
    "Kinesis",
    "SageMaker",
    "Neptune",
    "Amazon Bedrock",
    "Docker",
    "Terraform",
  ],
  featured: true,
  details: (
    <>
      <h3 className="font-semibold text-lg mb-1">Key Technical Achievements</h3>
      <ul className="list-disc ml-6 text-700 mb-2">
        <li>
          Developed an AI agent orchestration system that coordinates
          specialized agents for different booking tasks
        </li>
        <li>
          Created an end-to-end agent coordinator that maintains constraints
          across the entire booking process
        </li>
        <li>
          Implemented real-time tourist load monitoring to prevent overtourism
        </li>
        <li>
          Designed a secure payment orchestration system for handling
          transactions across multiple service providers
        </li>
        <li>
          Built a community opportunity management platform connecting tourists
          with authentic local experiences
        </li>
      </ul>
    </>
  ),
  showDemoButton: false,
  showCodeButton: false,
  techIconMap: SoccerTourismTechMap as unknown as Record<
    string,
    { category: string; icon: JSX.Element; url: string }
  >,

  companyIcon: "./jdLogo.png",
  companyName: "JasonDavey.io",
  companyUrl: "https://jasondavey.io",
  demo: "",
  index: 6, // Adjust as needed based on where you want this to appear
  keyArchitecture: `
Cloud-Native Architecture:
- Multi-agent AI orchestration system coordinating specialized agents for ticket acquisition, flight booking, hotel reservations, and experience planning
- Event-driven architecture with Amazon EventBridge orchestrating workflows (e.g., book hotel only if match tickets are secured)
- Microservices design with AWS Lambda and containerized services for scalability and resilience

Data & Storage:
- Amazon DynamoDB for user profiles, preferences, bookings, and itineraries
- Amazon Aurora Serverless for relational data like community leader records and trip metadata
- Amazon S3 for documents, media, and analytics logs
- Amazon Neptune with Vector DB for conversational memory, tracking preferences and past interactions

AI/ML Services:
- Amazon Bedrock for personalized recommendation models
- Amazon Personalize for generating dynamic travel recommendations
- Amazon Kendra for interactive chat capabilities supported by Bedrock and Personalize

Payment & Transaction Processing:
- Amazon API Gateway + Lambda as payment broker and handler
- Third-party payment integrations (Stripe, Adyen)
- AWS Secrets Manager for securing API keys and credentials
- Amazon CloudTrail + AWS Config for auditing and compliance

Community Platform:
- AWS Step Functions for managing certification and training workflows
- Amazon Cognito for identity management and role-based access control
- DynamoDB for certification status and renewal tracking

Real-Time Monitoring & Rerouting:
- Amazon Kinesis Data Streams for ingesting and processing venue crowd telemetry
- Amazon Location Service for geolocation-based rerouting and experience suggestions
- Amazon SageMaker for predictive models in crowd control and dynamic rerouting

Trip Portal & Notifications:
- AWS AppSync + DynamoDB for real-time synchronization of trip status updates and group chats
- Amazon SNS/Pinpoint for alerts and updates via SMS/email
- Amazon Chime SDK for in-app messaging and support
Real-time tourist load monitoring and dynamic rerouting to prevent cultural dilution
Secure payment orchestration system connecting multiple travel service providers
Community opportunity management platform enabling local leaders to create and showcase authentic experiences
`,
  resultsImpact: `
Created a transformative platform that revolutionizes soccer tourism experiences
Empowered local communities through micro-grants and volunteer opportunities directed to grassroots soccer clubs
Preserved cultural authenticity by preventing overtourism with real-time monitoring
Provided soccer enthusiasts with seamless, personalized travel experiences based on their preferences and constraints
Generated sustainable economic growth for local communities while maintaining their cultural essence
`,
  archImage: "./soccer_tourism.png",
  externalLinks: [
    {
      url: "https://github.com/jasondavey/soccer-tourism",
      label: "View Project",
    },
    {
      url: "https://www.nytimes.com/athletic/4315721/2023/03/18/wrexham-us-arsenal-barca-leeds/",
      label: "NY Times Article",
    },
  ],
};

export default ProjectSoccerTourism;
