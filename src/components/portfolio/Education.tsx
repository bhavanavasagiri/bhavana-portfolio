import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";

const items = [
  {
    place: "G Pulla Reddy Engineering College",
    title: "B.Tech — Computer Science Engineering",
    detail: "CGPA: 8.98",
    period: "Current",
  },
  {
    place: "Narayana Junior College",
    title: "Intermediate (MPC)",
    detail: "975 / 1000",
    period: "Completed",
  },
  {
    place: "Bhashyam High School",
    title: "Secondary School",
    detail: "Foundation Years",
    period: "Completed",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Journey" title="Education Timeline" />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#915EFF]/60 to-transparent" />
          {items.map((it, i) => (
            <motion.div
              key={it.place}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative mb-10 flex items-center md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 md:left-auto md:right-[-9px] md:translate-x-0 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-[#915EFF] to-[#00E5FF] glow-primary"
                style={i % 2 === 0 ? { right: -9, left: "auto" } : { left: -9 }}
              />
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-strong ml-10 md:ml-0 w-full p-6 transition"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[#915EFF]/30 to-[#00E5FF]/30 border border-white/10">
                    <GraduationCap className="h-5 w-5 text-[#00E5FF]" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[#A9B1D6]">{it.period}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{it.place}</h3>
                <p className="mt-1 text-[#A9B1D6]">{it.title}</p>
                <p className="mt-3 text-sm font-medium text-gradient-neon">{it.detail}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
