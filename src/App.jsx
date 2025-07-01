import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <Home />
      <About/>
      <Service/>
      <Project />
      <Contact/>
      <Footer/>
    </>
  );
};

export default App
