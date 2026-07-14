export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Drawbridge";

export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "Drawbridge — your trusted partner for building world-class web applications. Strategy, design, and development under one roof.";

export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    icon: "Palette",
    title: "UI/UX Design",
    description:
      "Pixel-perfect interfaces crafted for maximum engagement, accessibility, and conversion.",
  },
  {
    icon: "Code2",
    title: "Web Development",
    description:
      "Scalable, performant web applications built with modern technologies and clean code.",
  },
  {
    icon: "Smartphone",
    title: "Mobile Apps",
    description:
      "Cross-platform mobile experiences that users love, built with React Native.",
  },
  {
    icon: "TrendingUp",
    title: "Strategy & Consulting",
    description:
      "Data-driven strategies to accelerate your digital transformation and growth.",
  },
  {
    icon: "Zap",
    title: "Performance Optimization",
    description:
      "Speed up existing applications for better user experience and search rankings.",
  },
  {
    icon: "Cloud",
    title: "Cloud & DevOps",
    description:
      "Robust infrastructure solutions for enterprise-grade reliability and scalability.",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your business goals, target audience, and technical requirements to set the foundation.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Crafting a detailed roadmap tailored to your vision with clear milestones, timelines, and KPIs.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Creating stunning, user-centered designs reviewed and approved by you before a single line of code is written.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Engineering scalable solutions using cutting-edge technologies, with continuous delivery and testing.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Drawbridge transformed our entire platform. Our load times dropped by 60% and conversions increased significantly. Exceptional team.",
    name: "Sarah Chen",
    role: "CTO",
    company: "NovaTech",
    initials: "SC",
  },
  {
    quote:
      "The team at Drawbridge are true professionals. They delivered our app on time, on budget, and exceeded every single expectation we had.",
    name: "Marcus Reid",
    role: "Founder",
    company: "Launchpad",
    initials: "MR",
  },
  {
    quote:
      "Working with Drawbridge was a game-changer. Their attention to detail and technical expertise is completely unmatched in the industry.",
    name: "Priya Sharma",
    role: "CEO",
    company: "DataFlow",
    initials: "PS",
  },
];

export const PROJECTS = [
  {
    title: "NovaTech Dashboard",
    category: "Web Development",
    description: "Enterprise SaaS analytics platform with real-time data visualization.",
    gradient: "from-blue-900 to-blue-600",
  },
  {
    title: "Launchpad App",
    category: "Mobile App",
    description: "Cross-platform startup management app used by 10k+ founders.",
    gradient: "from-indigo-900 to-blue-700",
  },
  {
    title: "DataFlow Analytics",
    category: "UI/UX Design",
    description: "Complete product redesign that boosted user retention by 45%.",
    gradient: "from-blue-800 to-cyan-700",
  },
  {
    title: "NebulaStore",
    category: "Web Development",
    description: "High-performance e-commerce platform handling 100k+ daily transactions.",
    gradient: "from-slate-900 to-blue-800",
  },
  {
    title: "Pulse Health",
    category: "Strategy & Dev",
    description: "HIPAA-compliant healthcare platform connecting patients and doctors.",
    gradient: "from-blue-950 to-indigo-700",
  },
  {
    title: "SwiftPay",
    category: "Full Stack",
    description: "Fintech payment application processing millions in transactions monthly.",
    gradient: "from-indigo-950 to-blue-600",
  },
];