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
      <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-[#bc6c25]/15 via-transparent to-transparent blur-2xl opacity-75 pointer-events-none group-hover:from-[#bc6c25]/25 transition-all duration-500" />

      {/* Dynamic Glowing border overlay on hover */}
      <div className="absolute -inset-[1px] rounded-[24px] bg-gradient-to-b from-[#bc6c25]/20 via-transparent to-[#dda15e]/20 opacity-0 group-hover:opacity-100 blur-[1px] transition-all duration-500 pointer-events-none z-0" />

      <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/35 backdrop-blur-xl p-6 shadow-2xl flex flex-col items-center transition-all duration-500 hover:-translate-y-1 hover:border-border hover:shadow-[0_10px_30px_-10px_rgba(188,108,37,0.15)] z-10">
        {/* Futuristic Dot Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(var(--grid-color)_1px,transparent_1px)] bg-[size:14px_14px] rounded-3xl pointer-events-none opacity-80" />
        
        {/* Soft Ambient Spotlight behind avatar */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-br from-[#bc6c25]/10 to-[#dda15e]/5 rounded-full blur-[80px] pointer-events-none" />

        {/* Subtle Top Border Glow */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#bc6c25]/30 to-transparent" />

        {/* Profile Image with Rotating Gradient Border */}
        <div className="relative mt-2">
          {/* Animated Spin Ring - glows and scales on card hover */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#bc6c25] via-[#dda15e] to-[#606c38] animate-[spin_12s_linear_infinite] opacity-80 blur-[2px] shadow-lg shadow-[#bc6c25]/10 group-hover:opacity-100 group-hover:scale-105 group-hover:blur-[1px] transition-all duration-500" />
          
          <div className="relative h-32 w-32 rounded-full p-[3px] bg-background overflow-hidden shadow-inner flex items-center justify-center">
            <img
              src={profile.imageUrl}
              alt={profile.name}
              className="h-full w-full rounded-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          
          {/* Available Indicator Badge */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-card border border-[#606c38]/45 px-3 py-1 text-[9px] font-extrabold tracking-wider uppercase text-[#606c38] dark:text-[#dda15e] backdrop-blur-md shadow-2xl">
              <span className="h-1.5 w-1.5 rounded-full bg-[#606c38] animate-ping absolute" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#606c38] relative" />
              Available
            </span>
          </div>
        </div>

        {/* Name & Headline */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-black tracking-tight text-foreground uppercase">{profile.name}</h2>
          <p className="mt-1 text-xs text-muted-foreground font-semibold tracking-wide">Full-Stack Mobile & Web Dev</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <span className="inline-flex items-center rounded-full bg-[#bc6c25]/10 border border-[#bc6c25]/20 px-3 py-0.5 text-[9px] font-extrabold tracking-widest uppercase text-[#bc6c25] dark:text-[#dda15e] shadow-[0_0_15px_-3px_rgba(188,108,37,0.1)]">
              Co-Founder @NAMS
            </span>
          </div>
        </div>

        {/* Bio Text */}
        <p className="mt-5 text-center text-xs leading-relaxed text-muted-foreground font-medium px-1 max-w-[240px]">
          I shipped my first React Native app at 16. I haven't stopped building since. BSSE student at Minhaj University.
        </p>

        {/* Details list */}
        <div className="w-full mt-7 border-y border-border/60 py-4.5 space-y-3">
          <div className="flex items-center gap-3 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <MapPin className="h-4 w-4 text-muted-foreground/60 shrink-0" />
            <span className="truncate">{profile.location}</span>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 text-xs text-muted-foreground transition hover:text-[#bc6c25] dark:hover:text-[#dda15e] group/link"
          >
            <Mail className="h-4 w-4 text-muted-foreground/60 group-hover/link:text-[#bc6c25] dark:group-hover/link:text-[#dda15e] shrink-0 transition" />
            <span className="truncate">{profile.email}</span>
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="flex items-center gap-3 text-xs text-muted-foreground transition hover:text-[#bc6c25] dark:hover:text-[#dda15e] group/link"
          >
            <Phone className="h-4 w-4 text-muted-foreground/60 group-hover/link:text-[#bc6c25] dark:group-hover/link:text-[#dda15e] shrink-0 transition" />
            <span className="truncate font-mono">{profile.phone}</span>
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
              className="p-2 rounded-xl bg-card/50 border border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted hover:border-border transition-all duration-300 hover:scale-105"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={profile.social.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="p-2 rounded-xl bg-card/50 border border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted hover:border-border transition-all duration-300 hover:scale-105"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-xl bg-card/50 border border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted hover:border-border transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          {/* Premium Hire Me Button with Gradient & Glow shadow */}
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#bc6c25] to-[#dda15e] hover:from-[#9c5316] hover:to-[#bc6c25] px-4.5 py-2.5 text-xs font-bold text-white shadow-lg shadow-[#bc6c25]/15 hover:shadow-[#bc6c25]/30 hover:scale-[1.02] active:scale-95 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
