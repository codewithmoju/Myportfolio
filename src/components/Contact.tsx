import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";
import { profile } from "@/data/portfolio";
import { Mail, Phone, Linkedin, Clock, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

      window.open(
        `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      );

      toast({
        title: "Email client opened",
        description: "Review and send the prepared email from your default mail app.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({
        title: "Unable to open mail app",
        description: `Please email me directly at ${profile.email}`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative space-y-10 pb-16 overflow-hidden">
      {/* Background soft ambient glow */}
      <div className="absolute -right-24 bottom-0 w-80 h-80 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="space-y-2 relative z-10">
        <h2 className="section-title text-white">
          LET'S WORK
          <span className="section-title-muted"> TOGETHER</span>
        </h2>
        <p className="text-zinc-500 max-w-xl text-xs sm:text-sm leading-relaxed">
          Have a project in mind or want to collaborate? Drop a message below or reach out directly.
        </p>
      </div>

      {/* Main Single Column Container */}
      <div className="max-w-2xl relative z-10 space-y-8">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="panel-card space-y-4 p-6 md:p-8 border-zinc-800/80 bg-zinc-950/20 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]"
        >
          <div className="flex items-center gap-2.5 pb-2 border-b border-zinc-900/80 mb-2">
            <MessageSquare className="h-5 w-5 text-orange-500" />
            <span className="text-sm font-bold text-white font-display tracking-wide">Intake Form & Message</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900/30 px-4 py-3.5 text-sm text-zinc-100 outline-none transition-all duration-300 focus:border-orange-500/50 focus:bg-zinc-900/60 focus:shadow-[0_0_15px_-3px_rgba(249,115,22,0.12)] placeholder:text-zinc-650"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900/30 px-4 py-3.5 text-sm text-zinc-100 outline-none transition-all duration-300 focus:border-orange-500/50 focus:bg-zinc-900/60 focus:shadow-[0_0_15px_-3px_rgba(249,115,22,0.12)] placeholder:text-zinc-650"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Tell me about your project target and requirements..."
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900/30 px-4 py-3.5 text-sm text-zinc-100 outline-none transition-all duration-300 focus:border-orange-500/50 focus:bg-zinc-900/60 focus:shadow-[0_0_15px_-3px_rgba(249,115,22,0.12)] placeholder:text-zinc-650 resize-none"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 px-6 py-4 text-sm font-bold text-white transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(249,115,22,0.3)] hover:shadow-[0_4px_25px_-2px_rgba(249,115,22,0.55)] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
          >
            {isSubmitting ? (
              "Opening email client..."
            ) : (
              <>
                <span>Send Message</span>
                <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </motion.form>

        {/* Minimal Footer Row for Direct Channels */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-zinc-550 border-t border-zinc-900/80 pt-6">
          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Mail className="h-4 w-4 text-orange-500/80 shrink-0" />
            <span className="font-medium">{profile.email}</span>
          </a>

          <span className="text-zinc-800 hidden md:inline">•</span>

          {/* LinkedIn */}
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="h-4 w-4 text-sky-500/80 shrink-0" />
            <span className="font-medium">LinkedIn</span>
          </a>

          <span className="text-zinc-800 hidden md:inline">•</span>

          {/* Phone */}
          <a
            href={`tel:${profile.phone}`}
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Phone className="h-4 w-4 text-indigo-500/80 shrink-0" />
            <span className="font-medium font-mono">{profile.phone}</span>
          </a>

          <span className="text-zinc-800 hidden md:inline">•</span>

          {/* Availability Status */}
          <div className="flex items-center gap-1.5 text-teal-400">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-500"></span>
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20">
              Available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
