import { motion } from "framer-motion";
import { MapPin, Briefcase, Users, GraduationCap } from "lucide-react";
import { experienceItems } from "@/data/portfolio";

const typeConfig = {
  "full-time": {
    label: "Full-Time",
    icon: Briefcase,
    color: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    dot: "bg-sky-400",
  },
  "co-founder": {
    label: "Co-Founder",
    icon: Users,
    color: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    dot: "bg-orange-400",
  },
  internship: {
    label: "Internship",
    icon: GraduationCap,
    color: "bg-teal-500/15 text-teal-400 border-teal-500/30",
    dot: "bg-teal-400",
  },
  freelance: {
    label: "Freelance",
    icon: Briefcase,
    color: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
    dot: "bg-indigo-400",
  },
};

const Experience = () => {
  return (
    <section id="experience" className="space-y-8">
      <h2 className="section-title text-white">
        WORK
        <span className="section-title-muted"> EXPERIENCE</span>
      </h2>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-orange-500/60 via-zinc-700 to-transparent" />

        <div className="space-y-6 pl-8">
          {experienceItems.map((item, index) => {
            const config = typeConfig[item.type];
            const TypeIcon = config.icon;
            return (
              <motion.article
                key={`${item.company}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className={`absolute -left-8 top-5 h-2.5 w-2.5 rounded-full ring-2 ring-zinc-950 ${config.dot}`} />

                <div className="panel-card p-6 hover:border-zinc-600 transition-colors">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-bold text-white">{item.company}</h3>
                        <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${config.color}`}>
                          <TypeIcon className="h-3 w-3" />
                          {config.label}
                        </span>
                      </div>
                      <p className="mt-0.5 text-sm font-medium text-orange-400">{item.role}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-medium text-zinc-300">{item.period}</p>
                      <div className="mt-0.5 flex items-center gap-1 text-xs text-zinc-600 justify-end">
                        <MapPin className="h-3 w-3" />
                        {item.location}
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{item.summary}</p>

                  {/* Achievements */}
                  <ul className="mt-4 space-y-1.5">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-zinc-500">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500/60" />
                        {ach}
                      </li>
                    ))}
                  </ul>
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
