import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { thoughtItems } from "@/data/portfolio";

const tagColors: Record<string, string> = {
  Product: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
  Mobile: "bg-sky-500/15 text-sky-400 border-sky-500/30",
  Startup: "bg-orange-500/15 text-orange-400 border-orange-500/30",
};

const Testimonials = () => {
  return (
    <section id="thoughts" className="space-y-8">
      <h2 className="section-title text-white">
        DESIGN
        <span className="section-title-muted"> THOUGHTS</span>
      </h2>

      <div className="space-y-4">
        {thoughtItems.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="panel-card p-6 group cursor-pointer hover:border-zinc-600 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                {item.tag && (
                  <span className={`mb-3 inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium ${tagColors[item.tag] || "bg-zinc-700/30 text-zinc-400 border-zinc-600"}`}>
                    {item.tag}
                  </span>
                )}
                <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-orange-50 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-zinc-400 leading-relaxed">{item.excerpt}</p>
                <div className="mt-4 flex gap-5 text-xs text-zinc-600">
                  <span>{item.date}</span>
                  <span>{item.readTime}</span>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-orange-400 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
