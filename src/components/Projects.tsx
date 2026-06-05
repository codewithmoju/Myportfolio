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
    <section id="projects" className="space-y-14">
      {/* Hero Headline */}
      <div>
        <h1 className="section-title text-white">
          PRODUCTS
          <span className="section-title-muted"> I'VE BUILT</span>
        </h1>
        <p className="mt-6 max-w-xl text-zinc-400 leading-relaxed">
          {profile.intro}
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const IconComponent = stat.icon ? iconMap[stat.icon] : null;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="panel-card p-5 text-center flex flex-col items-center justify-center"
            >
              {IconComponent && (
                <div className="mb-2 text-orange-400">
                  <IconComponent className="h-6 w-6" />
                </div>
              )}
              <p className="text-4xl font-black text-white">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500 leading-snug">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Flagship Highlights */}
      <div className="grid gap-4 sm:grid-cols-2">
        {highlights.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className={`rounded-2xl p-6 ${item.color} relative overflow-hidden group cursor-pointer`}
            onClick={() => item.link && window.open(item.link, "_blank")}
          >
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300" />
            <div className="relative flex items-start justify-between gap-3">
              <div>
                <p className="text-lg font-black uppercase leading-tight">{item.title}</p>
                <p className="mt-2 text-xs text-white/70 leading-relaxed max-w-52">{item.subtitle}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            {item.link && (
              <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium">
                <ExternalLink className="h-3 w-3" />
                Live Product
              </div>
            )}
          </motion.article>
        ))}
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
