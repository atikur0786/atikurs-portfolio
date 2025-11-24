import { Experience, Education, Skill, SocialLink } from "./types";

export const PERSONAL_INFO = {
  name: "Atikur Satter Mondal",
  title: "Full-Stack Developer",
  about:
    "I specialize in building scalable, high-performance web applications. With a deep focus on UI/UX and modern web development patterns, I transform complex requirements into elegant solutions.",
  email: "atikursattermondal@gmail.com",
  phone: "+91 9382820248",
  location: "Hyderabad, India",
  bio: "I’m Atikur Satter Mondal, a full-stack developer with 3+ years of experience architecting secure, scalable, and performance-driven applications. At Jukshio Technology Innovation, I’ve led major initiatives including a real-time Video KYC platform, AI/ML data curation dashboards, and enterprise onboarding systems used by hundreds of daily users. \n My expertise spans Angular, React, Node.js, Express, Golang, PostgreSQL, and cloud infrastructure (GCP/Azure). I specialize in building systems that handle real-time communication, data encryption (AES-256-GCM), and large-scale data workflows. I care deeply about clean code, thoughtful UI/UX, and solving meaningful engineering problems.",
  resumeUrl: "/Atikur_Satter_Mondal_Resume.pdf",
};

export const GITHUB_USERNAME = "atikur0786";

export const PROJECTS = [
  {
    id: "1",
    title: "Portfolio",
    description:
      "My personal portfolio website built with React, Tailwind CSS, and Framer Motion.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/atikur0786/portfolio",
    liveUrl: "https://atikur.dev",
    imageUrl: "https://opengraph.githubassets.com/1/atikur0786/portfolio",
  },
];

export const NAVIGATION_LINKS = [
  { name: "Home", href: "home" },
  { name: "Skills", href: "skills" },
  { name: "Experience", href: "experience" },
  { name: "Projects", href: "projects" },
  { name: "Resume", href: "resume" },
  { name: "Contact", href: "contact" },
];

export const SKILLS: Skill[] = [
  {
    category: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Typescript",
      "Angular",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Angular Material",
      "Responsive UI development",
      "Component-driven architecture",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "RESTful API design",
      "WebSockets",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Authentication (OAuth, JWT)",
      "Encryption (AES-256-GCM)",
    ],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Github", "Gitlab", "Vite", "Webpack", "Jest", "Postman"],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Research & Development Engineer I",
    company: "Jukshio Technology Innovation Pvt. Ltd.",
    period: "2021 – Present",
    description: [
      "Engineered large-scale applications including KYC and AI/ML curation dashboards using Angular, React, Node.js, and PostgreSQL.",
      "Implemented AES-256-GCM encryption and secure symmetric/asymmetric decryption to protect high-sensitivity KYC data.",
      "Integrated WebSockets to power real-time video interactions, reducing latency and improving customer-agent communication.",
      "Led development of an AI/ML curation dashboard used by 400–500 users daily, improving dataset accuracy for ML model training..",
      "Optimized PostgreSQL queries and API performance, reducing dashboard load times and improving user experience.",
      "Migrated backend services from GCP to Azure, improving reliability and reducing operating costs.",
      "Collaborated with cross-functional teams to convert business requirements into scalable engineering solutions.",
    ],
  },
  {
    id: 2,
    role: "Web Development Intern",
    company: "Sukshi Academy",
    period: "Aug 2021 – Nov 2021",
    description: [
      "Built a responsive frontend for an AI/ML-based application using Angular, Bootstrap, and REST API services.",
      "Translated Figma UI designs into functional, production-ready components",
      "Worked with backend and ML teams to ensure smooth data integration and consistent UX.",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Burdwan University",
    year: "2018 - 2021",
  },
  {
    id: 2,
    degree: "Higher Secondary",
    institution: "Nalikul Deshbandhu Bani Mandir",
    year: "2016 - 2018",
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
