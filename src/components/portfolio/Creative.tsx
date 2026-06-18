import { motion } from "framer-motion";
import { BookOpen, Camera, Music2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const cards = [
  {
    icon: BookOpen,
    title: "Story Writing",
    desc: "Crafting narratives that explore emotion, perspective, and imagination.",
  },
  {
    icon: Camera,
    title: "Content Creation",
    desc: "Sharing ideas through visuals and words that connect with people.",
  },
  {
    icon: Music2,
    title: "Singing",
    desc: "Expressing creativity and rhythm — a creative reset from the keyboard.",
  },
];

export default function Creative() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Off the Keyboard" title="Beyond Technology" />
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative glass-strong overflow-hidden p-8 text-center"
            >
              <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-[#915EFF]/30 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition" />
              <div className="relative">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[#915EFF] to-[#00E5FF] glow-primary animate-float">
                  <c.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm text-[#A9B1D6]">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
