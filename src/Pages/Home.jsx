import Navbar from "../components/Navbar/Navbar";
import Hero from "../section/Hero/Hero";
import About from "../section/About/About";
import Skills from "../section/Skills/Skills";
import Experience from "../section/Experience/Experience";
import Projects from "../section/Projects/Projects";
import Footer from "../components/Footer/Footer";
import Contact from "../section/Contact/Contact";
import { heroData } from "../data/hero";
import { aboutData } from "../data/about";
import { skillsData } from "../data/skills";
import experienceData from "../data/experience";
import { ProjectData } from "../data/projects";
import { FooterData } from "../data/footerData";

const Home = () => {
  return (
    <div className="relative bg-black text-white">
      <Navbar />
      <Hero data={heroData} />
      <About data={aboutData} />
      <Skills data={skillsData} />
      <Experience data={experienceData} />
      <Projects data={ProjectData} />
      <Contact />
      <Footer data={FooterData} />
    </div>
  );
};

export default Home;
