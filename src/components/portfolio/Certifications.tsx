import { motion } from "framer-motion";
import { Award, ScrollText, MonitorSmartphone } from "lucide-react";
import SectionHeading from "./SectionHeading";

const certs = [
  { icon: MonitorSmartphone, title: "Frontend Web Development", issuer: "Internship Studio" },
  { icon: Award, title: "Infosys Springboard Certifications", issuer: "Infosys" },
  { icon: ScrollText, title: "Website Design & Development Internship", issuer: "Verified Certificate" },
];

export default function Certifications() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Credentials" title="Certifications" />
        <div className="grid gap-6 md:grid-cols-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass-strong group relative overflow-hidden p-7 transition"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[#00E5FF]/20 blur-2xl transition group-hover:bg-[#915EFF]/30" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#915EFF] to-[#00E5FF] glow-primary">
                  <c.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-[#A9B1D6]">{c.issuer}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-xs text-[#00E5FF]">
                  <BadgeIcon /> Verified Credential
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BadgeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
