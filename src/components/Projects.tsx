import { motion } from "framer-motion";
import { ArrowUpRight, Rocket, Building2, Code2, Package, Globe, Smartphone } from "lucide-react";
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
        className="flex items-center gap-4 rounded-2xl border border-border/80 bg-card/30 px-4 py-3.5 transition-all hover:border-border hover:bg-muted/40 group"
      >
        {/* Logo */}
        <div className="shrink-0 h-[68px] w-[68px] rounded-2xl overflow-hidden bg-muted border border-border/40">
          <img
            src={project.coverImage}
            alt={`${project.name} logo`}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-foreground leading-tight">{project.name}</h3>
          <p className="mt-0.5 text-sm text-muted-foreground/80 truncate">{project.tagline}</p>
        </div>

        {/* Arrow */}
        <ArrowUpRight className="h-5 w-5 shrink-0 text-[#bc6c25] dark:text-[#dda15e] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </Link>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="space-y-16">
      {/* Hero Headline */}
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-tight uppercase">
          Products
          <span className="block mt-1 bg-gradient-to-r from-[#bc6c25] to-[#dda15e] bg-clip-text text-transparent">
            I've Built
          </span>
        </h1>
        <p className="max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
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
              className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/20 p-6 flex flex-col items-center justify-center text-center group hover:border-border transition-all duration-300"
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#bc6c25]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
              
              {IconComponent && (
                <div className="mb-3 text-[#bc6c25] dark:text-[#dda15e] p-2 rounded-xl bg-[#bc6c25]/5 border border-[#bc6c25]/10 group-hover:scale-110 group-hover:bg-[#bc6c25]/10 transition-all duration-300">
                  <IconComponent className="h-5 w-5" />
                </div>
              )}
              <p className="text-3xl font-black text-foreground tracking-tight group-hover:text-[#bc6c25] dark:group-hover:text-[#dda15e] transition-colors duration-300">
                {stat.value}
              </p>
              <p className="mt-2 text-[10px] uppercase font-bold tracking-widest text-muted-foreground/60 leading-snug">
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
            ? "hover:border-violet-500/30 hover:shadow-[0_0_35px_-5px_rgba(139,92,246,0.15)]" 
            : "hover:border-teal-500/30 hover:shadow-[0_0_35px_-5px_rgba(20,184,166,0.15)]";
          const badgeColorClass = isRouteRadiant 
            ? "text-violet-400 bg-violet-500/10 border-violet-500/20" 
            : "text-teal-400 bg-teal-500/10 border-teal-500/20";
          const glowBgGrad = isRouteRadiant
            ? "from-violet-500/5 to-indigo-500/0"
            : "from-teal-500/5 to-sky-500/0";
            
          const techPills = isRouteRadiant 
            ? ["Next.js", "TypeScript", "Supabase", "AI/ML"] 
            : ["React.js", "React Capacitor", "TypeScript", "Firebase"];

          const featurePills = isRouteRadiant
            ? ["Personalized learning paths adaptive engine", "100k+ lines TypeScript solo codebase", "Live & serving students in Pakistan"]
            : ["Step-by-step tax declaration wizard", "Real-time FBR tax bracket calculations", "Cross-platform Web & Capacitor Mobile apps"];

          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`relative overflow-hidden rounded-3xl border border-border/80 bg-card/30 p-7 flex flex-col justify-between group cursor-pointer transition-all duration-500 ${glowColorClass}`}
              onClick={() => item.link && window.open(item.link, "_blank")}
            >
              {/* Card Ambient Glow background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${glowBgGrad} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-750 pointer-events-none`} />
              
              {/* Animated corner light spark */}
              <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-gradient-to-bl from-foreground/5 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />

              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[9px] font-extrabold tracking-widest uppercase border ${badgeColorClass}`}>
                    Flagship Project
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground/60 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-black text-foreground tracking-tight uppercase group-hover:text-[#bc6c25] dark:group-hover:text-[#dda15e] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed max-w-sm">
                    {item.subtitle}
                  </p>
                </div>

                {/* Feature checklist */}
                <div className="flex flex-col gap-2 pt-1">
                  {featurePills.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-[11px] text-muted-foreground/85 font-medium leading-snug">
                      <span className={`h-1.5 w-1.5 rounded-full shrink-0 mt-1.5 ${isRouteRadiant ? 'bg-violet-500/60' : 'bg-teal-500/60'}`} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom technology pills bar */}
              <div className="mt-8 pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {techPills.map((tech) => (
                    <span key={tech} className="text-[9px] font-bold text-muted-foreground bg-card border border-border/80 rounded-md px-2 py-0.5 group-hover:border-border transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {item.link ? (
                  <div className="inline-flex items-center gap-1 text-[10px] font-extrabold text-[#bc6c25] dark:text-[#dda15e] group-hover:underline">
                    Live Link
                  </div>
                ) : (
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-muted-foreground/50">
                    Production App
                  </span>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Web Projects */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 mb-4">
          <Globe className="h-4 w-4 text-[#bc6c25] dark:text-[#dda15e]" />
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Web Projects
          </h2>
          <div className="flex-1 h-px bg-border/60" />
          <span className="text-xs text-muted-foreground/40">{webSlugs.length}</span>
        </div>
        {webSlugs.map((slug, index) => (
          <ProjectRow key={slug} slug={slug} index={index} />
        ))}
      </div>

      {/* Mobile Apps */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 mb-4">
          <Smartphone className="h-4 w-4 text-[#bc6c25] dark:text-[#dda15e]" />
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Mobile Apps
          </h2>
          <div className="flex-1 h-px bg-border/60" />
          <span className="text-xs text-muted-foreground/40">{mobileSlugs.length}</span>
        </div>
        {mobileSlugs.map((slug, index) => (
          <ProjectRow key={slug} slug={slug} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
