import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Education from "@/components/portfolio/Education";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Certifications from "@/components/portfolio/Certifications";
import Projects from "@/components/portfolio/Projects";
import Hackathons from "@/components/portfolio/Hackathons";
import Creative from "@/components/portfolio/Creative";
import Contact from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhavana Vasagiri — AI Builder & Frontend Developer" },
      { name: "description", content: "Portfolio of Bhavana Vasagiri — CS Engineering student, frontend developer, AI builder, and hackathon team leader. Explore projects, skills and experience." },
      { property: "og:title", content: "Bhavana Vasagiri — AI Builder & Frontend Developer" },
      { property: "og:description", content: "Premium 3D animated portfolio showcasing AI projects, skills, and hackathon journey." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Certifications />
      <Projects />
      <Hackathons />
      <Creative />
      <Contact />
    </main>
  );
}
