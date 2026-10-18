import MotionShell from "@/components/MotionShell";
import BackgroundFX from "@/components/BackgroundFX";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <MotionShell><div className="relative flex flex-1 flex-col">
      <BackgroundFX />
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div></MotionShell>
  );
}
