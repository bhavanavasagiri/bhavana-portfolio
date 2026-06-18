import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    name: "CarbonTwin AI",
    category: "AI + Sustainability",
    description:
      "An AI-powered platform that helps users understand and reduce their carbon footprint through intelligent recommendations.",
    tech: ["React", "AI Tools", "Full Stack"],
    live: "https://carbon-twin-ai.lovable.app/",
    github: "https://github.com/bhavanavasagiri/carbon-twin-ai",
    featured: true,
    gradient: "from-[#915EFF] to-[#00E5FF]",
  },
  {
    name: "UPI Fraud AI",
    category: "Hackathon Project",
    description:
      "Frontend experience for an AI-powered fraud awareness platform focused on improving digital payment security.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://fraudai.netlify.app",
    github: "https://github.com/bhavanavasagiri/upifraud",
    gradient: "from-[#00E5FF] to-[#915EFF]",
  },
  {
    name: "ShopHub",
    category: "E-Commerce",
    description:
      "A responsive e-commerce website built during frontend development internship training.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    live: "https://shophubecommarce.netlify.app",
    github: "https://github.com/bhavanavasagiri/shophub",
    gradient: "from-[#915EFF] via-fuchsia-500 to-[#00E5FF]",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          subtitle="A blend of AI, design and engineering — shipped to real users."
        />
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative glass-strong overflow-hidden p-6 flex flex-col"
            >
              {p.featured && (
                <div className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#915EFF] to-[#00E5FF] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  <Sparkles className="h-3 w-3" /> Featured
                </div>
              )}
              <div className={`relative mb-5 h-44 overflow-hidden rounded-xl bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="font-display text-4xl font-black text-white/90 mix-blend-overlay">
                    {p.name.split(" ").map((w) => w[0]).join("")}
                  </div>
                </div>
                <motion.div
                  className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3"
                >
                  <a href={p.live} target="_blank" rel="noreferrer" className="glass px-3 py-2 text-xs font-semibold inline-flex items-center gap-1.5">
                    <ExternalLink className="h-3.5 w-3.5" /> Live
                  </a>
                  <a href={p.github} target="_blank" rel="noreferrer" className="glass px-3 py-2 text-xs font-semibold inline-flex items-center gap-1.5">
                    <Github className="h-3.5 w-3.5" /> Code
                  </a>
                </motion.div>
              </div>
              <div className="text-xs uppercase tracking-widest text-[#00E5FF]">{p.category}</div>
              <h3 className="mt-2 text-xl font-bold text-white">{p.name}</h3>
              <p className="mt-3 text-sm text-[#A9B1D6] flex-1">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-[#A9B1D6]">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-4 text-sm">
                <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-white hover:text-[#00E5FF] transition">
                  <ExternalLink className="h-4 w-4" /> Visit
                </a>
                <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-white hover:text-[#915EFF] transition">
                  <Github className="h-4 w-4" /> Source
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
