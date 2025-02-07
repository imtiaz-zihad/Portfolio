import Header from "./Header";
import Home from "./Home";
import About from "./AboutMe";
import Skill from "./Skill";
import Projects from "./Projects";
import Contact from "./Contact";

const HomeLayout = () => {
  return (
    <div>
      <Header />

      
        <Home />
        <About />
        <Skill />
        <Projects />
        <Contact />
      
    </div>
  );
};

export default HomeLayout;
