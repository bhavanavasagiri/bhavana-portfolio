import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const text = `I am a third-year Computer Science Engineering student at G Pulla Reddy Engineering College with a CGPA of 8.98. I am passionate about web development, AI-powered products, hackathons, and entrepreneurship. I enjoy building impactful digital solutions and leading teams to transform innovative ideas into real-world applications. Along with technology, I enjoy story writing, content creation, and singing, which help me strengthen my creativity and communication skills.`;

export default function About() {
  const words = text.split(" ");
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Introduction" title="About Me" />
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.018 } } }}
          className="glass-strong p-8 md:p-12 text-lg md:text-xl leading-relaxed text-[#A9B1D6]"
        >
          {words.map((w, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              className="inline-block"
            >
              {w}&nbsp;
            </motion.span>
          ))}
        </motion.p>
      </div>
    </section>
  );
}
