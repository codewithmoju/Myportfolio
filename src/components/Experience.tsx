import { motion } from "framer-motion";
import { MapPin, Briefcase, Users, GraduationCap, Calendar, ArrowRight } from "lucide-react";
import { experienceItems } from "@/data/portfolio";

const typeConfig = {
  "full-time": {
    label: "Full-Time",
    icon: Briefcase,
    color: "from-sky-500/20 to-sky-500/5 text-sky-500 dark:text-sky-400 border-sky-500/20",
    dot: "bg-sky-400 ring-sky-500/30",
    glow: "hover:shadow-[0_0_40px_-5px_rgba(56,189,248,0.08)] hover:border-sky-500/20",
  },
  "co-founder": {
    label: "Co-Founder",
    icon: Users,
    color: "from-[#bc6c25]/20 to-[#bc6c25]/5 text-[#bc6c25] dark:text-[#dda15e] border-[#bc6c25]/20",
    dot: "bg-[#bc6c25] ring-[#bc6c25]/30",
    glow: "hover:shadow-[0_0_40px_-5px_rgba(188,108,37,0.08)] hover:border-[#bc6c25]/20",
  },
  internship: {
    label: "Internship",
    icon: GraduationCap,
    color: "from-teal-500/20 to-teal-500/5 text-teal-600 dark:text-teal-400 border-teal-500/20",
    dot: "bg-teal-400 ring-teal-500/30",
    glow: "hover:shadow-[0_0_40px_-5px_rgba(20,184,166,0.08)] hover:border-teal-500/20",
  },
  freelance: {
    label: "Freelance",
    icon: Briefcase,
    color: "from-indigo-500/20 to-indigo-500/5 text-indigo-500 dark:text-indigo-400 border-indigo-500/20",
    dot: "bg-indigo-400 ring-indigo-500/30",
    glow: "hover:shadow-[0_0_40px_-5px_rgba(99,102,241,0.08)] hover:border-indigo-500/20",
  },
};

const experienceTech: Record<string, string[]> = {
  "IT Intelligentsia": ["React Native", "TypeScript", "REST APIs", "Git", "Mobile Performance", "State Management"],
  "NAMS STUDIO": ["Next.js", "React Native", "TypeScript", "Supabase", "Stripe", "Meta APIs", "React Capacitor", "Tailwind CSS"],
  "DevelopersHub Corporation": ["React Native", "TypeScript", "UI/UX", "Git", "Android & iOS", "Team Collaboration"],
};

const Experience = () => {
  return (
    <section id="experience" className="space-y-12">
      {/* Title */}
      <div>
        <h2 className="section-title text-foreground">
          WORK
          <span className="section-title-muted"> EXPERIENCE</span>
        </h2>
      </div>

      <div className="relative">
        {/* Glowing Timeline Bar */}
        <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#bc6c25] via-border to-transparent pointer-events-none" />

        <div className="space-y-10 pl-9">
          {experienceItems.map((item, index) => {
            const config = typeConfig[item.type];
            const TypeIcon = config.icon;
            const tech = experienceTech[item.company] || [];

            return (
              <motion.article
                key={`${item.company}-${index}`}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative group/article"
              >
                {/* Custom Glowing Timeline Node */}
                <div className={`absolute -left-[30px] top-6 h-4 w-4 rounded-full border-2 border-background bg-card flex items-center justify-center shadow-lg transition-transform duration-300 group-hover/article:scale-125 z-10`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${config.dot} animate-pulse`} />
                </div>

                {/* Card Panel */}
                <div className={`relative overflow-hidden rounded-3xl border border-border/80 bg-card/20 backdrop-blur-md p-6 sm:p-7 transition-all duration-500 ${config.glow}`}>
                  {/* Fine Dot Grid overlay inside card */}
                  <div className="absolute inset-0 bg-[radial-gradient(var(--grid-color)_1px,transparent_1px)] bg-[size:16px_16px] rounded-3xl pointer-events-none opacity-50" />
                  
                  {/* Subtle top horizontal highlight */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent group-hover/article:via-[#bc6c25]/20 transition-all duration-500" />

                  {/* Header Row */}
                  <div className="relative flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight uppercase">
                          {item.company}
                        </h3>
                        <span className={`inline-flex items-center gap-1 rounded-full border bg-gradient-to-r ${config.color} px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider`}>
                          <TypeIcon className="h-3 w-3" />
                          {config.label}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-extrabold text-[#bc6c25] dark:text-[#dda15e] tracking-wider uppercase">
                        {item.role}
                      </p>
                    </div>

                    {/* Metadata details */}
                    <div className="text-left sm:text-right shrink-0 space-y-1">
                      <div className="flex items-center sm:justify-end gap-1.5 text-xs font-bold text-foreground/90">
                        <Calendar className="h-3.5 w-3.5 text-muted-foreground/60" />
                        {item.period}
                      </div>
                      <div className="flex items-center sm:justify-end gap-1.5 text-xs text-muted-foreground/80 font-medium">
                        <MapPin className="h-3.5 w-3.5 text-muted-foreground/60" />
                        {item.location}
                      </div>
                    </div>
                  </div>

                  {/* Role Brief Summary */}
                  <p className="relative mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                    {item.summary}
                  </p>

                  {/* Detailed Achievements */}
                  <ul className="relative mt-5 space-y-2.5">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground/80 leading-relaxed font-medium group/item hover:text-foreground transition-colors duration-300">
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#bc6c25]/60 mt-0.5 group-hover/item:text-[#bc6c25] dark:group-hover/item:text-[#dda15e] group-hover/item:translate-x-0.5 transition-all duration-300" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills/Technologies Used Bar */}
                  {tech.length > 0 && (
                    <div className="relative mt-6 pt-5 border-t border-border/60 flex flex-wrap items-center gap-1.5">
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-muted-foreground/50 mr-1">
                        Stack:
                      </span>
                      {tech.map((t) => (
                        <span 
                          key={t} 
                          className="text-[9px] font-bold text-muted-foreground bg-card border border-border/80 rounded-lg px-2.5 py-1 group-hover/article:border-border transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
