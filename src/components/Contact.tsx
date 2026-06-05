import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";
import { profile } from "@/data/portfolio";
import { Mail, Phone, Linkedin, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`;

      window.open(
        `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      );

      toast({
        title: "Email client opened",
        description: "Review and send the prepared email from your default mail app.",
      });

      setFormData({ name: "", email: "", budget: "", message: "" });
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
    <section id="contact" className="space-y-8 pb-10">
      <h2 className="section-title text-white">
        LET'S WORK
        <span className="section-title-muted"> TOGETHER</span>
      </h2>

      {/* Quick Contact Row */}
      <div className="grid gap-3 sm:grid-cols-3">
        {/* 24hr reply */}
        <div className="panel-card flex items-center gap-3 p-4">
          <div className="rounded-lg bg-teal-500/15 p-2">
            <Clock className="h-4 w-4 text-teal-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">24-Hour Reply</p>
            <p className="text-xs text-zinc-500">I reply within 24 hrs</p>
          </div>
        </div>

        {/* Email */}
        <a
          href={`mailto:${profile.email}`}
          className="panel-card flex items-center gap-3 p-4 hover:border-zinc-600 transition-colors group"
        >
          <div className="rounded-lg bg-orange-500/15 p-2">
            <Mail className="h-4 w-4 text-orange-400" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white">Email</p>
            <p className="text-xs text-zinc-500 truncate">muhammadmoaizmmr786</p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noreferrer"
          className="panel-card flex items-center gap-3 p-4 hover:border-zinc-600 transition-colors group"
        >
          <div className="rounded-lg bg-sky-500/15 p-2">
            <Linkedin className="h-4 w-4 text-sky-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">LinkedIn</p>
            <p className="text-xs text-zinc-500">@muhammadmoaiz</p>
          </div>
        </a>
      </div>

      {/* Phone highlight */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 px-5 py-4"
      >
        <Phone className="h-4 w-4 text-zinc-500 shrink-0" />
        <div>
          <p className="text-xs text-zinc-600 uppercase tracking-wider font-medium">Direct Line</p>
          <a href={`tel:${profile.phone}`} className="text-base font-bold text-white hover:text-orange-400 transition-colors">
            {profile.phone}
          </a>
        </div>
        <div className="ml-auto flex items-center gap-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-xs font-medium text-teal-400">Available</span>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="panel-card space-y-4 p-6"
      >
        <div className="flex items-center gap-2 mb-1">
          <MessageSquare className="h-4 w-4 text-orange-400" />
          <span className="text-sm font-semibold text-white">Send a message</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-orange-400 placeholder:text-zinc-600"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-orange-400 placeholder:text-zinc-600"
          />
        </div>

        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-orange-400"
        >
          <option value="" disabled className="text-zinc-600">
            Select budget range
          </option>
          <option value="$1k-$3k">$1k – $3k</option>
          <option value="$3k-$8k">$3k – $8k</option>
          <option value="$8k+">$8k+</option>
          <option value="Let's discuss">Let's discuss</option>
        </select>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell me about your project..."
          className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-orange-400 placeholder:text-zinc-600 resize-none"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-70 active:scale-[0.98]"
        >
          {isSubmitting ? "Opening email app..." : "Send Message →"}
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
