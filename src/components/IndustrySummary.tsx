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
} from "react-icons/fa";

interface IndustrySummaryProps {
  projects: Project[];
}

const IndustrySummary: React.FC<IndustrySummaryProps> = ({ projects }) => {
  // Get all industries directly from project industry property
  const industries = projects.map((project) => project.industry);

  // Count projects per industry
  const industryCounts: Record<string, number> = {};
  industries.forEach((industry) => {
    industryCounts[industry] = (industryCounts[industry] || 0) + 1;
  });

  // Get unique industries
  const uniqueIndustries = Object.keys(industryCounts).sort();

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
      Fintech: <FaChartLine className="mr-1" />,
      Media: <FaVideo className="mr-1" />,
      Healthcare: <FaHeartbeat className="mr-1" />,
      EdTech: <FaGraduationCap className="mr-1" />,
      Tourism: <FaPlane className="mr-1" />,
      Shipping: <FaEnvelope className="mr-1" />,
      Legal: <FaGavel className="mr-1" />,
      General: <FaLightbulb className="mr-1" />,
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
      <div className="flex flex-wrap justify-center gap-2 md:gap-3">
        {uniqueIndustries.map((industry) => (
          <div key={industry} className="text-center">
            <Badge
              className={`px-4 py-2 text-sm font-medium uppercase tracking-wider ${getIndustryColor(
                industry
              )}`}
              variant="outline"
            >
              <span className="inline-flex items-center">
                {getIndustryIcon(industry)}
                {industry}
              </span>
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
