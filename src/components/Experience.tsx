import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experienceItems } from "@/data/portfolio";

const Experience = () => {
  return (
    <section id="experience" className="space-y-8">
      <h2 className="section-title text-white">
        12 YEARS OF
        <span className="section-title-muted">EXPERIENCE</span>
      </h2>

      <div className="space-y-4">
        {experienceItems.map((item, index) => (
          <motion.article
            key={item.company}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="panel-card p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white">{item.company}</h3>
                <p className="mt-3 max-w-2xl text-zinc-400">{item.summary}</p>
                <p className="mt-4 text-sm text-zinc-500">{item.period}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-orange-400" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
