import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";
import { profile } from "@/data/portfolio";
import { Mail, Phone, Linkedin, MessageSquare, Send } from "lucide-react";

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
      <div className="absolute -right-24 bottom-0 w-80 h-80 bg-[#bc6c25]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="space-y-2 relative z-10">
        <h2 className="section-title text-foreground">
          LET'S WORK
          <span className="section-title-muted"> TOGETHER</span>
        </h2>
        <p className="text-muted-foreground max-w-xl text-xs sm:text-sm leading-relaxed">
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
          className="panel-card space-y-4 p-6 md:p-8 border-border/80 bg-card/75 dark:bg-card/20 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.01)]"
        >
          <div className="flex items-center gap-2.5 pb-2 border-b border-border/60 mb-2">
            <MessageSquare className="h-5 w-5 text-[#bc6c25] dark:text-[#dda15e]" />
            <span className="text-sm font-bold text-foreground font-display tracking-wide">Intake Form & Message</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full rounded-xl border border-border bg-card/50 dark:bg-card/30 px-4 py-3.5 text-sm text-foreground outline-none transition-all duration-300 focus:border-[#bc6c25]/50 dark:focus:border-[#dda15e]/50 focus:bg-card/70 focus:shadow-[0_0_15px_-3px_rgba(188,108,37,0.12)] placeholder:text-muted-foreground/60"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full rounded-xl border border-border bg-card/50 dark:bg-card/30 px-4 py-3.5 text-sm text-foreground outline-none transition-all duration-300 focus:border-[#bc6c25]/50 dark:focus:border-[#dda15e]/50 focus:bg-card/70 focus:shadow-[0_0_15px_-3px_rgba(188,108,37,0.12)] placeholder:text-muted-foreground/60"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Tell me about your project target and requirements..."
            className="w-full rounded-xl border border-border bg-card/50 dark:bg-card/30 px-4 py-3.5 text-sm text-foreground outline-none transition-all duration-300 focus:border-[#bc6c25]/50 dark:focus:border-[#dda15e]/50 focus:bg-card/70 focus:shadow-[0_0_15px_-3px_rgba(188,108,37,0.12)] placeholder:text-muted-foreground/60 resize-none"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-gradient-to-r from-[#bc6c25] to-[#dda15e] hover:from-[#9c5316] hover:to-[#bc6c25] px-6 py-4 text-sm font-bold text-white transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(188,108,37,0.2)] hover:shadow-[0_4px_25px_-2px_rgba(188,108,37,0.4)] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
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
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-muted-foreground/80 border-t border-border/80 pt-6">
          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-[#bc6c25] dark:hover:text-[#dda15e] transition-colors flex items-center gap-1.5"
          >
            <Mail className="h-4 w-4 text-[#bc6c25] dark:text-[#dda15e] shrink-0" />
            <span className="font-medium">{profile.email}</span>
          </a>

          <span className="text-border hidden md:inline">•</span>

          {/* LinkedIn */}
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#bc6c25] dark:hover:text-[#dda15e] transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="h-4 w-4 text-sky-500 shrink-0" />
            <span className="font-medium">LinkedIn</span>
          </a>

          <span className="text-border hidden md:inline">•</span>

          {/* Phone */}
          <a
            href={`tel:${profile.phone}`}
            className="hover:text-[#bc6c25] dark:hover:text-[#dda15e] transition-colors flex items-center gap-1.5"
          >
            <Phone className="h-4 w-4 text-[#bc6c25] dark:text-[#dda15e] shrink-0" />
            <span className="font-medium font-mono">{profile.phone}</span>
          </a>

          <span className="text-border hidden md:inline">•</span>

          {/* Availability Status */}
          <div className="flex items-center gap-1.5 text-[#606c38] dark:text-[#dda15e]">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#606c38] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#606c38]"></span>
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#606c38]/10 border border-[#606c38]/20">
              Available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
