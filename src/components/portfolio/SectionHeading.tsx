import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-14 text-center"
    >
      {eyebrow && (
        <div className="mb-3 inline-block rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#00E5FF]">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl text-gradient">
        {title}
      </h2>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-[#A9B1D6]">{subtitle}</p>}
    </motion.div>
  );
}
