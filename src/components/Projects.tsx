import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredProjectSlugs, highlights, profile, projectsData, stats } from "@/data/portfolio";

const Projects = () => {
  return (
    <section id="projects" className="space-y-10">
      <div>
        <h1 className="section-title text-white">
          SOFTWARE
          <span className="section-title-muted">ENGINEER</span>
        </h1>
        <p className="mt-6 max-w-xl text-zinc-400">
          {profile.intro}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-5xl font-black text-white">{stat.value}</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {highlights.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className={`rounded-2xl p-6 ${item.color}`}
          >
            <div className="flex items-start justify-between gap-3">
              <p className="max-w-52 text-lg font-semibold uppercase leading-tight">{item.title}</p>
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </motion.article>
        ))}
      </div>

      <div className="space-y-3">
        {featuredProjectSlugs.map((slug, index) => {
          const project = projectsData[slug];
          return (
          <motion.div
            key={slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <Link
              to={`/project/${slug}`}
              className="panel-card flex items-center justify-between gap-4 p-3 transition hover:border-zinc-600"
            >
              <div className="flex items-center gap-4">
                <img src={project.coverImage} alt={project.name} className="h-16 w-20 rounded-md object-cover" />
                <div>
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <p className="text-sm text-zinc-500">{project.tagline}</p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-orange-400" />
            </Link>
          </motion.div>
        )})}
      </div>
    </section>
  );
};

export default Projects;
