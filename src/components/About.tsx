import { motion } from "framer-motion";
import { toolItems } from "@/data/portfolio";

const About = () => {
  return (
    <section id="about" className="space-y-8">
      <h2 className="section-title text-white">
        TECH
        <span className="section-title-muted">STACK</span>
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {toolItems.map((tool, index) => (
            <motion.article
              key={tool.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="panel-card p-4"
            >
              <div className="flex items-center gap-3">
                <div>
                  <h3 className="font-semibold text-white">{tool.name}</h3>
                  <p className="text-xs text-zinc-500">{tool.role}</p>
                </div>
              </div>
            </motion.article>
        ))}
      </div>
    </section>
  );
};

export default About;
