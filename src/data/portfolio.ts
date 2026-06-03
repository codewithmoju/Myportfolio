export type ProfileData = {
  name: string;
  role: string;
  intro: string;
  imageUrl: string;
  email: string;
  social: {
    github: string;
    twitter: string;
    linkedin: string;
  };
};

export type Highlight = {
  title: string;
  color: string;
};

export type Stat = {
  value: string;
  label: string;
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
};

export type ExperienceItem = {
  company: string;
  summary: string;
  period: string;
};

export type ThoughtItem = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export type ToolItem = {
  name: string;
  role: string;
};

export const profile: ProfileData = {
  name: "Muhammad Moaiz",
  role: "React Native Developer",
  intro:
    "A software engineer crafting intuitive products with a blend of motion, accessibility, and performance.",
  imageUrl: "/lovable-uploads/90dce04e-90f4-49dc-a702-309682fd39ee.jpg",
  email: "muhammadmoaimrmr786@gmail.com",
  social: {
    github: "https://github.com/MuhammadMoaiz001",
    twitter: "https://twitter.com/M_Moaiz001",
    linkedin: "https://www.linkedin.com/in/muhammadmoaiz",
  },
};

export const highlights: Highlight[] = [
  { title: "React Native apps with smooth UX", color: "bg-orange-500 text-white" },
  { title: "Firebase, APIs, and scalable state", color: "bg-lime-300 text-zinc-900" },
];

export const stats: Stat[] = [
  { value: "+4", label: "Years of experience" },
  { value: "+20", label: "Projects completed" },
  { value: "+10", label: "Happy clients" },
];

export const experienceItems: ExperienceItem[] = [
  {
    company: "Freelance & Contract Projects",
    summary:
      "Built and shipped production-ready mobile applications for startups and businesses, focusing on performance, maintainable architecture, and polished UI.",
    period: "2020 - Present",
  },
  {
    company: "Product Development Collaborations",
    summary:
      "Worked with cross-functional teams to define product features, improve onboarding flows, and deliver updates based on user feedback.",
    period: "2018 - 2020",
  },
  {
    company: "Independent App Publishing",
    summary:
      "Designed and launched personal app ideas from concept to deployment, including analytics integration and iterative feature releases.",
    period: "2017 - 2018",
  },
];

export const thoughtItems: ThoughtItem[] = [
  {
    title: "Building Mobile Apps That Feel Fast",
    excerpt:
      "Small UX and performance decisions compound into better retention and stronger product outcomes.",
    date: "Apr 8, 2022",
    readTime: "6 min read",
  },
  {
    title: "How to Structure Scalable React Native Projects",
    excerpt:
      "A practical approach to modular architecture, reusable components, and state management at scale.",
    date: "Mar 15, 2022",
    readTime: "6 min read",
  },
  {
    title: "Turning Product Ideas into Shippable Apps",
    excerpt:
      "A repeatable workflow for going from concept to release with clarity, speed, and quality.",
    date: "Feb 28, 2022",
    readTime: "6 min read",
  },
];

export const toolItems: ToolItem[] = [
  { name: "React Native", role: "Mobile App Framework" },
  { name: "TypeScript", role: "Typed JavaScript" },
  { name: "Firebase", role: "Backend Platform" },
  { name: "React", role: "Web UI Library" },
  { name: "Figma", role: "UI Prototyping" },
  { name: "Node.js", role: "Backend Runtime" },
];

export const projectsData: Record<string, ProjectData> = {
  nemodelivers: {
    name: "NemoDelivers",
    tagline: "Food Delivery Made Easy",
    description: "A cross-platform food delivery app connecting users with local restaurants.",
    fullDescription:
      "NemoDelivers is a comprehensive food delivery platform that connects users with local restaurants, offering a seamless ordering experience. The app features an intuitive interface for browsing restaurants, exploring menus, and placing orders with just a few taps.",
    coverImage: "/project-food-delivery.jpg",
    features: [
      {
        title: "Restaurant Discovery",
        description:
          "Browse through a curated list of local restaurants with detailed information about cuisine types, operating hours, and customer ratings.",
      },
      {
        title: "Real-time Order Tracking",
        description:
          "Track your order in real-time from preparation to delivery with an interactive map interface.",
      },
      {
        title: "Multiple Payment Options",
        description:
          "Pay with credit cards, digital wallets, or cash on delivery for a convenient checkout experience.",
      },
      {
        title: "Personalized Recommendations",
        description:
          "Get restaurant and dish recommendations based on your previous orders and preferences.",
      },
    ],
    testimonials: [
      {
        quote:
          "NemoDelivers has completely changed how I order food. The interface is intuitive and I can find all my favorite restaurants in one place.",
        author: "Sarah M.",
        role: "Regular User",
      },
      {
        quote:
          "As a restaurant owner, partnering with NemoDelivers has significantly increased our orders and expanded our customer base.",
        author: "John D.",
        role: "Restaurant Partner",
      },
    ],
    technologies: ["React Native", "Firebase", "Redux", "Animation"],
    primaryColor: "from-orange-500 to-red-600",
    lightColor: "bg-orange-100",
    darkColor: "bg-orange-900",
    accentColor: "text-orange-500",
  },
  budgeto: {
    name: "BudgetO",
    tagline: "Take Control of Your Finances",
    description: "A finance management app for transaction tracking and budget planning.",
    fullDescription:
      "BudgetO is a comprehensive financial management tool designed to help users track expenses, set and monitor budgets, and gain insights into their spending habits. The app provides a visual dashboard with intuitive charts and graphs that make financial planning accessible to everyone.",
    coverImage: "/project-finance.png",
    features: [
      {
        title: "Expense Tracking",
        description:
          "Easily log and categorize your daily expenses to maintain a clear record of your spending.",
      },
      {
        title: "Budget Planning",
        description:
          "Set monthly budgets for different expense categories and receive alerts when approaching limits.",
      },
      {
        title: "Financial Insights",
        description:
          "Get detailed analytics and reports on your spending patterns and financial health.",
      },
      {
        title: "Saving Goals",
        description:
          "Create and track progress toward your saving goals with visual progress indicators.",
      },
    ],
    testimonials: [
      {
        quote:
          "BudgetO has helped me become more disciplined with my spending. The visual breakdowns make it easy to see where my money is going.",
        author: "Michael T.",
        role: "Premium User",
      },
      {
        quote:
          "I've tried many finance apps, but BudgetO strikes the perfect balance between functionality and simplicity.",
        author: "Elena K.",
        role: "Financial Advisor",
      },
    ],
    technologies: ["React Native", "Firebase", "Charts", "Context API"],
    primaryColor: "from-green-500 to-teal-600",
    lightColor: "bg-green-100",
    darkColor: "bg-green-900",
    accentColor: "text-green-500",
  },
  zenithwalls: {
    name: "Zenith Walls",
    tagline: "Stunning Wallpapers for Every Device",
    description: "Browse and download high-quality wallpapers for your devices.",
    fullDescription:
      "Zenith Walls is a premium wallpaper application offering thousands of high-quality backgrounds for smartphones, tablets, and desktops. The app features a clean, minimalist interface that puts the focus on stunning visuals while making discovery and download a breeze.",
    coverImage: "/project-wallpaper.png",
    features: [
      {
        title: "Extensive Collection",
        description:
          "Access thousands of high-resolution wallpapers across multiple categories like nature, abstract, minimal, and more.",
      },
      {
        title: "Smart Search",
        description:
          "Find the perfect wallpaper with our intelligent search and filtering system based on colors, themes, and keywords.",
      },
      {
        title: "Daily Updates",
        description:
          "Discover new wallpapers every day with our featured section and daily recommendations.",
      },
      {
        title: "Device Optimization",
        description:
          "Automatically adjusts wallpapers to fit perfectly on your specific device screen resolution.",
      },
    ],
    testimonials: [
      {
        quote:
          "Zenith Walls has the best collection of minimal wallpapers I've ever seen. My phone has never looked better!",
        author: "Alex W.",
        role: "Graphic Designer",
      },
      {
        quote:
          "I love how easy it is to find and apply new wallpapers. The categories are well-organized and the search function is powerful.",
        author: "Jamie L.",
        role: "Tech Enthusiast",
      },
    ],
    technologies: ["React Native", "API Integration", "UI/UX", "Redux"],
    primaryColor: "from-purple-500 to-indigo-600",
    lightColor: "bg-purple-100",
    darkColor: "bg-purple-900",
    accentColor: "text-purple-500",
  },
  skycast: {
    name: "Sky Cast",
    tagline: "Weather Forecasts You Can Trust",
    description: "Real-time weather updates and forecasts with location tracking.",
    fullDescription:
      "Sky Cast delivers accurate, real-time weather information with a beautiful, intuitive interface. The app provides current conditions, hourly forecasts, and extended predictions with dynamic visuals that adapt to the weather and time of day. Advanced features include severe weather alerts, radar maps, and detailed meteorological data.",
    coverImage: "/project-weather.jpeg",
    features: [
      {
        title: "Real-Time Updates",
        description:
          "Get minute-by-minute weather updates based on your current location with high accuracy.",
      },
      {
        title: "Interactive Maps",
        description:
          "Explore interactive radar maps showing precipitation, temperature, and wind patterns in your area.",
      },
      {
        title: "7-Day Forecast",
        description:
          "Plan ahead with detailed 7-day forecasts including temperature, precipitation chance, and wind conditions.",
      },
      {
        title: "Weather Alerts",
        description:
          "Receive timely notifications about severe weather conditions and changes in your area.",
      },
    ],
    testimonials: [
      {
        quote:
          "Sky Cast has become my go-to weather app. The forecasts are remarkably accurate and the interface is gorgeous.",
        author: "Robert J.",
        role: "Outdoor Enthusiast",
      },
      {
        quote:
          "As someone who works outdoors, having reliable weather information is crucial. Sky Cast has never let me down.",
        author: "Susan M.",
        role: "Landscape Photographer",
      },
    ],
    technologies: ["React Native", "API Integration", "Animations", "Geolocation"],
    primaryColor: "from-blue-500 to-cyan-600",
    lightColor: "bg-blue-100",
    darkColor: "bg-blue-900",
    accentColor: "text-blue-500",
  },
  "edumate-ai": {
    name: "EduMate AI",
    tagline: "Personalized Learning Powered by AI",
    description: "AI-driven educational app that personalizes learning experiences.",
    fullDescription:
      "EduMate AI revolutionizes education by delivering personalized learning experiences driven by artificial intelligence. The app adapts to each student's learning style, pace, and preferences, creating custom study plans and interactive lessons that optimize knowledge retention and skill development.",
    coverImage: "/lovable-uploads/07331ae1-46f9-43f4-b002-e023eb4c5678.png",
    features: [
      {
        title: "Adaptive Learning Paths",
        description:
          "The AI analyzes your learning patterns and creates customized learning paths that adapt in real-time to your progress.",
      },
      {
        title: "Virtual AI Tutor",
        description:
          "Get assistance from an intelligent virtual tutor that can answer questions, explain concepts, and provide feedback 24/7.",
      },
      {
        title: "Interactive Content",
        description:
          "Engage with multimedia lessons, quizzes, and challenges designed to make learning engaging and effective.",
      },
      {
        title: "Progress Analytics",
        description:
          "Track your learning journey with detailed analytics and insights to understand strengths and areas for improvement.",
      },
    ],
    testimonials: [
      {
        quote:
          "EduMate AI has transformed how my daughter studies. The personalized approach has significantly improved her grades and confidence.",
        author: "Patricia N.",
        role: "Parent",
      },
      {
        quote:
          "As an educator, I'm impressed by EduMate's ability to adapt to different learning styles. It's like having a teaching assistant for each student.",
        author: "Dr. Thomas L.",
        role: "Education Professor",
      },
    ],
    technologies: ["React Native", "Machine Learning", "API Integration", "Firebase"],
    primaryColor: "from-pink-500 to-rose-600",
    lightColor: "bg-pink-100",
    darkColor: "bg-pink-900",
    accentColor: "text-pink-500",
  },
};

export const featuredProjectSlugs = ["nemodelivers", "budgeto", "zenithwalls"] as const;
