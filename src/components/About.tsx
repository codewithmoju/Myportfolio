import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";

// Real SVG icons for all tech stack and AI tools
const skillIcons: Record<string, React.ReactNode> = {
  HTML: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
      className="w-5 h-5 object-contain"
      alt="HTML5"
    />
  ),
  CSS: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
      className="w-5 h-5 object-contain"
      alt="CSS3"
    />
  ),
  JavaScript: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
      className="w-5 h-5 object-contain rounded-md"
      alt="JavaScript"
    />
  ),
  TypeScript: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
      className="w-5 h-5 object-contain rounded-md"
      alt="TypeScript"
    />
  ),
  "React JS": (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
      className="w-5 h-5 object-contain"
      alt="React"
    />
  ),
  "Next JS": (
    <img
      src="https://images.icon-icons.com/2389/PNG/512/next_js_logo_icon_145038.png"
      className="w-5 h-5 object-contain"
      alt="Next.js"
    />
  ),
  "Tailwind CSS": (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
      className="w-5 h-5 object-contain"
      alt="Tailwind CSS"
    />
  ),
  Redux: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
      className="w-5 h-5 object-contain"
      alt="Redux"
    />
  ),
  "React Native": (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
      className="w-5 h-5 object-contain"
      alt="React Native"
    />
  ),
  Expo: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg"
      className="w-5 h-5 object-contain brightness-0 invert"
      alt="Expo"
    />
  ),
  Supabase: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
      className="w-5 h-5 object-contain"
      alt="Supabase"
    />
  ),
  Firebase: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
      className="w-5 h-5 object-contain"
      alt="Firebase"
    />
  ),
  PostgreSQL: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
      className="w-5 h-5 object-contain"
      alt="PostgreSQL"
    />
  ),
  Git: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
      className="w-5 h-5 object-contain"
      alt="Git"
    />
  ),
  GitHub: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
      className="w-5 h-5 object-contain brightness-0 invert"
      alt="GitHub"
    />
  ),
  "Claude Code CLI & Web": (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-p5YdXmIAX8O-alQnPJBX0rUVloON5oM9ng&s"
      className="w-5 h-5 object-contain rounded-md"
      alt="Claude"
    />
  ),
  "Gemini CLI & Web": (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYM-_oCfjiysWdSUR-8tzX8fUEtcdTo1naJg&s"
      className="w-5 h-5 object-contain rounded-md"
      alt="Gemini"
    />
  ),
  "ChatGPT & Codex": (
    <img
      src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-avatar/avatars/codex.webp"
      className="w-5 h-5 object-contain rounded-md"
      alt="ChatGPT & Codex"
    />
  ),
  DeepSeek: (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8kb3djVaVAlVIpCV7JBbe4lh4uxHfGPk1ow&s"
      className="w-5 h-5 object-contain rounded-md"
      alt="DeepSeek"
    />
  ),
  Kimi: (
    <img
      src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/kimi-ai-icon.png"
      className="w-5 h-5 object-contain rounded-md"
      alt="Kimi"
    />
  ),
  Lovable: (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrpccRrtHJWE_4IALGg1ssz9VvgZASgRPxQ&s"
      className="w-5 h-5 object-contain rounded-md"
      alt="Lovable"
    />
  ),
  Bolt: (
    <img
      src="https://media.istockphoto.com/id/1234991640/vector/energy-electricity-power-icon.jpg?s=612x612&w=0&k=20&c=c7mEczpw6phZqtZE1C9BM3cX2QdgH7FwVhD6afpR3og="
      className="w-5 h-5 object-contain rounded-md"
      alt="Bolt"
    />
  ),
  Windsurf: (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrxcRvAExynNfMLF25EyLbUccnHUlCsisKxA&s"
      className="w-5 h-5 object-contain rounded-md"
      alt="Windsurf"
    />
  ),
  Trae: (
    <img
      src="https://media.licdn.com/dms/image/v2/D560BAQFgeNBPVf7J0w/company-logo_200_200/B56ZyOy.aGJ4AI-/0/1771922254057/traeai_logo?e=2147483647&v=beta&t=bwqEPveY0UwwRaxccpjzCdfAXYxVN1KNl230vGkZHyA"
      className="w-5 h-5 object-contain rounded-md"
      alt="Trae"
    />
  ),
  Verdent: (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-IxBJyy4w-WT_OgHp1XtsIayaqfrR984BFw&s"
      className="w-5 h-5 object-contain rounded-md"
      alt="Verdent"
    />
  ),
  Wrap: (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScQ2r9tcVNQ0JCRYqSPdAGCQa6c5DHbdpHYQ&s"
      className="w-5 h-5 object-contain rounded-md"
      alt="Wrap"
    />
  ),
  Antigravity: (
    <img
      src="https://pbs.twimg.com/profile_images/1990585614279049216/-Zz6T2nk_400x400.png"
      className="w-5 h-5 object-contain rounded-md"
      alt="Antigravity"
    />
  ),
  "GitHub Copilot": (
    <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-[#6F42C1]">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.087 3.172 9.429 7.625 11.162.203.04.375-.027.375-.164v-1.127c-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .14.17.208.377.164C20.832 21.427 24 17.087 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  ),
};

const defaultIcon = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-zinc-400" strokeWidth="2">
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6M12 4.5l-2 15" />
  </svg>
);

interface BrandStyle {
  border: string;
  glow: string;
  bg: string;
  text: string;
  iconClass?: string;
}

const brandStyles: Record<string, BrandStyle> = {
  // Frontend
  HTML: {
    border: "hover:border-[#E34F26]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(227,79,38,0.25)]",
    bg: "hover:bg-[#E34F26]/5",
    text: "group-hover:text-[#E34F26]",
  },
  CSS: {
    border: "hover:border-[#1572B6]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(21,114,182,0.25)]",
    bg: "hover:bg-[#1572B6]/5",
    text: "group-hover:text-[#1572B6]",
  },
  JavaScript: {
    border: "hover:border-[#F7DF1E]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(247,223,30,0.25)]",
    bg: "hover:bg-[#F7DF1E]/5",
    text: "group-hover:text-[#F7DF1E]",
  },
  TypeScript: {
    border: "hover:border-[#3178C6]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(49,120,198,0.25)]",
    bg: "hover:bg-[#3178C6]/5",
    text: "group-hover:text-[#3178C6]",
  },
  "React JS": {
    border: "hover:border-[#61DAFB]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(97,218,251,0.25)]",
    bg: "hover:bg-[#61DAFB]/5",
    text: "group-hover:text-[#61DAFB]",
    iconClass: "group-hover:animate-[spin_10s_linear_infinite]",
  },
  "Next JS": {
    border: "hover:border-zinc-400/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(255,255,255,0.15)]",
    bg: "hover:bg-white/5",
    text: "group-hover:text-white",
  },
  "Tailwind CSS": {
    border: "hover:border-[#38B2AC]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(56,178,172,0.25)]",
    bg: "hover:bg-[#38B2AC]/5",
    text: "group-hover:text-[#38B2AC]",
  },
  Redux: {
    border: "hover:border-[#764ABC]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(118,74,188,0.25)]",
    bg: "hover:bg-[#764ABC]/5",
    text: "group-hover:text-[#764ABC]",
  },
  // Mobile
  "React Native": {
    border: "hover:border-[#61DAFB]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(97,218,251,0.25)]",
    bg: "hover:bg-[#61DAFB]/5",
    text: "group-hover:text-[#61DAFB]",
    iconClass: "group-hover:animate-[spin_10s_linear_infinite]",
  },
  Expo: {
    border: "hover:border-zinc-400/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(255,255,255,0.15)]",
    bg: "hover:bg-white/5",
    text: "group-hover:text-white",
  },
  // Backend & Database
  Supabase: {
    border: "hover:border-[#3ECF8E]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(62,207,142,0.25)]",
    bg: "hover:bg-[#3ECF8E]/5",
    text: "group-hover:text-[#3ECF8E]",
  },
  Firebase: {
    border: "hover:border-[#FFCA28]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(255,202,40,0.25)]",
    bg: "hover:bg-[#FFCA28]/5",
    text: "group-hover:text-[#FFCA28]",
  },
  PostgreSQL: {
    border: "hover:border-[#4169E1]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(65,105,225,0.25)]",
    bg: "hover:bg-[#4169E1]/5",
    text: "group-hover:text-[#4169E1]",
  },
  // Development Tools
  Git: {
    border: "hover:border-[#F05032]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(240,80,50,0.25)]",
    bg: "hover:bg-[#F05032]/5",
    text: "group-hover:text-[#F05032]",
  },
  GitHub: {
    border: "hover:border-zinc-400/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(255,255,255,0.15)]",
    bg: "hover:bg-white/5",
    text: "group-hover:text-white",
  },
  // AI & Agentic Tools
  "Claude Code CLI & Web": {
    border: "hover:border-[#D97756]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(217,119,86,0.25)]",
    bg: "hover:bg-[#D97756]/5",
    text: "group-hover:text-[#D97756]",
  },
  "Gemini CLI & Web": {
    border: "hover:border-[#8B5CF6]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(139,92,246,0.25)]",
    bg: "hover:bg-[#8B5CF6]/5",
    text: "group-hover:text-[#a78bfa]",
  },
  "ChatGPT & Codex": {
    border: "hover:border-[#10A37F]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(16,163,127,0.25)]",
    bg: "hover:bg-[#10A37F]/5",
    text: "group-hover:text-[#10A37F]",
  },
  DeepSeek: {
    border: "hover:border-[#002FA7]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(0,47,167,0.25)]",
    bg: "hover:bg-[#002FA7]/5",
    text: "group-hover:text-[#38bdf8]",
  },
  Kimi: {
    border: "hover:border-[#FF5A00]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(255,90,0,0.25)]",
    bg: "hover:bg-[#FF5A00]/5",
    text: "group-hover:text-[#FF5A00]",
  },
  Lovable: {
    border: "hover:border-[#EC4899]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(236,72,153,0.25)]",
    bg: "hover:bg-[#EC4899]/5",
    text: "group-hover:text-[#EC4899]",
  },
  Bolt: {
    border: "hover:border-[#FBBF24]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(251,191,36,0.25)]",
    bg: "hover:bg-[#FBBF24]/5",
    text: "group-hover:text-[#FBBF24]",
  },
  Windsurf: {
    border: "hover:border-[#0EA5E9]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(14,165,233,0.25)]",
    bg: "hover:bg-[#0EA5E9]/5",
    text: "group-hover:text-[#0EA5E9]",
  },
  Trae: {
    border: "hover:border-[#10B981]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(16,185,129,0.25)]",
    bg: "hover:bg-[#10B981]/5",
    text: "group-hover:text-[#10B981]",
  },
  Verdent: {
    border: "hover:border-[#16A34A]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(22,163,74,0.25)]",
    bg: "hover:bg-[#16A34A]/5",
    text: "group-hover:text-[#16A34A]",
  },
  Wrap: {
    border: "hover:border-[#EC4899]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(236,72,153,0.25)]",
    bg: "hover:bg-[#EC4899]/5",
    text: "group-hover:text-[#EC4899]",
  },
  Antigravity: {
    border: "hover:border-[#0EA5E9]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(14,165,233,0.25)]",
    bg: "hover:bg-[#0EA5E9]/5",
    text: "group-hover:text-[#0EA5E9]",
  },
  "GitHub Copilot": {
    border: "hover:border-[#6F42C1]/40",
    glow: "hover:shadow-[0_0_20px_-3px_rgba(111,66,193,0.25)]",
    bg: "hover:bg-[#6F42C1]/5",
    text: "group-hover:text-[#a78bfa]",
  },
};

const defaultStyle: BrandStyle = {
  border: "hover:border-primary/40",
  glow: "hover:shadow-[0_0_15px_-3px_rgba(188,108,37,0.15)]",
  bg: "hover:bg-primary/5",
  text: "group-hover:text-primary",
};

const About = () => {
  return (
    <section id="about" className="relative space-y-12 overflow-hidden py-4">
      {/* Subtle Dot-Matrix Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--grid-color)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      {/* Title */}
      <div className="relative z-10">
        <h2 className="section-title text-foreground">
          TECH
          <span className="section-title-muted"> STACK</span>
        </h2>
      </div>

      {/* Main Categories Section */}
      <div className="relative z-10 space-y-10">
        {skillCategories.map((cat, catIndex) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.08 }}
            className="grid gap-6 md:grid-cols-[220px_1fr] items-start border-b border-border/60 pb-8 last:border-0 last:pb-0"
          >
            {/* Category Title on the Left */}
            <div className="md:sticky md:top-24 pt-1 space-y-2.5">
              <div className="flex items-center gap-2.5">
                <span className={`w-2 h-2 rounded-full bg-current shrink-0 ${cat.color.split(" ")[0]}`} />
                <h3 className="text-muted-foreground/90 font-bold font-display tracking-[0.15em] text-sm md:text-base uppercase">
                  {cat.category}
                </h3>
              </div>
              <span className="inline-flex items-center text-[10px] font-mono font-medium px-2 py-0.5 rounded border border-border bg-card/45 text-muted-foreground/60">
                {cat.skills.length} {cat.skills.length === 1 ? "Tool" : "Tools"}
              </span>
            </div>

            {/* Grid of Technologies on the Right */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {cat.skills.map((skill, skillIndex) => {
                const style = brandStyles[skill] || defaultStyle;
                return (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.05 + skillIndex * 0.02 }}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className={`flex items-center gap-3 rounded-xl border border-border/80 bg-card/20 backdrop-blur-md px-3.5 py-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.01)] transition-all duration-300 ease-out group cursor-default ${style.border} ${style.glow} ${style.bg}`}
                  >
                    <div className={`shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:brightness-110 ${style.iconClass || ""}`}>
                      {skillIcons[skill] || defaultIcon}
                    </div>
                    <span className={`text-xs sm:text-sm font-semibold text-muted-foreground transition-colors truncate ${style.text}`}>
                      {skill}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}

        {/* Languages Category */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid gap-6 md:grid-cols-[220px_1fr] items-start border-b border-border/60 pb-8 last:border-0"
        >
          {/* Title on the Left */}
          <div className="md:sticky md:top-24 pt-1 space-y-2.5">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-zinc-500 shrink-0" />
              <h3 className="text-muted-foreground/90 font-bold font-display tracking-[0.15em] text-sm md:text-base uppercase">
                Languages
              </h3>
            </div>
            <span className="inline-flex items-center text-[10px] font-mono font-medium px-2 py-0.5 rounded border border-border bg-card/45 text-muted-foreground/60">
              2 Languages
            </span>
          </div>

          {/* Languages List on the Right */}
          <div className="flex flex-wrap gap-3">
            {/* English */}
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              className="flex items-center gap-3 rounded-xl border border-border/80 bg-card/20 backdrop-blur-md px-4 py-3.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.01)] transition-all duration-300 ease-out group cursor-default hover:border-sky-500/40 hover:shadow-[0_0_20px_-3px_rgba(14,165,233,0.15)] hover:bg-sky-500/5"
            >
              <div>
                <p className="text-sm font-bold text-muted-foreground group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors font-display">English</p>
                <p className="text-xs text-muted-foreground/60 transition-colors">Professional</p>
              </div>
            </motion.div>

            {/* Urdu */}
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              className="flex items-center gap-3 rounded-xl border border-border/80 bg-card/20 backdrop-blur-md px-4 py-3.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.01)] transition-all duration-300 ease-out group cursor-default hover:border-[#bc6c25]/45 hover:shadow-[0_0_20px_-3px_rgba(188,108,37,0.15)] hover:bg-[#bc6c25]/5"
            >
              <div>
                <p className="text-sm font-bold text-muted-foreground group-hover:text-[#bc6c25] dark:group-hover:text-[#dda15e] transition-colors font-display">Urdu</p>
                <p className="text-xs text-muted-foreground/60 transition-colors font-mono">Native / Bilingual</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
