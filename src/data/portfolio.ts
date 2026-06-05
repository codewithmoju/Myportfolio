export type ProfileData = {
  name: string;
  role: string;
  tagline: string;
  intro: string;
  imageUrl: string;
  email: string;
  phone: string;
  location: string;
  available: boolean;
  social: {
    github: string;
    twitter: string;
    linkedin: string;
    portfolio: string;
  };
};

export type Highlight = {
  title: string;
  subtitle: string;
  color: string;
  link?: string;
};

export type Stat = {
  value: string;
  label: string;
  icon?: string;
};

export type ProjectFeature = {
  title: string;
  description: string;
};

export type ProjectTestimonial = {
  quote: string;
  author: string;
  role: string;
};

export type ProjectData = {
  name: string;
  tagline: string;
  description: string;
  fullDescription: string;
  coverImage: string;
  features: ProjectFeature[];
  testimonials: ProjectTestimonial[];
  technologies: string[];
  primaryColor: string;
  lightColor: string;
  darkColor: string;
  accentColor: string;
  liveUrl?: string;
  status?: "live" | "in-progress" | "shipped";
};

export type ExperienceItem = {
  company: string;
  role: string;
  type: "full-time" | "co-founder" | "internship" | "freelance";
  summary: string;
  achievements: string[];
  period: string;
  location: string;
};

export type EducationItem = {
  institution: string;
  degree: string;
  field: string;
  period: string;
  status: "ongoing" | "completed";
  highlight?: string;
};

export type ThoughtItem = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
};

export type SkillCategory = {
  category: string;
  color: string;
  skills: string[];
};

// ─── PROFILE ─────────────────────────────────────────────────────────────────

export const profile: ProfileData = {
  name: "Muhammad Moaiz",
  role: "Full-Stack Mobile Dev",
  tagline: "React Native + Next.js · Co-Founder @NAMS STUDIO · Building Apps Since Age 16",
  intro:
    "I shipped my first freelance React Native app at 16. I haven't stopped building since. Co-founder of NAMS Studio, BSSE student at Minhaj University, and on a mission to make quality education free for everyone through RouteRadiant.",
  imageUrl: "/Myprofile.jpg",
  email: "Muhammadmoaizmmr786@gmail.com",
  phone: "+92 301 9684007",
  location: "Lahore, Punjab, Pakistan",
  available: true,
  social: {
    github: "https://github.com/MuhammadMoaiz001",
    twitter: "https://twitter.com/M_Moaiz001",
    linkedin: "https://www.linkedin.com/in/muhammadmoaiz",
    portfolio: "https://codewithmoju.netlify.app/",
  },
};

// ─── HIGHLIGHTS (Flagship Products) ──────────────────────────────────────────

export const highlights: Highlight[] = [
  {
    title: "RouteRadiant",
    subtitle: "AI-powered edtech platform · 100k+ lines of TypeScript · Live at routeradiant.com",
    color: "bg-gradient-to-br from-violet-600 to-indigo-700 text-white",
    link: "https://routeradiant.com",
  },
  {
    title: "PakFiler",
    subtitle: "FBR tax filing made simple · React.js web app & mobile app via React Capacitor",
    color: "bg-gradient-to-br from-teal-500 to-sky-600 text-white",
  },
];

// ─── STATS ────────────────────────────────────────────────────────────────────

export const stats: Stat[] = [
  { value: "16", label: "Age first app shipped", icon: "Rocket" },
  { value: "3+", label: "Years running NAMS Studio", icon: "Building2" },
  { value: "100k+", label: "Lines of TypeScript in RouteRadiant", icon: "Code2" },
  { value: "5+", label: "Live products in production", icon: "Package" },
];

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────

export const experienceItems: ExperienceItem[] = [
  {
    company: "IT Intelligentsia",
    role: "React Native Developer",
    type: "full-time",
    summary:
      "Building and maintaining cross-platform mobile features for production apps serving real end users.",
    achievements: [
      "Building cross-platform mobile features in React Native & TypeScript for production apps",
      "Collaborating in a professional team with PR reviews and sprint-based delivery cycles",
      "Integrating REST APIs and third-party SDKs to extend app functionality",
      "Bridging 2+ years of solo freelance experience with collaborative engineering",
    ],
    period: "Sep 2025 – Present",
    location: "Lahore, Pakistan",
  },
  {
    company: "NAMS STUDIO",
    role: "Co-Founder & Full-Stack Developer",
    type: "co-founder",
    summary:
      "Co-founded a digital agency delivering web and mobile solutions to clients across Pakistan. Built and shipped 4+ live products end-to-end.",
    achievements: [
      "Built RouteRadiant — AI-powered edtech platform (100k+ lines of TypeScript), live at routeradiant.com",
      "Built Kippo — social media management tool for scheduling, analyzing, and managing presence",
      "Built StockSuite — fully-featured POS system for retail businesses (inventory, sales, reporting)",
      "Built NamsFlow — white-labeled SaaS comms platform with Meta API integrations & Stripe billing",
      "Delivered cross-platform Android & iOS apps and web platforms for clients across Pakistan",
      "Managed client relationships end-to-end: requirements → UI/UX → development → deployment",
    ],
    period: "Apr 2023 – Present",
    location: "Lahore, Pakistan",
  },
  {
    company: "DevelopersHub Corporation",
    role: "Software Engineer Intern",
    type: "internship",
    summary:
      "Completed a structured 3-month internship in mobile application development at a professional software company.",
    achievements: [
      "Built and shipped React Native UI components and small applications through PR approval",
      "Gained hands-on experience with Git branching, code reviews, and sprint-based delivery",
      "First professional team experience — adapted from solo freelance to review-driven development",
    ],
    period: "Nov 2024 – Jan 2025",
    location: "Islamabad, Pakistan",
  },
];

// ─── EDUCATION ────────────────────────────────────────────────────────────────

export const educationItems: EducationItem[] = [
  {
    institution: "Minhaj University Lahore",
    degree: "Bachelor's Degree",
    field: "Computer Software Engineering",
    period: "Oct 2024 – Oct 2028",
    status: "ongoing",
    highlight: "Senior President · Seekers Tech & Computing Society",
  },
  {
    institution: "Aims Group of Colleges",
    degree: "Intermediate",
    field: "Computer Science",
    period: "2022 – 2024",
    status: "completed",
  },
  {
    institution: "Govt. School Shorkot Cantt",
    degree: "Matriculation",
    field: "",
    period: "Completed",
    status: "completed",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    color: "text-amber-400 border-amber-400/30 bg-amber-400/5",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React JS", "Next JS", "Tailwind CSS", "Redux"],
  },
  {
    category: "Mobile",
    color: "text-sky-400 border-sky-400/30 bg-sky-400/5",
    skills: ["React Native", "Expo"],
  },
  {
    category: "Backend & Database",
    color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    skills: ["Supabase", "Firebase", "PostgreSQL"],
  },
  {
    category: "Development Tools",
    color: "text-blue-400 border-blue-400/30 bg-blue-400/5",
    skills: ["Git", "GitHub"],
  },
  {
    category: "AI & Agentic Tools",
    color: "text-orange-400 border-orange-400/30 bg-orange-400/5",
    skills: [
      "Claude Code CLI & Web",
      "Gemini CLI & Web",
      "ChatGPT & Codex",
      "DeepSeek",
      "Kimi",
      "Lovable",
      "Bolt",
      "Windsurf",
      "Trae",
      "Verdent",
      "Wrap",
      "Antigravity",
      "GitHub Copilot",
    ],
  },
];

// Legacy toolItems for backwards compat
export const toolItems = skillCategories.flatMap((c) =>
  c.skills.map((s) => ({ name: s, role: c.category }))
);

// ─── THOUGHTS (Blog Posts) ───────────────────────────────────────────────────

export const thoughtItems: ThoughtItem[] = [
  {
    title: "Building a 100k-Line TypeScript Edtech Platform Solo",
    excerpt:
      "How RouteRadiant went from an idea to a live platform — architecture decisions, painful mistakes, and what I'd do differently.",
    date: "Mar 12, 2025",
    readTime: "8 min read",
    tag: "Product",
  },
  {
    title: "Why React Native is Still My Go-To for Mobile Apps",
    excerpt:
      "After shipping 10+ mobile apps for clients, here's why I keep choosing React Native over Flutter, Kotlin, and Swift.",
    date: "Jan 28, 2025",
    readTime: "6 min read",
    tag: "Mobile",
  },
  {
    title: "Co-Founding a Digital Agency at 18 — What Nobody Tells You",
    excerpt:
      "The real lessons from building NAMS Studio: client management, scope creep, cash flow, and staying sane while shipping.",
    date: "Nov 5, 2024",
    readTime: "7 min read",
    tag: "Startup",
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────

export type { ProjectData };

export const projectsData: Record<string, ProjectData> = {
  routeradiant: {
    name: "RouteRadiant",
    tagline: "AI-Powered Edtech for Everyone",
    description: "An AI-driven educational platform making quality education accessible to students who can't afford it.",
    fullDescription:
      "RouteRadiant is my most ambitious project — an AI-powered edtech platform built with 100k+ lines of TypeScript. Designed from the ground up to make quality education free and accessible to students across Pakistan and beyond. It features personalized AI learning paths, interactive quizzes, and real-time progress analytics. Live at routeradiant.com.",
    coverImage: "/RouteRadaint.png",
    features: [
      {
        title: "AI-Personalized Learning",
        description: "The AI engine adapts learning paths in real-time based on each student's pace, style, and progress.",
      },
      {
        title: "100k+ Lines of TypeScript",
        description: "Enterprise-grade codebase built solo — fully typed, modular, and production-ready.",
      },
      {
        title: "Free for Students",
        description: "Built with a mission: quality education shouldn't be locked behind a paywall.",
      },
      {
        title: "Live in Production",
        description: "Deployed and serving real users at routeradiant.com — not just a prototype.",
      },
    ],
    testimonials: [
      {
        quote: "RouteRadiant is the kind of product that shows what a single determined developer can build with the right vision.",
        author: "Beta User",
        role: "CS Student",
      },
      {
        quote: "The personalized learning paths genuinely adapt to how fast I study. It feels different from any other edtech app.",
        author: "Early Adopter",
        role: "Minhaj University Student",
      },
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "AI/ML", "PostgreSQL"],
    primaryColor: "from-violet-600 to-indigo-700",
    lightColor: "bg-violet-100",
    darkColor: "bg-violet-900",
    accentColor: "text-violet-400",
    liveUrl: "https://routeradiant.com",
    status: "live",
  },
  namsflow: {
    name: "NAMS Flow",
    tagline: "SaaS Customer Communication Platform",
    description: "A white-labeled SaaS platform for customer communication with Meta API integrations and Stripe billing.",
    fullDescription:
      "NamsFlow is a white-labeled SaaS customer communication platform forked from Chatwoot. It integrates WhatsApp, Facebook, and Instagram via Meta APIs for unified inbox management. Real product with real users, built with Stripe for subscription billing.",
    coverImage: "/namsflow-icon.png",
    features: [
      {
        title: "Unified Inbox",
        description: "Manage WhatsApp, Facebook, and Instagram conversations from a single dashboard.",
      },
      {
        title: "Meta API Integrations",
        description: "Full Meta channel integrations for WhatsApp Business, Facebook Pages, and Instagram DMs.",
      },
      {
        title: "Stripe Billing",
        description: "Built-in subscription management with Stripe for seamless SaaS monetization.",
      },
      {
        title: "White-Label Ready",
        description: "Fully customizable branding so agencies can resell it under their own identity.",
      },
    ],
    testimonials: [
      {
        quote: "NamsFlow completely replaced our previous support tools. Having all channels in one place is a game-changer.",
        author: "Client",
        role: "E-commerce Business Owner",
      },
      {
        quote: "The WhatsApp integration alone saved us hours every week. Very smooth onboarding.",
        author: "Agency Partner",
        role: "Digital Marketing Agency",
      },
    ],
    technologies: ["React", "Ruby on Rails", "Meta APIs", "Stripe", "PostgreSQL"],
    primaryColor: "from-orange-500 to-amber-600",
    lightColor: "bg-orange-100",
    darkColor: "bg-orange-900",
    accentColor: "text-orange-400",
    status: "live",
  },
  kippo: {
    name: "Kippo",
    tagline: "Social Media Management Made Simple",
    description: "A social media management tool for scheduling, analyzing, and managing your entire social presence.",
    fullDescription:
      "Kippo is a social media management tool built under NAMS Studio that enables businesses to manage, schedule, and analyze their social presence from a single platform. Built for agencies and small businesses who need professional social media management without enterprise pricing.",
    coverImage: "/kippoo.png",
    features: [
      {
        title: "Post Scheduling",
        description: "Schedule posts across multiple platforms in advance with a visual content calendar.",
      },
      {
        title: "Analytics Dashboard",
        description: "Track engagement, reach, and growth across all connected social accounts.",
      },
      {
        title: "Multi-Account Management",
        description: "Manage multiple client social accounts from a single, organized workspace.",
      },
      {
        title: "Content Library",
        description: "Store and reuse approved media assets for consistent brand storytelling.",
      },
    ],
    testimonials: [
      {
        quote: "Kippo simplified our agency workflow significantly. Scheduling a week of content takes 30 minutes now.",
        author: "Agency User",
        role: "Social Media Manager",
      },
      {
        quote: "Clean UI, fast, and the analytics are actually useful — unlike most tools we've tried.",
        author: "Small Business Owner",
        role: "Retail Brand",
      },
    ],
    technologies: ["React Native", "Next.js", "Firebase", "REST APIs", "TypeScript"],
    primaryColor: "from-pink-500 to-purple-600",
    lightColor: "bg-pink-100",
    darkColor: "bg-pink-900",
    accentColor: "text-pink-400",
    status: "live",
  },
  stocksuite: {
    name: "StockSuite",
    tagline: "Point of Sale for Modern Retail",
    description: "A fully-featured POS system for retail businesses — inventory, sales, and reporting.",
    fullDescription:
      "StockSuite is a comprehensive Point of Sale system built for retail businesses. It handles everything from inventory tracking and sales processing to daily reporting and analytics. Designed to be simple enough for non-technical business owners while powerful enough to handle high-volume retail.",
    coverImage: "/stocksuite.png",
    features: [
      {
        title: "Inventory Management",
        description: "Real-time stock tracking with low-stock alerts and automated reorder suggestions.",
      },
      {
        title: "Sales Processing",
        description: "Fast, intuitive POS interface designed for speed during busy retail hours.",
      },
      {
        title: "Reporting & Analytics",
        description: "Daily, weekly, and monthly sales reports with profit/loss breakdowns.",
      },
      {
        title: "Multi-Location Support",
        description: "Manage inventory and sales across multiple store locations from one dashboard.",
      },
    ],
    testimonials: [
      {
        quote: "StockSuite replaced our manual process completely. We now know our stock levels in real-time.",
        author: "Retail Client",
        role: "Shop Owner",
      },
      {
        quote: "The reporting feature alone made it worth it. We finally understand which products are actually profitable.",
        author: "Business Owner",
        role: "Multi-Location Retailer",
      },
    ],
    technologies: ["React Native", "Supabase", "PostgreSQL", "TypeScript", "Redux"],
    primaryColor: "from-teal-500 to-sky-600",
    lightColor: "bg-teal-100",
    darkColor: "bg-teal-900",
    accentColor: "text-teal-400",
    status: "live",
  },
  nemodelivers: {
    name: "NemoDelivers",
    tagline: "Food Delivery Made Easy",
    description: "A cross-platform food delivery app connecting users with local restaurants.",
    fullDescription:
      "NemoDelivers is a comprehensive food delivery platform that connects users with local restaurants, offering a seamless ordering experience. The app features an intuitive interface for browsing restaurants, exploring menus, and placing orders with real-time tracking.",
    coverImage: "/Nemodelivers.jpg",
    features: [
      {
        title: "Restaurant Discovery",
        description: "Browse through a curated list of local restaurants with ratings and operating hours.",
      },
      {
        title: "Real-time Order Tracking",
        description: "Track your order in real-time from preparation to delivery with an interactive map.",
      },
      {
        title: "Multiple Payment Options",
        description: "Pay with credit cards, digital wallets, or cash on delivery.",
      },
      {
        title: "Personalized Recommendations",
        description: "AI-powered recommendations based on your previous orders and preferences.",
      },
    ],
    testimonials: [
      {
        quote: "NemoDelivers has completely changed how I order food. The interface is intuitive.",
        author: "Sarah M.",
        role: "Regular User",
      },
      {
        quote: "Partnering with NemoDelivers significantly increased our orders and expanded our customer base.",
        author: "John D.",
        role: "Restaurant Partner",
      },
    ],
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    primaryColor: "from-orange-500 to-amber-600",
    lightColor: "bg-orange-100",
    darkColor: "bg-orange-900",
    accentColor: "text-orange-500",
    status: "shipped",
  },
  budgeto: {
    name: "BudgetO",
    tagline: "Take Control of Your Finances",
    description: "A finance management app for transaction tracking and budget planning.",
    fullDescription:
      "BudgetO is a comprehensive financial management tool designed to help users track expenses, set and monitor budgets, and gain insights into their spending habits. Features a visual dashboard with intuitive charts that make financial planning accessible to everyone.",
    coverImage: "/BudgetO.png",
    features: [
      {
        title: "Expense Tracking",
        description: "Log and categorize daily expenses to maintain a clear record of your spending.",
      },
      {
        title: "Budget Planning",
        description: "Set monthly budgets per category and receive alerts when approaching limits.",
      },
      {
        title: "Financial Insights",
        description: "Detailed analytics and reports on spending patterns and financial health.",
      },
      {
        title: "Saving Goals",
        description: "Create and track progress toward saving goals with visual progress indicators.",
      },
    ],
    testimonials: [
      {
        quote: "BudgetO helped me become more disciplined with my spending. The visual breakdowns are excellent.",
        author: "Michael T.",
        role: "Premium User",
      },
      {
        quote: "Strikes the perfect balance between functionality and simplicity.",
        author: "Elena K.",
        role: "Financial Advisor",
      },
    ],
    technologies: ["React Native", "Firebase", "Context API", "Recharts"],
    primaryColor: "from-teal-500 to-sky-600",
    lightColor: "bg-teal-100",
    darkColor: "bg-teal-900",
    accentColor: "text-teal-500",
    status: "shipped",
  },
  skycast: {
    name: "Sky Cast",
    tagline: "Your Personal Weather Companion",
    description: "A cross-platform weather forecasting mobile app with real-time conditions and hourly/daily forecasts.",
    fullDescription:
      "Sky Cast is a beautifully designed weather forecasting app built with React Native for iOS and Android. It delivers real-time weather conditions, hourly breakdowns, 7-day forecasts, and location-based alerts in a clean, intuitive interface. Designed to feel premium and fast on both platforms.",
    coverImage: "/skycast.jpeg",
    features: [
      {
        title: "Real-Time Weather",
        description: "Live temperature, humidity, wind speed, and UV index updated every hour.",
      },
      {
        title: "7-Day Forecast",
        description: "Extended daily forecasts with high/low temperatures and precipitation probability.",
      },
      {
        title: "Location-Based Alerts",
        description: "Automatic location detection with the ability to track multiple cities.",
      },
      {
        title: "Beautiful UI",
        description: "Animated weather icons and clean card-based layouts that adapt to current conditions.",
      },
    ],
    testimonials: [
      {
        quote: "Sky Cast is the cleanest weather app I've used on Android. Fast and accurate.",
        author: "Beta User",
        role: "Android User",
      },
      {
        quote: "Love the hourly breakdown — exactly what I need for planning my commute.",
        author: "App Tester",
        role: "iOS User",
      },
    ],
    technologies: ["React Native", "Expo", "REST APIs", "TypeScript"],
    primaryColor: "from-sky-500 to-indigo-600",
    lightColor: "bg-sky-100",
    darkColor: "bg-sky-900",
    accentColor: "text-sky-400",
    status: "shipped",
  },
  spotspace: {
    name: "Spot Space",
    tagline: "Find and Book Parking Instantly",
    description: "A parking spot finder and booking app built with React.js and React Capacitor for cross-platform delivery.",
    fullDescription:
      "Spot Space is a smart parking solution that helps drivers find, reserve, and pay for parking spots in real time. Built with React.js and React Capacitor, it runs natively on iOS and Android while sharing a single codebase. Features an interactive map, real-time slot availability, and seamless booking flow.",
    coverImage: "/spotspace.png",
    features: [
      {
        title: "Interactive Map",
        description: "Browse nearby parking spots on an interactive map with live availability indicators.",
      },
      {
        title: "Real-Time Slot Availability",
        description: "Live updates on parking spot occupancy so you always know what is open.",
      },
      {
        title: "Instant Booking",
        description: "Reserve a parking spot in advance or on the spot with one tap.",
      },
      {
        title: "Cross-Platform",
        description: "Built with React.js and React Capacitor — single codebase running on iOS and Android.",
      },
    ],
    testimonials: [
      {
        quote: "Spot Space saved me 20 minutes of circling around. Booked my spot from my phone in seconds.",
        author: "App User",
        role: "Daily Commuter",
      },
      {
        quote: "Great UX and works smoothly on both my iPhone and my wife's Android.",
        author: "Early Adopter",
        role: "Regular Parker",
      },
    ],
    technologies: ["React.js", "React Capacitor", "Maps API", "REST APIs"],
    primaryColor: "from-orange-500 to-amber-600",
    lightColor: "bg-orange-100",
    darkColor: "bg-orange-900",
    accentColor: "text-orange-400",
    status: "shipped",
  },
  pakfiler: {
    name: "PakFiler",
    tagline: "FBR Tax Filing Made Simple",
    description: "A React.js web app and mobile app for tax filing and FBR return submissions in Pakistan.",
    fullDescription:
      "PakFiler is a comprehensive tax filing platform designed specifically for Pakistani taxpayers. Built with React.js for web and React Capacitor for mobile, it simplifies the FBR income tax return process — guiding users step-by-step through their declarations, calculating tax owed, and submitting directly to the Federal Board of Revenue.",
    coverImage: "/pakfiler.jpg",
    features: [
      {
        title: "Step-by-Step Filing",
        description: "Guided income tax return flow that breaks down complex FBR requirements into simple steps.",
      },
      {
        title: "Automatic Calculations",
        description: "Real-time tax calculation based on income sources, deductions, and slab rates.",
      },
      {
        title: "Web + Mobile",
        description: "Available as a responsive web app and as a native mobile app via React Capacitor.",
      },
      {
        title: "Secure Submission",
        description: "Direct integration with FBR portal for secure and verified return submissions.",
      },
    ],
    testimonials: [
      {
        quote: "Filed my FBR return in under 10 minutes. Would have taken me hours manually.",
        author: "Business Owner",
        role: "SME Tax Filer",
      },
      {
        quote: "Finally a platform that makes Pakistani tax filing straightforward and stress-free.",
        author: "Freelancer",
        role: "Independent Contractor",
      },
    ],
    technologies: ["React.js", "React Capacitor", "TypeScript", "REST APIs", "Firebase"],
    primaryColor: "from-teal-500 to-sky-600",
    lightColor: "bg-teal-100",
    darkColor: "bg-teal-900",
    accentColor: "text-teal-400",
    status: "live",
    liveUrl: "",
  },
  velvox: {
    name: "Velvox",
    tagline: "Premium Men's Fashion, Online",
    description: "A Next.js e-commerce website for a premium men's clothing brand.",
    fullDescription:
      "Velvox is the online storefront for a premium men's clothing brand. Built with Next.js, it delivers a blazing-fast, beautifully designed shopping experience — from collection browsing and product detail pages to cart management and checkout. Designed to match the brand's premium identity with dark, editorial aesthetics.",
    coverImage: "/velvox.png",
    features: [
      {
        title: "Editorial Design",
        description: "Dark, minimal product-focused design that lets the clothing speak for itself.",
      },
      {
        title: "Full Product Catalogue",
        description: "Category filtering, size selection, and product detail pages with high-resolution imagery.",
      },
      {
        title: "Blazing Fast",
        description: "Built on Next.js with static generation for near-instant load times.",
      },
      {
        title: "Seamless Checkout",
        description: "Smooth cart and checkout flow with multiple payment integrations.",
      },
    ],
    testimonials: [
      {
        quote: "The website looks as premium as our brand. Exactly the vibe we were going for.",
        author: "Velvox Founder",
        role: "Men's Fashion Brand",
      },
      {
        quote: "Clean, fast, and easy to navigate. Placed my first order in under 2 minutes.",
        author: "Customer",
        role: "Velvox Shopper",
      },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    primaryColor: "from-zinc-700 to-zinc-900",
    lightColor: "bg-zinc-100",
    darkColor: "bg-zinc-900",
    accentColor: "text-zinc-300",
    status: "live",
  },
  namsstudio: {
    name: "NAMS Studio",
    tagline: "Digital Agency — Web & Mobile Experts",
    description: "The official marketing and portfolio website for NAMS Studio, our digital agency.",
    fullDescription:
      "The NAMS Studio website is the public face of our agency — showcasing our services, products, and client work. Built with Next.js for speed and SEO, it positions NAMS Studio as a premium digital agency delivering web and mobile solutions across Pakistan. Includes service pages, portfolio showcase, client testimonials, and a contact system.",
    coverImage: "/NamsStudio.png",
    features: [
      {
        title: "Agency Portfolio",
        description: "Showcase of all products and client projects built under NAMS Studio.",
      },
      {
        title: "Service Pages",
        description: "Detailed pages for mobile development, web development, SaaS, and design services.",
      },
      {
        title: "Client Testimonials",
        description: "Real client feedback building trust and credibility for new prospects.",
      },
      {
        title: "Lead Generation",
        description: "Contact form and WhatsApp integration to convert visitors into clients.",
      },
    ],
    testimonials: [
      {
        quote: "The NAMS Studio website perfectly represents the quality of work they deliver.",
        author: "Client",
        role: "SaaS Business Owner",
      },
      {
        quote: "Discovered NAMS Studio through their website and immediately reached out. Glad I did.",
        author: "E-commerce Client",
        role: "Retail Brand Owner",
      },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    primaryColor: "from-orange-500 to-amber-600",
    lightColor: "bg-orange-100",
    darkColor: "bg-orange-900",
    accentColor: "text-orange-400",
    status: "live",
  },
};

export const featuredProjectSlugs = [
  "routeradiant",
  "namsflow",
  "kippo",
  "stocksuite",
  "budgeto",
  "skycast",
  "spotspace",
  "pakfiler",
  "velvox",
  "namsstudio",
  "nemodelivers",
] as const;
