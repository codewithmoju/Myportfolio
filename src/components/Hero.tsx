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
      className="relative group"
    >
      {/* Background Glow behind the card */}
      <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-orange-500/15 via-transparent to-transparent blur-2xl opacity-75 pointer-events-none group-hover:from-orange-500/25 transition-all duration-500" />

      {/* Dynamic Glowing border overlay on hover */}
      <div className="absolute -inset-[1px] rounded-[24px] bg-gradient-to-b from-orange-500/20 via-transparent to-amber-500/20 opacity-0 group-hover:opacity-100 blur-[1px] transition-all duration-500 pointer-events-none z-0" />

      <div className="relative overflow-hidden rounded-3xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-xl p-6 shadow-2xl flex flex-col items-center transition-all duration-500 hover:-translate-y-1 hover:border-zinc-800/80 hover:shadow-[0_15px_30px_-10px_rgba(249,115,22,0.15)] z-10">
        {/* Futuristic Dot Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:14px_14px] rounded-3xl pointer-events-none opacity-80" />
        
        {/* Soft Ambient Spotlight behind avatar */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-br from-orange-500/10 to-amber-500/5 rounded-full blur-[80px] pointer-events-none" />

        {/* Subtle Top Border Glow */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

        {/* Profile Image with Rotating Gradient Border */}
        <div className="relative mt-2">
          {/* Animated Spin Ring - glows and scales on card hover */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-orange-500 via-amber-500 to-orange-600 animate-[spin_12s_linear_infinite] opacity-80 blur-[2px] shadow-lg shadow-orange-500/10 group-hover:opacity-100 group-hover:scale-105 group-hover:blur-[1px] transition-all duration-500" />
          
          <div className="relative h-32 w-32 rounded-full p-[3px] bg-[#0c0c0e] overflow-hidden shadow-inner flex items-center justify-center">
            <img
              src={profile.imageUrl}
              alt={profile.name}
              className="h-full w-full rounded-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          
          {/* Available Indicator Badge */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 border border-teal-500/40 px-3 py-1 text-[9px] font-extrabold tracking-wider uppercase text-teal-400 backdrop-blur-md shadow-2xl">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-ping absolute" />
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 relative" />
              Available
            </span>
          </div>
        </div>

        {/* Name & Headline */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-black tracking-tight text-white uppercase">{profile.name}</h2>
          <p className="mt-1 text-xs text-zinc-400 font-semibold tracking-wide">Full-Stack Mobile & Web Dev</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <span className="inline-flex items-center rounded-full bg-orange-500/10 border border-orange-500/20 px-3 py-0.5 text-[9px] font-extrabold tracking-widest uppercase text-orange-400 shadow-[0_0_15px_-3px_rgba(249,115,22,0.1)]">
              Co-Founder @NAMS
            </span>
          </div>
        </div>

        {/* Bio Text */}
        <p className="mt-5 text-center text-xs leading-relaxed text-zinc-400 font-medium px-1 max-w-[240px]">
          I shipped my first React Native app at 16. I haven't stopped building since. BSSE student at Minhaj University.
        </p>

        {/* Details list */}
        <div className="w-full mt-7 border-y border-zinc-900/60 py-4.5 space-y-3">
          <div className="flex items-center gap-3 text-xs text-zinc-400 hover:text-zinc-300 transition-colors">
            <MapPin className="h-4 w-4 text-zinc-600 shrink-0" />
            <span className="truncate">{profile.location}</span>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 text-xs text-zinc-400 transition hover:text-orange-400 group/link"
          >
            <Mail className="h-4 w-4 text-zinc-600 group-hover/link:text-orange-500 shrink-0 transition" />
            <span className="truncate">{profile.email}</span>
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="flex items-center gap-3 text-xs text-zinc-400 transition hover:text-orange-400 group/link"
          >
            <Phone className="h-4 w-4 text-zinc-600 group-hover/link:text-orange-500 shrink-0 transition" />
            <span className="truncate">{profile.phone}</span>
          </a>
        </div>

        {/* Bottom Social & Action Panel */}
        <div className="w-full mt-6 flex items-center justify-between">
          {/* Social icons */}
          <div className="flex items-center gap-2">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-xl bg-zinc-900/40 border border-zinc-900 text-zinc-500 hover:text-white hover:border-zinc-800 transition-all duration-300 hover:scale-105"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={profile.social.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="p-2 rounded-xl bg-zinc-900/40 border border-zinc-900 text-zinc-500 hover:text-white hover:border-zinc-800 transition-all duration-300 hover:scale-105"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-xl bg-zinc-900/40 border border-zinc-900 text-zinc-500 hover:text-white hover:border-zinc-800 transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          {/* Premium Hire Me Button with Gradient & Glow shadow */}
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 px-4.5 py-2.5 text-xs font-bold text-white shadow-lg shadow-orange-500/15 hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-95 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
