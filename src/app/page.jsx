import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import WebSystems from "@/components/WebSystems";
import Creative from "@/components/Creative";
import VideoProjects from "@/components/VideoProjects";
import Photography from "@/components/Photography";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <WebSystems />
      <Creative />
      <VideoProjects />
      <Photography />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}