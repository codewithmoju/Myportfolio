import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="panel-card p-5"
    >
      <div className="rounded-xl bg-white p-4 text-zinc-900">
        <img
          src={profile.imageUrl}
          alt={profile.name}
          className="h-44 w-full rounded-lg object-cover"
        />
        <h2 className="mt-4 text-3xl font-black leading-tight">{profile.name}</h2>
        <p className="mt-3 text-sm text-zinc-600">
          {profile.intro}
        </p>

        <div className="mt-5 flex items-center gap-3 text-zinc-500">
          <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-zinc-900"><Github className="h-4 w-4" /></a>
          <a href={profile.social.twitter} target="_blank" rel="noreferrer" aria-label="X" className="transition hover:text-zinc-900"><Twitter className="h-4 w-4" /></a>
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-zinc-900"><Linkedin className="h-4 w-4" /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-zinc-900"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
