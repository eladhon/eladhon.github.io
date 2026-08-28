export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  technologies: { name: string; proficiency: number; experience: string }[];
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  domain: string;
  description: string;
  highlights?: string[];
  gpa?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  domain: string;
  description: string;
  highlights?: string[];
}

export interface ProjectItem {
  id: string;
  filename: string;
  fileIcon: "terminal" | "code";
  title: string;
  description: string;
  fullDetails: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  metrics?: { label: string; value: string }[];
}
