import Header from "./Header";
import Home from "./Home";
import About from "./AboutMe";
import Skill from "./Skill";
import Projects from "./Projects";
import Contact from "./Contact";
import Education from "./Education";

const HomeLayout = () => {
  return (
    <div>
      <Header />

      
        <Home />
        <About />
        <Skill />
        <Projects />
        <Education />
        <Contact />
      
    </div>
  );
};

export default HomeLayout;
