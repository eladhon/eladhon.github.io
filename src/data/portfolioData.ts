import type {
  EducationItem,
  ExperienceItem,
  ProjectItem,
  SkillCategory,
} from "../types";
import portfolioRepositories from "../../portfolio.json";

export const PERSONAL_INFO = {
  name: "Eldho Eapen",
  title: "Software Engineer",
  role: "Software Engineer",
  status: {
    enabled: false,
    label: "Status:",
    message: "Software Engineer Trainee at NKORR Technologies",
  },
  // Set either flag to true when you want the matching status item to appear.
  availability: {
    forHire: false,
    forFreelance: false,
  },
  bio: "Software Engineer with hands-on experience in .NET, ASP.NET, and Angular, backed by a Diploma in Computer Engineering. Strong foundation in OOP and data structures, with a focus on writing clean, maintainable code.",
  github: "https://github.com/eladhon",
  linkedin: "https://linkedin.com/in/eldhoeapen",
  twitter: "https://twitter.com/eladhon",
  instagram: "https://instagram.com/ela.dhon/",
  threads: "https://threads.com/@ela.dhon",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages & Frameworks",
    icon: "terminal",
    description: "Core programming languages and frameworks I use to build applications.",
    technologies: [
      { name: "C#", experience: "0.3+ years" },
      { name: "Java", experience: "1+ years" },
      { name: "Python", experience: "1+ years" },
      { name: "C / C++", experience: "3+ years" },
      { name: "Dart", experience: "0.6+ years" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Web",
    icon: "architecture",
    description: "Building responsive, accessible, and performant user interfaces.",
    technologies: [
      { name: "HTML5 / CSS3", experience: "3+ years" },
      { name: "JavaScript", experience: "3+ years" },
      { name: "TypeScript", experience: "0.3+ years" },
      { name: "Angular", experience: "0.3+ years" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Concepts",
    icon: "dns",
    description: "Server-side technologies, APIs, databases, and DevOps.",
    technologies: [
      { name: ".NET / ASP.NET", experience: "0.3+ years" },
      { name: "PostgreSQL", experience: "0.3+ years" },
      { name: "MySQL", experience: "2+ years" },
      { name: "REST APIs", experience: "1+ years" },
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    icon: "wrench",
    description: "Development tools, version control, and CI/CD workflows.",
    technologies: [
      { name: "Git", experience: "2+ years" },
      { name: "VS Code", experience: "3+ years" },
      { name: "Azure DevOps", experience: "0.3+ years" },
      { name: "GitHub Actions", experience: "1+ years" },
      { name: "Figma", experience: "1+ years" },
    ],
  },
  {
    id: "design",
    title: "Design",
    icon: "palette",
    description: "UI/UX design, prototyping, and visual creative tools.",
    technologies: [
      { name: "UI/UX", experience: "0.4+ years" },
      { name: "Responsive Design", experience: "0.4+ years" },
      { name: "Prototyping", experience: "0.4+ years" },
      { name: "Photoshop", experience: "1+ years" },
      { name: "Illustrator", experience: "1+ years" },
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "polytechnic",
    period: "2024 - 2026",
    degree: "Diploma in Computer Engineering",
    institution: "Government Polytechnic College, Muttom",
    domain: "polytechnic",
    description: "CGPA: 7.88/10",
    highlights: [
      "Relevant coursework: Data Structures, OOP, DBMS, Web Technology"
    ],
    gpa: "7.88/10"
  },
  {
    id: "thss",
    period: "2022 - 2024",
    degree: "Computer Science",
    institution: "Technical Higher Secondary School, Muttom",
    domain: "thss",
    description: "Percentage: 69.83%",
    highlights: [
      "Core subjects: Programming Fundamentals, Computer Systems"
    ],
    gpa: "69.83%"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "nkorr",
    period: "June 2026 - present",
    role: "Software Engineer Trainee",
    company: "NKORR Technologies",
    location: "Technopark, Trivandrum",
    domain: "nkorrtech.com",
    description: "Developing and maintaining web applications using ASP.NET Core, .NET, and Angular.",
    highlights: [
      "Developing and maintaining web applications using ASP.NET Core, .NET, and Angular.",
      "Building and integrating RESTful APIs to support application functionality and data management.",
      "Collaborating with cross-functional teams in an Agile environment to deliver scalable and maintainable software solutions."
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = portfolioRepositories.map((repository) => ({
  id: repository.name,
  filename: `${repository.name}/README.md`,
  fileIcon: repository.language === "JavaScript" || repository.language === "TypeScript" ? "code" : "terminal",
  title: repository.name,
  description: repository.description || "No description provided.",
  fullDetails: `${repository.description || "No description provided."} Primary language: ${repository.language || "Not specified"}.`,
  tags: [repository.language || "Repository"],
  githubUrl: repository.url,
  metrics: [
    { label: "Stars", value: String(repository.stars) },
    { label: "Forks", value: String(repository.forks) },
  ],
}));

const getProjectScore = (project: ProjectItem) =>
  Number(project.metrics?.find((metric) => metric.label === "Stars")?.value ?? 0) * 2 +
  Number(project.metrics?.find((metric) => metric.label === "Forks")?.value ?? 0);

export const FEATURED_PROJECTS_DATA = [...PROJECTS_DATA]
  .sort((a, b) => getProjectScore(b) - getProjectScore(a))
  .slice(0, 4);
