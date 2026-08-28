import type {
  EducationItem,
  ExperienceItem,
  ProjectItem,
  SkillCategory,
} from "../types";

export const PERSONAL_INFO = {
  name: "Eldho Eapen",
  title: "Software Engineer",
  role: "Software Engineer",
  status: {
    enabled: true,
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
      { name: "C#", proficiency: 85, experience: "0.3+ years" },
      { name: "Java", proficiency: 80, experience: "1+ years" },
      { name: "Python", proficiency: 85, experience: "1+ years" },
      { name: "C / C++", proficiency: 85, experience: "3+ years" },
      { name: "Dart", proficiency: 85, experience: "0.6+ years" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Web",
    icon: "architecture",
    description: "Building responsive, accessible, and performant user interfaces.",
    technologies: [
      { name: "HTML5 / CSS3", proficiency: 90, experience: "3+ years" },
      { name: "JavaScript", proficiency: 85, experience: "3+ years" },
      { name: "TypeScript", proficiency: 80, experience: "0.3+ years" },
      { name: "Angular", proficiency: 80, experience: "0.3+ years" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Concepts",
    icon: "dns",
    description: "Server-side technologies, APIs, databases, and DevOps.",
    technologies: [
      { name: ".NET / ASP.NET", proficiency: 85, experience: "0.3+ years" },
      { name: "PostgreSQL", proficiency: 80, experience: "0.3+ years" },
      { name: "MySQL", proficiency: 85, experience: "2+ years" },
      { name: "REST APIs", proficiency: 90, experience: "1+ years" },
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    icon: "wrench",
    description: "Development tools, version control, and CI/CD workflows.",
    technologies: [
      { name: "Git", proficiency: 90, experience: "2+ years" },
      { name: "VS Code", proficiency: 90, experience: "3+ years" },
      { name: "Azure DevOps", proficiency: 80, experience: "0.3+ years" },
      { name: "GitHub Actions", proficiency: 75, experience: "1+ years" },
      { name: "Figma", proficiency: 80, experience: "1+ years" },
    ],
  },
  {
    id: "design",
    title: "Design",
    icon: "palette",
    description: "UI/UX design, prototyping, and visual creative tools.",
    technologies: [
      { name: "UI/UX", proficiency: 80, experience: "0.4+ years" },
      { name: "Responsive Design", proficiency: 85, experience: "0.4+ years" },
      { name: "Prototyping", proficiency: 75, experience: "0.4+ years" },
      { name: "Photoshop", proficiency: 80, experience: "1+ years" },
      { name: "Illustrator", proficiency: 75, experience: "1+ years" },
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

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "kerala-bus-tracker",
    filename: "tracker.dart",
    fileIcon: "terminal",
    title: "Kerala Private Bus Tracker",
    description: "Developed a mobile app to view private bus routes and stop information across Kerala.",
    fullDetails: "Integrated OpenStreetMap APIs for interactive route visualization and map-based navigation. Designed relational database schemas using PostgreSQL on Supabase for managing route and stop data.",
    tags: ["Flutter", "PostgreSQL", "Supabase", "OpenStreetMap"],
    githubUrl: "https://github.com/eladhon/kerala-private-bus-tracker",
    liveUrl: "https://github.com/eladhon/kerala-private-bus-tracker",
    metrics: [
      { label: "Platform", value: "Mobile" },
      { label: "Backend", value: "Supabase" },
      { label: "Database", value: "PostgreSQL" },
    ],
  },
  {
    id: "medicare",
    filename: "medicare.js",
    fileIcon: "code",
    title: "Medicare - Clinical Drug Data Retrieval System",
    description: "Built a medicine information platform for retrieving dosage, composition, and side-effect details.",
    fullDetails: "Consumed OpenFDA and RxNorm REST APIs and processed nested JSON responses dynamically using JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "REST APIs"],
    githubUrl: "https://github.com/eladhon/medicare",
    liveUrl: "https://github.com/eladhon/medicare",
    metrics: [
      { label: "Platform", value: "Web" },
      { label: "Data Source", value: "OpenFDA" },
      { label: "Stack", value: "Vanilla JS" },
    ],
  }
];
