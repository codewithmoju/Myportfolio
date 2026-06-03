import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";

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
          src="/lovable-uploads/90dce04e-90f4-49dc-a702-309682fd39ee.jpg"
          alt="Muhammad Moaiz"
          className="h-44 w-full rounded-lg object-cover"
        />
        <h2 className="mt-4 text-3xl font-black leading-tight">Muhammad Moaiz</h2>
        <p className="mt-3 text-sm text-zinc-600">
          A software engineer crafting intuitive products with a blend of motion, accessibility, and performance.
        </p>

        <div className="mt-5 flex items-center gap-3 text-zinc-500">
          <a href="https://github.com/MuhammadMoaiz001" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-zinc-900"><Github className="h-4 w-4" /></a>
          <a href="https://twitter.com/M_Moaiz001" target="_blank" rel="noreferrer" aria-label="X" className="transition hover:text-zinc-900"><Twitter className="h-4 w-4" /></a>
          <a href="https://www.linkedin.com/in/muhammadmoaiz" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-zinc-900"><Linkedin className="h-4 w-4" /></a>
          <a href="mailto:muhammadmoaimrmr786@gmail.com" aria-label="Email" className="transition hover:text-zinc-900"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
