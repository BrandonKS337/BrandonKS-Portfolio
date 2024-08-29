import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import TechStack from "./Components/TechStack";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:g-cyan-300 selection:text-cyan-200">
      {/* DARK MODE */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

        {/* LIGHT MODE */}
      {/* <div class="fixed top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}

      {/* Main Body */}
      <div className="container mx-auto px-8">
        <NavBar />
        <HeroSection />
        <AboutSection />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
