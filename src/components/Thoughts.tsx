import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, BookOpen } from "lucide-react";
import { thoughtItems } from "@/data/portfolio";

const tagColors: Record<string, { badge: string; text: string; borderGlow: string; accentGlow: string }> = {
  Product: {
    badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    text: "group-hover:text-indigo-400",
    borderGlow: "hover:border-indigo-500/40",
    accentGlow: "from-indigo-600 to-violet-600",
  },
  Mobile: {
    badge: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    text: "group-hover:text-sky-400",
    borderGlow: "hover:border-sky-500/40",
    accentGlow: "from-sky-500 to-cyan-500",
  },
  Startup: {
    badge: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    text: "group-hover:text-orange-400",
    borderGlow: "hover:border-orange-500/40",
    accentGlow: "from-orange-500 to-amber-500",
  },
};

const Thoughts = () => {
  const featuredPost = thoughtItems[0];
  const gridPosts = thoughtItems.slice(1);

  return (
    <section id="thoughts" className="relative space-y-8 overflow-hidden py-4">
      {/* Title block */}
      <div className="space-y-2 relative z-10">
        <h2 className="section-title text-white">
          DESIGN
          <span className="section-title-muted"> THOUGHTS</span>
        </h2>
        <p className="text-zinc-500 max-w-xl text-xs sm:text-sm leading-relaxed">
          Reflections on software architecture, cross-platform scaling, and digital agency co-founding lessons.
        </p>
      </div>

      <div className="space-y-6 relative z-10">
        {/* Featured Post Spotlight */}
        {featuredPost && (
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`panel-card p-6 md:p-8 relative group overflow-hidden cursor-default transition-all duration-300 hover:scale-[1.01] hover:-translate-y-0.5 border-zinc-800/80 bg-zinc-950/20 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] ${tagColors[featuredPost.tag]?.borderGlow || ""}`}
          >
            {/* Ambient Background Spot Glow */}
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full group-hover:bg-indigo-500/10 transition-all duration-500 pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-xs font-semibold font-mono tracking-wide uppercase bg-indigo-500/10 text-indigo-400 border-indigo-500/20">
                    <BookOpen className="h-3 w-3" /> Featured Post
                  </span>
                  {featuredPost.tag && (
                    <span className={`px-2.5 py-0.5 rounded-full border text-xs font-semibold tracking-wide uppercase ${tagColors[featuredPost.tag]?.badge}`}>
                      {featuredPost.tag}
                    </span>
                  )}
                </div>

                <h3 className={`text-2xl md:text-3xl font-extrabold text-white leading-tight font-display transition-colors duration-300 ${tagColors[featuredPost.tag]?.text}`}>
                  {featuredPost.title}
                </h3>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-3xl">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 pt-2">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {featuredPost.date}
                  </span>
                  <span className="text-zinc-800">•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>

              <div className="self-end md:self-start shrink-0 flex items-center justify-center p-2 rounded-full border border-zinc-800 bg-zinc-900/40 text-zinc-400 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-all duration-300">
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* Bottom Glow Line */}
            <div className={`absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r ${tagColors[featuredPost.tag]?.accentGlow || "from-indigo-600 to-violet-600"} transition-all duration-300 w-0 group-hover:w-full`} />
          </motion.article>
        )}

        {/* Secondary Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {gridPosts.map((item, index) => {
            const colors = tagColors[item.tag] || {
              badge: "bg-zinc-700/10 text-zinc-400 border-zinc-600/20",
              text: "group-hover:text-zinc-200",
              borderGlow: "hover:border-zinc-700",
              accentGlow: "from-zinc-700 to-zinc-500",
            };

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.3 }}
                className={`panel-card p-6 relative group overflow-hidden cursor-default transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 border-zinc-800/80 bg-zinc-950/20 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] flex flex-col justify-between ${colors.borderGlow}`}
              >
                {/* Ambient Spot Glow */}
                <div className="absolute -right-12 -top-12 w-24 h-24 bg-current/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none" />

                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    {item.tag && (
                      <span className={`px-2.5 py-0.5 rounded-full border text-xs font-semibold tracking-wide uppercase ${colors.badge}`}>
                        {item.tag}
                      </span>
                    )}
                    <div className="shrink-0 flex items-center justify-center p-1.5 rounded-full border border-zinc-800 bg-zinc-900/40 text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-all duration-300">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <h3 className={`text-xl font-bold text-white leading-tight font-display transition-colors duration-300 ${colors.text}`}>
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 pt-4 mt-auto">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.date}
                  </span>
                  <span className="text-zinc-800">•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {item.readTime}
                  </span>
                </div>

                {/* Bottom Glow Line */}
                <div className={`absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r ${colors.accentGlow} transition-all duration-300 w-0 group-hover:w-full`} />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Thoughts;
