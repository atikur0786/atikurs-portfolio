import { Experience, Education, Skill, SocialLink } from "./types";

export const PERSONAL_INFO = {
  name: "Atikur Satter Mondal",
  title: "Full-Stack Developer",
  about:
    "I specialize in building scalable, high-performance web applications. With a deep focus on UI/UX and modern web development patterns, I transform complex requirements into elegant solutions.",
  email: "atikursattermondal@gmail.com",
  phone: "+91 9382820248",
  location: "Hyderabad, India",
  bio: "Hello! I'm Atikur Satter Mondal, a full-stack developer with over three years of experience crafting secure, scalable, and performance-driven web applications. At Jukshio Technology Innovation, I’ve led the development of high-impact projects — including a real-time Video KYC platform, AI/ML data curation dashboards, and enterprise-grade internal tools. I specialize in modern web technologies like Angular, React, Node.js, and PostgreSQL, and I love solving complex problems with clean, maintainable code.",
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
      "Angular",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Golang",
      "Gin",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "RESTful API",
      "WebSockets",
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      "Git",
      "Docker",
      "Webpack",
      "Vite",
      "Jest",
      "CI/CD",
      "Linux",
      "GCP",
      "Azure",
    ],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Research & Development Engineer I",
    company: "Jukshio Technology Innovation Pvt. Ltd.",
    period: "2021 – Present",
    description: [
      "Engineered and deployed a secure and scalable KYC application, enabling seamless customer verification.",
      "Led development of a real-time Video KYC platform using Angular and Node.js with WebSockets.",
      "Built enterprise-grade dashboards for AI/ML data curation handling large-scale datasets.",
      "Integrated Google and Microsoft OAuth for seamless authentication.",
      "Migrated backend infrastructure from GCP to Azure, enhancing scalability and reducing costs.",
      "Optimized RESTful APIs with PostgreSQL, improving performance by 40%.",
    ],
  },
  {
    id: 2,
    role: "Web Development Intern",
    company: "Sukshi Academy",
    period: "Aug 2021 – Nov 2021",
    description: [
      "Developed a customer-facing retail assistant app using voice input and dynamic UI rendering.",
      "Collaborated with cross-functional teams to design intuitive retail solutions.",
      "Led the design and implementation of UI components focusing on responsiveness.",
      "Integrated multiple APIs to streamline communication between systems.",
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
