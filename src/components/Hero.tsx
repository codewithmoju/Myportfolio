import { Github, Linkedin, Mail, Twitter, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-orange-500/30 via-indigo-500/20 to-transparent blur-xl opacity-60 pointer-events-none" />

      <div className="panel-card relative overflow-hidden p-5">
        {/* Top gradient bar */}
        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-orange-500 via-indigo-500 to-transparent" />

        {/* Profile image */}
        <div className="relative rounded-xl bg-zinc-800 overflow-hidden">
          <img
            src={profile.imageUrl}
            alt={profile.name}
            className="h-44 w-full rounded-xl object-cover"
          />
          {/* Available badge */}
          <div className="absolute bottom-2 left-2">
            <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold backdrop-blur-sm border ${
              profile.available
                ? "bg-teal-950/80 border-teal-500/40 text-teal-400"
                : "bg-red-950/80 border-red-500/40 text-red-400"
            }`}>
              <span className={`h-1.5 w-1.5 rounded-full animate-pulse ${profile.available ? "bg-teal-400" : "bg-red-400"}`} />
              {profile.available ? "Available for work" : "Currently busy"}
            </span>
          </div>
        </div>

        {/* Name & Role */}
        <div className="mt-4">
          <h2 className="text-2xl font-black leading-tight text-white">{profile.name}</h2>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            <span className="inline-flex items-center rounded-full bg-orange-500/15 border border-orange-500/30 px-2.5 py-0.5 text-xs font-semibold text-orange-400">
              Co-Founder @NAMS STUDIO
            </span>
            <span className="inline-flex items-center rounded-full bg-indigo-500/15 border border-indigo-500/30 px-2.5 py-0.5 text-xs font-semibold text-indigo-400">
              Full-Stack Dev
            </span>
          </div>
        </div>

        {/* "Building since age 16" banner */}
        <div className="mt-3 rounded-lg bg-gradient-to-r from-zinc-800 to-zinc-900 border border-zinc-700/60 px-3 py-2">
          <p className="text-xs font-semibold text-zinc-300">
            <span className="text-orange-400">Building apps since age 16</span>
          </p>
          <p className="mt-0.5 text-xs text-zinc-500 leading-snug">{profile.intro}</p>
        </div>

        {/* Location */}
        <div className="mt-3 flex items-center gap-1.5 text-xs text-zinc-500">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-zinc-600" />
          <span>{profile.location}</span>
        </div>

        {/* Contact */}
        <div className="mt-2 space-y-1.5">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 text-xs text-zinc-500 transition hover:text-zinc-300 group"
          >
            <Mail className="h-3.5 w-3.5 shrink-0 text-zinc-600 group-hover:text-orange-400 transition" />
            <span className="truncate">{profile.email}</span>
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="flex items-center gap-2 text-xs text-zinc-500 transition hover:text-zinc-300 group"
          >
            <Phone className="h-3.5 w-3.5 shrink-0 text-zinc-600 group-hover:text-orange-400 transition" />
            <span>{profile.phone}</span>
          </a>
        </div>

        {/* Divider */}
        <div className="mt-4 border-t border-zinc-800" />

        {/* Social Links */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 transition hover:text-white"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={profile.social.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="X / Twitter"
              className="text-zinc-500 transition hover:text-white"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 transition hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-orange-400"
          >
            Hire Me
          </a>
        </div>

        {/* Languages */}
        <div className="mt-4 flex gap-2">
          <span className="tag text-zinc-500">English</span>
          <span className="tag text-zinc-500">Urdu</span>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
