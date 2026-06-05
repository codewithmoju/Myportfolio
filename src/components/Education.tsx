import { motion } from "framer-motion";
import { GraduationCap, Trophy, Calendar, CheckCircle2 } from "lucide-react";
import { educationItems } from "@/data/portfolio";

const Education = () => {
  return (
    <section id="education" className="space-y-12">
      {/* Title */}
      <div>
        <h2 className="section-title text-foreground">
          EDUCATION
          <span className="section-title-muted"> & LEADERSHIP</span>
        </h2>
      </div>

      {/* Cards container */}
      <div className="space-y-4">
        {educationItems.map((item, index) => {
          const isOngoing = item.status === "ongoing";
          const borderGlowClass = isOngoing 
            ? "hover:border-[#bc6c25]/30 hover:shadow-[0_0_35px_-5px_rgba(188,108,37,0.1)]" 
            : "hover:border-border hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.01)]";
          const iconBgClass = isOngoing 
            ? "bg-[#bc6c25]/10 border border-[#bc6c25]/20 text-[#bc6c25] dark:text-[#dda15e]" 
            : "bg-card border border-border text-muted-foreground";
            
          return (
            <motion.article
              key={item.institution}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative overflow-hidden rounded-3xl border border-border/80 bg-card/20 backdrop-blur-md p-6 transition-all duration-500 group cursor-default ${borderGlowClass}`}
            >
              {/* Subtle Ambient Glow inside ongoing card */}
              {isOngoing && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#bc6c25]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              )}
              
              <div className="flex flex-col sm:flex-row items-start gap-4">
                {/* Icon */}
                <div className={`shrink-0 rounded-2xl p-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${iconBgClass}`}>
                  <GraduationCap className="h-5 w-5" />
                </div>

                <div className="flex-1 min-w-0 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-foreground tracking-tight uppercase group-hover:text-[#bc6c25] dark:group-hover:text-[#dda15e] transition-colors duration-300 font-display">
                        {item.institution}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground font-extrabold tracking-wider mt-1 uppercase">
                        {item.degree}{item.field ? ` · ${item.field}` : ""}
                      </p>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="self-start sm:self-auto shrink-0">
                      {isOngoing ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#606c38]/30 bg-[#606c38]/10 px-3 py-1 text-[9px] font-extrabold uppercase tracking-wider text-[#606c38] dark:text-[#dda15e] backdrop-blur-md relative">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#606c38] dark:bg-[#dda15e] animate-ping absolute" />
                          <span className="h-1.5 w-1.5 rounded-full bg-[#606c38] dark:bg-[#dda15e] relative" />
                          Ongoing
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-[9px] font-extrabold uppercase tracking-wider text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 text-muted-foreground/60" />
                          Completed
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Calendar Period info */}
                  <div className="mt-3.5 flex items-center gap-1.5 text-xs text-muted-foreground/80 font-semibold">
                    <Calendar className="h-4 w-4 text-muted-foreground/50" />
                    <span>{item.period}</span>
                  </div>

                  {/* Leadership highlight inner tag */}
                  {item.highlight && (
                    <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#bc6c25]/5 border border-[#bc6c25]/15 px-3 py-1.5">
                      <Trophy className="h-3.5 w-3.5 shrink-0 text-[#bc6c25] dark:text-[#dda15e]" />
                      <p className="text-[11px] font-extrabold text-[#bc6c25] dark:text-[#dda15e] uppercase tracking-wider">{item.highlight}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Leadership Callout Card (Seekers Tech) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative overflow-hidden rounded-3xl border border-border bg-card/25 backdrop-blur-md p-6 sm:p-7 shadow-[0_0_35px_-5px_rgba(188,108,37,0.06)] group hover:border-[#bc6c25]/30 hover:shadow-[0_0_40px_-5px_rgba(188,108,37,0.1)] transition-all duration-500"
      >
        {/* Subtle orange accent gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#bc6c25]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-start gap-4">
          {/* Trophy container */}
          <div className="shrink-0 rounded-2xl bg-[#bc6c25]/10 border border-[#bc6c25]/20 p-3 flex items-center justify-center text-[#bc6c25] dark:text-[#dda15e] transition-transform duration-300 group-hover:scale-110">
            <Trophy className="h-5 w-5" />
          </div>
          
          <div className="space-y-3.5 w-full">
            <div>
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[9px] font-extrabold tracking-widest uppercase border border-[#bc6c25]/20 bg-[#bc6c25]/10 text-[#bc6c25] dark:text-[#dda15e]">
                Community Leadership
              </span>
              <h3 className="text-lg sm:text-xl font-black text-foreground tracking-tight uppercase mt-2 group-hover:text-[#bc6c25] dark:group-hover:text-[#dda15e] transition-colors duration-300 font-display">
                Senior President · Seekers Tech & Computing Society
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
              Leading technical initiatives and student engagement at university level — organizing hackathons, workshops, and developer community events at Minhaj University Lahore.
            </p>
            
            {/* Action/Event tags */}
            <div className="pt-2 border-t border-border/60 flex flex-wrap items-center gap-1.5">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-muted-foreground/50 mr-1">
                Activities:
              </span>
              {["Hackathons", "Workshops", "Student Engagement", "Minhaj University"].map((tag) => (
                <span key={tag} className="text-[9px] font-bold text-muted-foreground bg-card border border-border/80 rounded-lg px-2.5 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
