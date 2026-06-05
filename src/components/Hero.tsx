import { Github, Linkedin, Mail, Twitter, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Background Glow */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-orange-500/10 via-zinc-900/0 to-zinc-900/0 blur-2xl opacity-75 pointer-events-none" />

      <div className="relative rounded-2xl border border-zinc-900 bg-zinc-950/60 backdrop-blur-md p-6 shadow-2xl flex flex-col items-center">
        {/* Subtle top indicator */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

        {/* Profile Image with Ring Glow */}
        <div className="relative">
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-orange-500/20 via-zinc-800/0 to-indigo-500/20 blur-sm" />
          <div className="relative h-32 w-32 rounded-full p-1 bg-zinc-900 border border-zinc-800/60 overflow-hidden shadow-inner flex items-center justify-center">
            <img
              src={profile.imageUrl}
              alt={profile.name}
              className="h-full w-full rounded-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
          {/* Available Indicator */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center gap-1 rounded-full bg-zinc-900/90 border border-teal-500/30 px-2.5 py-0.5 text-[10px] font-bold text-teal-400 backdrop-blur-md shadow-lg tracking-wide uppercase">
              <span className="h-1 w-1 rounded-full bg-teal-400 animate-pulse" />
              Available
            </span>
          </div>
        </div>

        {/* Name & Headline */}
        <div className="mt-6 text-center">
          <h2 className="text-xl font-black tracking-tight text-white">{profile.name}</h2>
          <p className="mt-1 text-xs text-zinc-500 font-medium">Full-Stack Mobile & Web Dev</p>
          <div className="mt-3 flex flex-wrap justify-center gap-1.5">
            <span className="inline-flex items-center rounded-full bg-orange-500/10 border border-orange-500/20 px-2.5 py-0.5 text-[10px] font-bold tracking-wide uppercase text-orange-400">
              Co-Founder @NAMS
            </span>
          </div>
        </div>

        {/* Bio Text */}
        <p className="mt-4 text-center text-xs leading-relaxed text-zinc-400 font-medium px-1">
          I shipped my first React Native app at 16. I haven't stopped building since. CSE student at Minhaj University.
        </p>

        {/* Location & Details Info list */}
        <div className="w-full mt-6 border-y border-zinc-900/80 py-4 space-y-3">
          <div className="flex items-center gap-2.5 text-xs text-zinc-400">
            <MapPin className="h-4 w-4 text-zinc-600 shrink-0" />
            <span className="truncate">{profile.location}</span>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2.5 text-xs text-zinc-400 transition hover:text-orange-400 group"
          >
            <Mail className="h-4 w-4 text-zinc-600 group-hover:text-orange-400 shrink-0 transition" />
            <span className="truncate">{profile.email}</span>
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="flex items-center gap-2.5 text-xs text-zinc-400 transition hover:text-orange-400 group"
          >
            <Phone className="h-4 w-4 text-zinc-600 group-hover:text-orange-400 shrink-0 transition" />
            <span className="truncate">{profile.phone}</span>
          </a>
        </div>

        {/* Bottom Panel with Social & CTA */}
        <div className="w-full mt-5 flex items-center justify-between">
          {/* Social icons */}
          <div className="flex items-center gap-2.5">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/40 text-zinc-500 transition hover:text-white hover:border-zinc-700"
            >
              <Github className="h-3.5 w-3.5" />
            </a>
            <a
              href={profile.social.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/40 text-zinc-500 transition hover:text-white hover:border-zinc-700"
            >
              <Twitter className="h-3.5 w-3.5" />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/40 text-zinc-500 transition hover:text-white hover:border-zinc-700"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Hire Me CTA Button */}
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center rounded-xl bg-orange-500 hover:bg-orange-400 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-orange-500/10 hover:shadow-orange-500/25 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
