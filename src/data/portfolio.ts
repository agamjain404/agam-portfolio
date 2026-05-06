export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  stack: string[];
  liveLink: string;
  githubLink: string;
  learnings: string;
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Highlights", href: "#highlights" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
];

export const metrics = [
  { label: "Years Experience", value: "4+" },
  { label: "Core Domains", value: "Backend • Frontend • Platform" },
];

export const experiences: ExperienceItem[] = [
  {
    company: "Lowe's India",
    role: "Software Engineer",
    period: "2024 - Present",
    points: [
      "Built a scalable CMS platform using Node.js, React, and MongoDB with a strong focus on extensibility.",
      "Designed Kafka-based microservices to handle high-volume event processing and asynchronous workflows.",
      "Implemented observability pipelines using Prometheus and Grafana for proactive production monitoring.",
      "Built a framework-agnostic dynamic container to load components from multiple frontend technologies.",
      "Enabled multi-tenant architecture through CDN-driven dynamic bundle loading and tenant-specific runtime composition.",
      "Led monorepo modular migration to improve ownership boundaries and deployment velocity.",
      "Introduced agentic AI-assisted authoring workflows to accelerate content operations.",
    ],
  },
  {
    company: "Signzy",
    role: "Software Engineer",
    period: "2022 - 2024",
    points: [
      "Migrated backend services to Loopback 4 with TypeScript, improving maintainability and developer confidence.",
      "Improved critical API performance by 25% through endpoint-level optimization and bottleneck reduction.",
      "Integrated Razorpay and external API providers for reliable financial and verification workflows.",
      "Built and scaled onboarding systems serving high-throughput enterprise onboarding journeys.",
      "Mentored junior developers on backend architecture, code quality, and delivery practices.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Blog Platform",
    description:
      "A production-style MERN blogging platform with secure authentication and authoring workflows.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Okta Auth"],
    liveLink: "https://github.com/agamjain404/BlogApplication",
    githubLink: "https://github.com/agamjain404/BlogApplication",
    learnings:
      "Designed secure role-based access and improved content publishing reliability with cleaner API boundaries.",
  },
  {
    title: "Instagram Reels Clone",
    description:
      "A short-video feed experience focused on responsive UX, real-time updates, and scalable frontend rendering.",
    stack: ["React", "Firebase", "Firestore", "Cloud Storage"],
    liveLink: "https://reels-app-agam.netlify.app/login",
    githubLink: "https://github.com/agamjain404/reels",
    learnings:
      "Learned how to balance media-heavy UI performance with smooth interactions and state synchronization.",
  },
];

export const skills = {
  languages: ["TypeScript", "JavaScript", "SQL", "HTML/CSS"],
  frameworks: ["Node.js", "Next.js", "React", "Express", "Loopback 4"],
  databases: ["MongoDB", "PostgreSQL", "Redis", "Firestore"],
  systems: ["Kafka", "Docker", "Prometheus", "Grafana", "GitHub Actions", "AWS"],
};

export const highlights = [
  "Platform-level CMS architecture for enterprise content workflows",
  "Multi-tenant architecture with CDN-based dynamic loading",
  "Framework-agnostic dynamic component loader",
  "Agentic AI workflows for faster content authoring",
];

