import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Folder, Linkedin, Sparkles } from "lucide-react";

const Scene3D = lazy(() => import("./Scene3D"));

const roles = [
  "Computer Science Engineering Student",
  "Frontend Developer",
  "AI Builder",
  "Hackathon Team Leader",
  "Aspiring Entrepreneur",
];

const stats = [
  { value: "8.98", label: "CGPA" },
  { value: "3+", label: "Major Projects" },
  { value: "Lead", label: "Hackathon Teams" },
  { value: "Intern", label: "Frontend Dev" },
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden pt-24">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050816]/30 to-[#050816] pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass inline-flex items-center gap-2 px-4 py-1.5 text-xs text-[#A9B1D6]"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#00E5FF]" />
          Available for Internships & Hackathons 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
        >
          <span className="text-gradient">BHAVANA</span>
          <br />
          <span className="text-gradient-neon">VASAGIRI</span>
        </motion.h1>

        <div className="mt-6 h-8 overflow-hidden">
          <motion.div
            key={roleIdx}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base sm:text-lg text-[#A9B1D6]"
          >
            <span className="mr-2 text-[#00E5FF]">▸</span>
            {roles[roleIdx]}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#915EFF] to-[#00E5FF] px-6 py-3 text-sm font-semibold text-white glow-primary transition hover:scale-105"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
          <a
            href="#projects"
            className="glass inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <Folder className="h-4 w-4 text-[#00E5FF]" /> View Projects
          </a>
          <a
            href="https://www.linkedin.com/in/bhavana-vasagiri-a76585331"
            target="_blank"
            rel="noreferrer"
            className="glass inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4 text-[#915EFF]" /> LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.8 } } }}
          className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4 }}
              className="glass px-4 py-5"
            >
              <div className="text-2xl font-bold text-gradient-neon">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-[#A9B1D6]">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
