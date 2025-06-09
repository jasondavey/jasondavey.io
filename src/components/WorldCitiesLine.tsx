import React from "react";
import { useTheme } from "@mui/material";

const cities = [
  { name: "San Francisco", x: 70, color: "#0074D9" },
  { name: "Atlanta", x: 170, color: "#FF851B" },
  { name: "London", x: 340, color: "#2ECC40" },
  { name: "Singapore", x: 500, color: "#B10DC9" },
];

const WorldCitiesLine: React.FC<{ className?: string }> = ({ className }) => {
  const theme = useTheme();
  const textColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : '#333';
  
  return (
  <svg
    viewBox="0 0 600 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ width: "100%", height: "auto", minWidth: 280, maxWidth: 900 }}
    aria-label="World cities location line"
  >
    {/* Horizontal line */}
    <line
      x1={50}
      y1={50}
      x2={550}
      y2={50}
      stroke={textColor}
      strokeWidth={2}
    />
    {/* Cities */}
    {cities.map(({ name, x, color }) => (
      <g key={name}>
        <circle cx={x} cy={50} r={7} fill={color} />
        <text
          x={x}
          y={75}
          fontSize={14}
          textAnchor="middle"
          fill={textColor}
          fontFamily={theme.typography.fontFamily}
        >
          {name}
        </text>
      </g>
    ))}
  </svg>
  );
};

export default WorldCitiesLine;
