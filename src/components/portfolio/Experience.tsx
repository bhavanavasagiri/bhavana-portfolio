import { motion } from "framer-motion";
import { Briefcase, BadgeCheck, Calendar, Globe2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const responsibilities = [
  "Developed responsive website interfaces",
  "Implemented modern frontend design principles",
  "Improved user experience and website usability",
  "Collaborated effectively in a remote internship environment",
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Career" title="Professional Experience" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass-strong relative overflow-hidden p-8 md:p-10"
        >
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#915EFF]/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#00E5FF]/15 blur-3xl" />
          <div className="relative">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#915EFF] to-[#00E5FF] glow-primary">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Frontend Web Developer Intern</h3>
                  <p className="text-[#A9B1D6]">Internship Studio</p>
                </div>
              </div>
              <div className="rounded-full glass px-3 py-1 text-xs font-semibold text-[#00E5FF]">
                Cert No. ISWDI2888709
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="glass flex items-center gap-2 px-3 py-2 text-sm">
                <Calendar className="h-4 w-4 text-[#915EFF]" />
                <span className="text-[#A9B1D6]">15 Feb – 22 Mar 2026</span>
              </div>
              <div className="glass flex items-center gap-2 px-3 py-2 text-sm">
                <Globe2 className="h-4 w-4 text-[#00E5FF]" />
                <span className="text-[#A9B1D6]">Virtual</span>
              </div>
              <div className="glass flex items-center gap-2 px-3 py-2 text-sm">
                <BadgeCheck className="h-4 w-4 text-[#915EFF]" />
                <span className="text-[#A9B1D6]">Verified</span>
              </div>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {responsibilities.map((r, i) => (
                <motion.li
                  key={r}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 text-sm text-[#A9B1D6]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#915EFF] to-[#00E5FF]" />
                  {r}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
