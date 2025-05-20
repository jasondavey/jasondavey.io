export interface Project {
  /**
   * Optional business view content for the Business View tab.
   */
  businessView?: React.ReactNode;
  companyUrl?: string;
  index: number;
  title: string;
  description: React.ReactNode; // or string or Element
  image?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  details?: React.ReactNode;
  companyIcon?: string;
  showDemoButton?: boolean;
  showCodeButton?: boolean;
  techIconMap: Record<
    string,
    { category: string; icon: JSX.Element; url: string }
  >;
  keyArchitecture?: string;
  resultsImpact?: React.ReactNode;
  archImage?: string;
}
