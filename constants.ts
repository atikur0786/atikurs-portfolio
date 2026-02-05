import { Project, Experience, Education, Skill, SocialLink } from "./types";

export const PERSONAL_INFO = {
  name: "Atikur Satter Mondal",
  title: "Full-Stack Developer",
  tagline: "Crafting digital experiences with precision and code.",
  about:
    "I specialize in building scalable, high-performance web applications. With a deep focus on UI/UX and modern web development patterns, I transform complex requirements into elegant solutions.",
  email: "atikursattermondal@gmail.com",
  phone: "+91 9382820248",
  location: "Hyderabad, India",
  resumeUrl: "Atikur Satter Mondal.pdf",
};

// CHANGE THIS TO YOUR GITHUB USERNAME
export const GITHUB_USERNAME = "facebook";

export const NAVIGATION_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export const SKILLS: Skill[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Go", "GraphQL", "Express", "tRPC"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase", "Prisma"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Figma", "Vite", "Jest", "CI/CD"],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Senior Frontend Engineer",
    company: "TechFlow Solutions",
    period: "2021 - Present",
    description: [
      "Led the migration of a legacy monolith to a micro-frontend architecture using React and Webpack Module Federation.",
      "Improved core web vitals by 40% through code splitting and asset optimization.",
      "Mentored 3 junior developers and established team coding standards.",
    ],
  },
  {
    id: "2",
    role: "Software Developer",
    company: "Creative Agency X",
    period: "2018 - 2021",
    description: [
      "Developed pixel-perfect responsive websites for high-profile clients.",
      "Integrated headless CMS solutions to empower marketing teams.",
      "Collaborated closely with designers to implement complex animations using GSAP.",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    degree: "B.S. Computer Science",
    institution: "University of Technology",
    year: "2018",
  },
];

// Fallback projects if GitHub API fails
export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive analytics dashboard for online retailers featuring real-time data visualization.",
    tags: ["React", "D3.js", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "https://picsum.photos/600/400?random=1",
  },
  {
    id: "2",
    title: "AI Task Manager",
    description:
      "Productivity application leveraging Gemini API to auto-categorize and prioritize tasks.",
    tags: ["Next.js", "Gemini API", "Tailwind"],
    githubUrl: "https://github.com",
    imageUrl: "https://picsum.photos/600/400?random=2",
  },
  {
    id: "3",
    title: "Social Graph Visualizer",
    description:
      "Interactive tool to visualize connections between social media profiles using force-directed graphs.",
    tags: ["React", "WebGL", "Node.js"],
    githubUrl: "https://github.com",
    imageUrl: "https://picsum.photos/600/400?random=3",
  },
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/atikur0786", icon: "github" },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/atikur-satter-mondal-a302ba1a5",
    icon: "linkedin",
  },
  { platform: "Twitter", url: "https://x.com/atikursatter", icon: "twitter" },
  {
    platform: "Substack",
    url: "https://substack.com/@atikur786",
    icon: "substack",
  },
  { platform: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: "email" },
];
