import { motion } from "framer-motion";
import { Trophy, Users, Lightbulb, Rocket } from "lucide-react";
import SectionHeading from "./SectionHeading";

const badges = [
  { icon: Trophy, label: "Hackathon Leader" },
  { icon: Users, label: "Team Collaboration" },
  { icon: Lightbulb, label: "Problem Solver" },
  { icon: Rocket, label: "Innovator" },
];

export default function Hackathons() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Builder Energy" title="Hackathon Journey" />
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-[#A9B1D6] text-lg leading-relaxed"
          >
            <p>
              Participated in multiple <span className="text-white font-semibold">national-level hackathons</span>, leading teams through ideation, planning, development, and final presentations.
            </p>
            <p>
              Focused on solving real-world challenges using <span className="text-gradient-neon font-semibold">AI and web technologies</span> — from concept to shippable prototype within tight timelines.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {badges.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -6, rotate: i % 2 === 0 ? -2 : 2 }}
                className="glass-strong p-6 text-center animate-pulse-glow"
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#915EFF] to-[#00E5FF]">
                  <b.icon className="h-5 w-5 text-white" />
                </div>
                <p className="mt-3 text-sm font-semibold text-white">{b.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
