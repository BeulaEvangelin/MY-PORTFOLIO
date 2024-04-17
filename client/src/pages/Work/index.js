import React from "react";
import Header from "../../components/Header";
import Intro from "./intro";
import Projects from "./projects";
import Footer from "../../components/Footer";

function Work() {
  return (
    <div className="aura-container">
      <div className="aura"></div>
      <div className="px-40 sm:px-5">
        <Header />
        <Intro />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default Work;
