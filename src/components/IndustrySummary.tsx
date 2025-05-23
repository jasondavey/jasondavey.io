import React from 'react';
import { Project } from './Project';
import { Badge } from '@/components/ui/badge';

interface IndustrySummaryProps {
  projects: Project[];
}

const IndustrySummary: React.FC<IndustrySummaryProps> = ({ projects }) => {
  // Extract industries from projects
  const getIndustryFromDescription = (
    title: string,
    description: React.ReactNode
  ): string => {
    // Heuristic: match keywords in title/description
    const str = `${title} ${
      typeof description === "string" ? description : ""
    }`.toLowerCase();
    if (
      str.includes("financ") ||
      str.includes("lending") ||
      str.includes("score") ||
      str.includes("wealth")
    )
      return "Fintech";
    if (str.includes("video") || str.includes("caption") || str.includes("media"))
      return "Media";
    if (str.includes("health")) return "Healthcare";
    if (str.includes("education") || str.includes("learning")) return "EdTech";
    if (str.includes("logistics") || str.includes("shipping")) return "Logistics";
    if (str.includes("soccer") || str.includes("tourism")) return "Tourism";
    if (str.includes("stamps")) return "Mailing";
    if (str.includes("legal") || str.includes("law firm") || str.includes("attorney") || 
        str.includes("intellipad") || str.includes("crm") && str.includes("firm"))
      return "Legal";
    return "General";
  };

  // Get all industries from projects
  const industries = projects.map((project) => 
    getIndustryFromDescription(project.title, project.description)
  );

  // Count projects per industry
  const industryCounts: Record<string, number> = {};
  industries.forEach((industry) => {
    industryCounts[industry] = (industryCounts[industry] || 0) + 1;
  });

  // Get unique industries
  const uniqueIndustries = Object.keys(industryCounts).sort();

  const getIndustryColor = (industry: string): string => {
    const colorMap: Record<string, string> = {
      'Fintech': 'bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200',
      'Media': 'bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200',
      'Healthcare': 'bg-red-100 text-red-800 border-red-200 hover:bg-red-200',
      'EdTech': 'bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200',
      'Logistics': 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200',
      'Tourism': 'bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200',
      'Mailing': 'bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200',
      'Legal': 'bg-indigo-100 text-indigo-800 border-indigo-200 hover:bg-indigo-200',
      'General': 'bg-slate-100 text-slate-800 border-slate-200 hover:bg-slate-200',
    };
    
    return colorMap[industry] || colorMap['General'];
  };

  return (
    <div className="mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.15s" }}>
      <div className="flex flex-wrap justify-center gap-2 md:gap-3">
        {uniqueIndustries.map((industry) => (
          <div key={industry} className="text-center">
            <Badge 
              className={`px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors ${getIndustryColor(industry)}`}
              variant="outline"
            >
              {industry}
              <span className="ml-1.5 inline-flex items-center justify-center w-5 h-5 text-xs rounded-full bg-background/20">
                {industryCounts[industry]}
              </span>
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustrySummary;
