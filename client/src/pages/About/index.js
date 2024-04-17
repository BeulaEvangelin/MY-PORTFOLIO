//client> src> pages> About> index.js
import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Intro from "./intro";
import AboutSkills from "./about";
import Experiences from "./experience";

function About() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  return (
    <div className="aura-container">
      <div className="aura"></div>
      <div>
        <Header />
        {portfolioData && (
          <div className="px-40 sm:px-10">
            <Intro />
            <AboutSkills />
            <Experiences />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
