import React from "react";
import "./HomePage.css";
import HomePageLayout from "../../layouts/HomePageLayout/HomePageLayout";
import Intro from "../../components/Intro/Intro";
import About from "../../features/About/About";
import Projects from "../../features/Projects/Projects";
import Contact from "../../features/Contact/Contact";
import SkillSwiper from "../../features/SkillSwiper/SkillSwiper";

const HomePage = () => {
  return (
    <>
      <HomePageLayout>
        <Intro />
        <About />
        <section id="skills" className="skill-section">
         <SkillSwiper />
        </section>

        <Projects />
        <Contact/>
      </HomePageLayout>
    </>
  );
};

export default HomePage;
