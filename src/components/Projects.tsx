import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Rocket, Building2, Code2, Package, Globe, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { highlights, profile, projectsData, stats } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket,
  Building2,
  Code2,
  Package,
};

// Categorised slugs
const webSlugs = ["routeradiant", "namsflow", "kippo", "velvox", "namsstudio", "pakfiler"] as const;
const mobileSlugs = ["stocksuite", "nemodelivers", "budgeto", "skycast", "spotspace", "pakfiler"] as const;

type Slug = keyof typeof projectsData;

const ProjectRow = ({ slug, index }: { slug: string; index: number }) => {
  const project = projectsData[slug as Slug];
  if (!project) return null;
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <Link
        to={`/project/${slug}`}
        className="flex items-center gap-4 rounded-2xl border border-zinc-800/80 bg-zinc-950/40 px-4 py-3.5 transition-all hover:border-zinc-700 hover:bg-zinc-900/60 group"
      >
        {/* Logo */}
        <div className="shrink-0 h-[68px] w-[68px] rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-700/40">
          <img
            src={project.coverImage}
            alt={`${project.name} logo`}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-white leading-tight">{project.name}</h3>
          <p className="mt-0.5 text-sm text-zinc-500">{project.tagline}</p>
        </div>

        {/* Arrow */}
        <ArrowUpRight className="h-5 w-5 shrink-0 text-orange-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </Link>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="space-y-16">
      {/* Hero Headline */}
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight uppercase">
          Products
          <span className="block mt-1 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
            I've Built
          </span>
        </h1>
        <p className="max-w-2xl text-zinc-400 text-sm sm:text-base leading-relaxed font-medium">
          {profile.intro}
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const IconComponent = stat.icon ? iconMap[stat.icon] : null;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 flex flex-col items-center justify-center text-center group hover:border-zinc-800 transition-all duration-300"
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
              
              {IconComponent && (
                <div className="mb-3 text-orange-500 p-2 rounded-xl bg-orange-500/5 border border-orange-500/10 group-hover:scale-110 group-hover:bg-orange-500/10 transition-all duration-300">
                  <IconComponent className="h-5 w-5" />
                </div>
              )}
              <p className="text-3xl font-black text-white tracking-tight group-hover:text-orange-400 transition-colors duration-300">
                {stat.value}
              </p>
              <p className="mt-2 text-[10px] uppercase font-bold tracking-widest text-zinc-500 leading-snug">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Flagship Highlights */}
      <div className="grid gap-5 sm:grid-cols-2">
        {highlights.map((item, index) => {
          const isRouteRadiant = item.title.toLowerCase().includes("routeradiant");
          const glowColorClass = isRouteRadiant 
            ? "hover:border-violet-500/30 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.12)]" 
            : "hover:border-orange-500/30 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.12)]";
          const badgeColorClass = isRouteRadiant 
            ? "text-violet-400 bg-violet-500/10 border-violet-500/20" 
            : "text-orange-400 bg-orange-500/10 border-orange-500/20";
          const glowBgGrad = isRouteRadiant
            ? "from-violet-500/5"
            : "from-orange-500/5";

          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/60 p-6 flex flex-col justify-between group cursor-pointer transition-all duration-300 ${glowColorClass}`}
              onClick={() => item.link && window.open(item.link, "_blank")}
            >
              {/* Card Ambient Glow background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${glowBgGrad} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none`} />

              <div className="relative flex items-start justify-between gap-3">
                <div className="space-y-3">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider border ${badgeColorClass}`}>
                    Flagship Product
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-white tracking-tight uppercase group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-zinc-400 leading-relaxed max-w-sm">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
              
              {item.link && (
                <div className="mt-5 relative z-10 inline-flex items-center gap-1.5 self-start rounded-xl bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 px-3 py-1.5 text-[11px] font-bold text-zinc-300 hover:text-white transition-all">
                  <ExternalLink className="h-3 w-3" />
                  Live Product
                </div>
              )}
            </motion.article>
          );
        })}
      </div>

      {/* Web Projects */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 mb-4">
          <Globe className="h-4 w-4 text-orange-400" />
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Web Projects
          </h2>
          <div className="flex-1 h-px bg-zinc-800" />
          <span className="text-xs text-zinc-700">{webSlugs.length}</span>
        </div>
        {webSlugs.map((slug, index) => (
          <ProjectRow key={slug} slug={slug} index={index} />
        ))}
      </div>

      {/* Mobile Apps */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 mb-4">
          <Smartphone className="h-4 w-4 text-orange-400" />
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Mobile Apps
          </h2>
          <div className="flex-1 h-px bg-zinc-800" />
          <span className="text-xs text-zinc-700">{mobileSlugs.length}</span>
        </div>
        {mobileSlugs.map((slug, index) => (
          <ProjectRow key={slug} slug={slug} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
