import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const thoughts = [
  {
    title: "Starting and Growing a Career in Web Design",
    excerpt:
      "As the internet keeps evolving, web design is becoming central to product growth and business outcomes.",
    date: "Apr 8, 2022",
    readTime: "6 min read",
  },
  {
    title: "Create a Landing Page That Performs Great",
    excerpt:
      "Understand the purpose of each section and use narrative flow to improve clarity and conversion.",
    date: "Mar 15, 2022",
    readTime: "6 min read",
  },
  {
    title: "How Can Designers Prepare for the Future?",
    excerpt:
      "Strong visual fundamentals paired with product thinking help designers stay relevant in fast-moving teams.",
    date: "Feb 28, 2022",
    readTime: "6 min read",
  },
];

const Testimonials = () => {
  return (
    <section id="thoughts" className="space-y-8">
      <h2 className="section-title text-white">
        DESIGN
        <span className="section-title-muted">THOUGHTS</span>
      </h2>

      <div className="space-y-4">
        {thoughts.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="panel-card p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-3xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 max-w-2xl text-zinc-400">{item.excerpt}</p>
                <div className="mt-5 flex gap-5 text-sm text-zinc-500">
                  <span>{item.date}</span>
                  <span>{item.readTime}</span>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-orange-400" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
