import React, { useEffect } from "react";
import Navbaar from "./components/Navbaar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/projects";
import Contacts from "./components/Contacts";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="container">
        <Navbaar />
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Contacts />
      </div>
    </>
  );
};

export default App;
