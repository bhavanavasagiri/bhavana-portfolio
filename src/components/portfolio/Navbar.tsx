import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 ${
          scrolled ? "glass-strong rounded-full mx-4 md:mx-auto px-6" : ""
        }`}
      >
        <a href="#hero" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[#915EFF] to-[#00E5FF] text-sm font-black">
            BV
          </span>
          <span className="hidden sm:inline text-gradient">Bhavana Vasagiri</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-[#A9B1D6]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative transition hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-to-r after:from-[#915EFF] after:to-[#00E5FF] hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-[#915EFF] to-[#00E5FF] px-5 py-2 text-sm font-semibold text-white shadow-[0_0_25px_-5px_rgba(145,94,255,0.7)] transition hover:scale-105"
        >
          Hire Me
        </a>
      </nav>
    </motion.header>
  );
}
