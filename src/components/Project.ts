export interface Project {
  /**
   * Industry classification for the project
   */
  industry: string;
  /**
   * Business terminology related to the project.
   */
  businessTerms?: string[];
  /**
   * Business view content that describes the business context, problem and solution.
   */
  businessView?: React.ReactNode;
  /**
   * Optional splash image to display at the top of the business view tab.
   */
  businessSplashImage?: string;
  companyUrl?: string;
  companyName?: string;
  startYear: number;
  endYear?: number; // Optional - if not provided, project is current/ongoing
  index?: number; // Optional as we're using startYear and endYear instead
  title: string;
  description: React.ReactNode; // or string or Element
  image?: string;
  /**
   * Optional YouTube video URL to display instead of an image
   */
  videoUrl?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  details?: React.ReactNode;
  companyIcon?: string;
  darkModeCompanyIcon?: string;
  showDemoButton?: boolean;
  /**
   * Results and impact of the project, broken down by stakeholder groups.
   */
  resultsImpact?: React.ReactNode;
  /**
   * Key architectural components and decisions for the project.
   */
  keyArchitecture?: React.ReactNode;
  /**
   * Path to the architecture diagram image.
   */
  archImage?: string;
  /**
   * Technology icon mapping for custom technology display.
   */
  techIconMap?: Record<
    string,
    { category: string; icon: JSX.Element; url: string }
  >;
  showCodeButton?: boolean;
  externalLinks?: {
    url: string;
    label: string;
  }[];
}
