import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";

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
        `mailto:muhammadmoaimrmr786@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      );

      toast({
        title: "Email client opened",
        description: "Review and send the prepared email from your default mail app.",
      });

      setFormData({ name: "", email: "", budget: "", message: "" });
    } catch {
      toast({
        title: "Unable to open mail app",
        description: "Please email me directly at muhammadmoaimrmr786@gmail.com",
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
        <span className="section-title-muted">TOGETHER</span>
      </h2>

      <motion.form
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="panel-card space-y-4 p-6"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-orange-400"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-orange-400"
          />
        </div>

        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-orange-400"
        >
          <option value="" disabled>
            Select budget range
          </option>
          <option value="$1k-$3k">$1k - $3k</option>
          <option value="$3k-$8k">$3k - $8k</option>
          <option value="$8k+">$8k+</option>
        </select>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Message"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-orange-400"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Opening email app..." : "Submit"}
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
