import React from "react";
import { Project } from "./Project";
import { Badge } from "@/components/ui/badge";
import {
  FaChartLine,
  FaVideo,
  FaHeartbeat,
  FaGraduationCap,
  FaPlane,
  FaEnvelope,
  FaGavel,
  FaLightbulb,
  FaBuilding,
} from "react-icons/fa";


interface IndustrySummaryProps {
  projects: Project[];
}

const IndustrySummary: React.FC<IndustrySummaryProps> = ({ projects }) => {
  // Group projects by industry
  const projectsByIndustry: Record<string, Project[]> = {};
  
  projects.forEach((project) => {
    const industry = project.industry;
    if (!projectsByIndustry[industry]) {
      projectsByIndustry[industry] = [];
    }
    projectsByIndustry[industry].push(project);
  });

  // Get unique industries and sort alphabetically
  const uniqueIndustries = Object.keys(projectsByIndustry).sort();

  const getIndustryColor = (industry: string): string => {
    const colorMap: Record<string, string> = {
      Fintech: "bg-emerald-100 text-emerald-800 border-emerald-200",
      Media: "bg-purple-100 text-purple-800 border-purple-200",
      Healthcare: "bg-red-100 text-red-800 border-red-200",
      EdTech: "bg-yellow-100 text-yellow-800 border-yellow-200",
      Tourism: "bg-blue-100 text-blue-800 border-blue-200",
      Shipping: "bg-orange-100 text-orange-800 border-orange-200",
      Legal: "bg-indigo-100 text-indigo-800 border-indigo-200",
      General: "bg-slate-100 text-slate-800 border-slate-200",
    };

    return colorMap[industry] || colorMap["General"];
  };

  // Get industry icon
  const getIndustryIcon = (industry: string): React.ReactNode => {
    const iconMap: Record<string, React.ReactNode> = {
      Fintech: <FaChartLine className="mr-2" />,
      Media: <FaVideo className="mr-2" />,
      Healthcare: <FaHeartbeat className="mr-2" />,
      EdTech: <FaGraduationCap className="mr-2" />,
      Tourism: <FaPlane className="mr-2" />,
      Shipping: <FaEnvelope className="mr-2" />,
      Legal: <FaGavel className="mr-2" />,
      General: <FaLightbulb className="mr-2" />,
    };

    return iconMap[industry] || iconMap["General"];
  };

  return (
    <div
      className="mb-10 animate-fade-in opacity-0"
      style={{ animationDelay: "0.15s" }}
    >
      <h3 className="text-lg font-semibold text-center mb-4">
        Industry Experience
      </h3>
      
      {/* Modern Table Layout */}
      <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm max-w-4xl mx-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-muted/50">
              {uniqueIndustries.map((industry) => (
                <th key={industry} className="text-center p-3 font-medium text-muted-foreground">
                  <Badge
                    className={`px-4 py-2 text-sm font-medium uppercase tracking-wider ${getIndustryColor(industry)}`}
                    variant="outline"
                  >
                    <span className="inline-flex items-center">
                      {getIndustryIcon(industry)}
                      {industry}
                    </span>
                    <span className="ml-1.5 inline-flex items-center justify-center w-5 h-5 text-xs rounded-full bg-background/20">
                      {projectsByIndustry[industry].length}
                    </span>
                  </Badge>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {uniqueIndustries.map((industry) => (
                <td key={industry} className="p-3 align-top">
                  <div className="space-y-3">
                    {projectsByIndustry[industry].map((project, index) => (
                      <div 
                        key={index} 
                        className="flex items-center p-2 rounded-md hover:bg-muted transition-colors"
                      >
                        {project.companyIcon && (
                          <div className="w-6 h-6 mr-2 flex-shrink-0 relative">
                            <img 
                              src={project.companyIcon} 
                              alt={project.companyName || project.title}
                              className="w-full h-full object-contain"
                              style={{
                                filter: document.documentElement.classList.contains('dark') && 
                                  project.darkModeCompanyIcon ? 'invert(1)' : 'none'
                              }}
                            />
                          </div>
                        )}
                        {!project.companyIcon && (
                          <FaBuilding className="w-5 h-5 mr-2 text-muted-foreground" />
                        )}
                        <span className="text-xs font-medium">
                          {project.companyName || project.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IndustrySummary;
