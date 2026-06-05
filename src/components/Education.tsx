import { motion } from "framer-motion";
import { GraduationCap, Trophy, Calendar, CheckCircle2, Clock } from "lucide-react";
import { educationItems } from "@/data/portfolio";

const Education = () => {
  return (
    <section id="education" className="space-y-8">
      <h2 className="section-title text-white">
        EDUCATION
        <span className="section-title-muted"> & LEADERSHIP</span>
      </h2>

      <div className="space-y-4">
        {educationItems.map((item, index) => (
          <motion.article
            key={item.institution}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="panel-card p-6 hover:border-zinc-600 transition-colors"
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="shrink-0 rounded-xl bg-zinc-800 p-2.5">
                <GraduationCap className="h-5 w-5 text-zinc-400" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.institution}</h3>
                    <p className="text-sm text-orange-400 font-medium mt-0.5">
                      {item.degree}{item.field ? ` · ${item.field}` : ""}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {item.status === "ongoing" ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-2.5 py-0.5 text-xs font-medium text-teal-400">
                        <Clock className="h-3 w-3" />
                        Ongoing
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-600 bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-400">
                        <CheckCircle2 className="h-3 w-3" />
                        Completed
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-1.5 text-xs text-zinc-600">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{item.period}</span>
                </div>

                {/* Leadership highlight */}
                {item.highlight && (
                  <div className="mt-3 flex items-center gap-2 rounded-lg bg-amber-500/10 border border-amber-500/20 px-3 py-2">
                    <Trophy className="h-4 w-4 shrink-0 text-amber-400" />
                    <p className="text-xs font-semibold text-amber-300">{item.highlight}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Leadership CTA Card */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        className="rounded-2xl bg-gradient-to-br from-violet-900/40 to-indigo-900/30 border border-violet-500/20 p-6"
      >
        <div className="flex items-start gap-3">
          <div className="shrink-0 rounded-xl bg-violet-500/20 p-2.5">
            <Trophy className="h-5 w-5 text-violet-400" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">
              Senior President · Seekers Tech & Computing Society
            </h3>
            <p className="mt-1.5 text-sm text-zinc-400 leading-relaxed">
              Leading technical initiatives and student engagement at university level — organizing hackathons, workshops, and developer community events at Minhaj University Lahore.
            </p>
            <span className="mt-2 inline-flex items-center gap-1 rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-400">
              Minhaj University Lahore
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
