import React from "react";
import Navbar from "./components/navbar";
import { Hero } from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


const App = () => {
  return (
    <>
      {" "}
      <div>
        <Navbar />
        <Hero/>
        <About/>
        <Projects />
        <Experience/>
        <Contact/>
        <Footer/>
        
      </div>
    </>
  );
};

export default App;
