import { motion } from "framer-motion";
import { Figma, NotepadText, MessageSquareText, Layers3, PanelsTopLeft, Blocks } from "lucide-react";

const tools = [
  { name: "Framer", role: "Website Builder", icon: Layers3 },
  { name: "Figma", role: "Design Tool", icon: Figma },
  { name: "Lemon Squeezy", role: "Payments Provider", icon: PanelsTopLeft },
  { name: "ChatGPT", role: "AI Assistant", icon: MessageSquareText },
  { name: "Notion", role: "Productivity Tool", icon: NotepadText },
  { name: "Next.js", role: "React Framework", icon: Blocks },
];

const About = () => {
  return (
    <section id="about" className="space-y-8">
      <h2 className="section-title text-white">
        DESIGNER
        <span className="section-title-muted">TOOLS</span>
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <motion.article
              key={tool.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="panel-card p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-zinc-900 p-2 text-zinc-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{tool.name}</h3>
                  <p className="text-xs text-zinc-500">{tool.role}</p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default About;
