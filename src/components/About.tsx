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

const About = () => {
  return (
    <section id="about" className="space-y-12">
      {/* Title */}
      <div>
        <h2 className="section-title text-white">
          TECH
          <span className="section-title-muted"> STACK</span>
        </h2>
      </div>

      {/* Main Categories Section */}
      <div className="space-y-10">
        {skillCategories.map((cat, catIndex) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.08 }}
            className="grid gap-6 md:grid-cols-[200px_1fr] items-start border-b border-zinc-900 pb-8 last:border-0 last:pb-0"
          >
            {/* Category Title on the Left */}
            <div className="md:sticky md:top-24 pt-1">
              <h3 className="text-zinc-500 font-black tracking-widest text-lg md:text-xl uppercase">
                {cat.category}
              </h3>
            </div>

            {/* Grid of Technologies on the Right */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {cat.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.05 + skillIndex * 0.02 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center gap-3 rounded-xl border border-zinc-800/80 bg-zinc-950/40 px-3.5 py-3 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all group cursor-default"
                >
                  <div className="shrink-0 flex items-center justify-center">
                    {skillIcons[skill] || defaultIcon}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-400 group-hover:text-white transition-colors truncate">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Languages Category */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid gap-6 md:grid-cols-[200px_1fr] items-start border-b border-zinc-900 pb-8 last:border-0"
        >
          {/* Title on the Left */}
          <div className="pt-1">
            <h3 className="text-zinc-500 font-black tracking-widest text-lg md:text-xl uppercase">
              Languages
            </h3>
          </div>

          {/* Languages List on the Right */}
          <div className="flex flex-wrap gap-3">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all cursor-default"
            >
              <div>
                <p className="text-sm font-bold text-white">English</p>
                <p className="text-xs text-zinc-500">Professional</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all cursor-default"
            >
              <div>
                <p className="text-sm font-bold text-white">Urdu</p>
                <p className="text-xs text-zinc-500">Native / Bilingual</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
