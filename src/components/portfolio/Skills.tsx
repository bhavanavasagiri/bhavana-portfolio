import { motion } from "framer-motion";
import { Code2, Globe, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";

const groups = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
      { name: "C", level: 75 },
      { name: "JavaScript", level: 88 },
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 92 },
      { name: "React", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Node.js", level: 72 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Canva", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Capabilities" title="Skills & Stack" subtitle="A curated toolkit I use to design, build, and ship modern AI-powered products." />
        <div className="grid gap-6 md:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative glass-strong p-7 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-gradient-to-br from-[#915EFF]/10 to-[#00E5FF]/10 pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#915EFF] to-[#00E5FF] glow-primary">
                    <g.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{g.title}</h3>
                </div>
                <div className="mt-6 space-y-4">
                  {g.skills.map((s, si) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-sm">
                        <span className="text-white">{s.name}</span>
                        <span className="text-[#A9B1D6]">{s.level}%</span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.2 + si * 0.06, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-[#915EFF] to-[#00E5FF]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
