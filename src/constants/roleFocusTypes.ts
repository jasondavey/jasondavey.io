import { ReactNode } from "react";

export interface FocusPillar {
  id: string;
  title: string;
  icon: ReactNode;
  summary: string;
  details: ReactNode;
  technologies: string[];
}

export interface FocusStat {
  label: string;
  detail: string;
}

export interface RoleFocusData {
  id: string;
  role: string;
  company: string;
  duration: string;
  mission: string;
  logoSrc?: string;
  logoAlt?: string;
  stats: FocusStat[];
  pillars: FocusPillar[];
}
