import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experienceItems = [
  {
    company: "PixelForge Studios",
    summary:
      "Led the design system in creating user-centric mobile and web applications, improving conversion and user engagement.",
    period: "Jan 2020 - Present",
  },
  {
    company: "BlueWave Innovators",
    summary:
      "Developed and implemented product design strategies for new features while collaborating closely with engineering and product teams.",
    period: "Jun 2017 - Dec 2019",
  },
  {
    company: "TrendCraft Solutions",
    summary:
      "Designed user interfaces for e-commerce platforms, focusing on usability and clean visual hierarchy.",
    period: "Mar 2015 - May 2017",
  },
];

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
