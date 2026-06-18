import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

const contacts = [
  { icon: Mail, label: "Email", value: "bhavanavasagiri@gmail.com", href: "mailto:bhavanavasagiri@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9949768516", href: "tel:+919949768516" },
  { icon: Linkedin, label: "LinkedIn", value: "bhavana-vasagiri", href: "https://www.linkedin.com/in/bhavana-vasagiri-a76585331" },
  { icon: Github, label: "GitHub", value: "bhavanavasagiri", href: "https://github.com/bhavanavasagiri" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Get In Touch" title="Let's Build Something Amazing" />
        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-3"
          >
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass-strong group flex items-center gap-4 p-4 transition hover:bg-white/[0.08]"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#915EFF] to-[#00E5FF] glow-primary">
                  <c.icon className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-[#A9B1D6]">{c.label}</div>
                  <div className="truncate text-sm font-semibold text-white group-hover:text-[#00E5FF] transition">
                    {c.value}
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="glass-strong lg:col-span-3 p-7 space-y-5"
          >
            <Field label="Name" name="name" type="text" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@email.com" />
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#A9B1D6] mb-2">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your idea, role, or hackathon..."
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-[#A9B1D6]/60 focus:outline-none focus:border-[#915EFF] focus:ring-2 focus:ring-[#915EFF]/30 transition"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#915EFF] to-[#00E5FF] px-6 py-3.5 text-sm font-semibold text-white glow-primary transition"
            >
              {sent ? "Message Sent ✨" : (
                <>
                  Send Message
                  <Send className="h-4 w-4 transition group-hover:translate-x-1" />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>

      <footer className="mt-24 border-t border-white/5 pt-8 pb-10 text-center text-sm text-[#A9B1D6]">
        © {new Date().getFullYear()} Bhavana Vasagiri · Designed & built with passion.
      </footer>
    </section>
  );
}

function Field({ label, name, type, placeholder }: { label: string; name: string; type: string; placeholder: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-[#A9B1D6] mb-2">{label}</label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-[#A9B1D6]/60 focus:outline-none focus:border-[#00E5FF] focus:ring-2 focus:ring-[#00E5FF]/30 transition"
      />
    </div>
  );
}
