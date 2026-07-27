import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import MouseGlow from "../components/effects/MouseGlow";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Services from "../components/sections/Services";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <MouseGlow />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />

    </>
  );
};

export default Home;