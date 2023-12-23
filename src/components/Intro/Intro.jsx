import React from "react";
import "./Intro.css";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import DevToLogo from "../../assets/Images/Png/dev-to.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";
import content from "../../content/content.js";

const Intro = () => {
  const {introContent} = content
  const handleLinkedInClick = () => {
    // window.location.href = 'https://www.linkedin.com/in/renuka-kadari/'       open in this tab only
    // open in a new tab
    window.open("https://www.linkedin.com/in/renuka-kadari/");
  };
  const handleGitGubClick = () => {
    window.open("https://github.com/renukadari");
  };
  const handleLeetCodeClick = () => {
    window.open("https://leetcode.com/renukadari/");
  };
  const handleTwitterClick = () => {
    window.open("https://twitter.com/kadari_renuka");
  };
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/jfim_i/");
  };
  const handleDevToClick = () => {
    window.open("https://dev.to/renukadari");
  };
  return (
    <div className="intro-cp-div ">
      <div className="intro-content-div container">
        <div className="intro-ct-title-div">
          <h2 className="intro-title">Hey, I'M Renuka Kadari</h2>
          <h4 className="intro-sub-title">Frontend Web Developer</h4>
        </div>
        <div className="intr-ct-descri-div">
          <p className="intr-ct-descri">{introContent.introText1}</p>
          <p className="intr-ct-descri">{introContent.introText2}</p>
          <p className="intr-ct-descri">
            {introContent.introText3}
            <ScrollLink to="about" spy={true} smooth={true} duration={500}>
              <FaArrowRightLong
                size={20}
                className="intr-about-me-icon"
                color="#545454"
              />
            </ScrollLink>{" "}
          </p>
        </div>
        <div className="intr-ct-con-div">
          <TiSocialLinkedin
            size={25}
            className="intr-con-icon"
            onClick={handleLinkedInClick}
          />
          <FaGithub
            size={20}
            className="intr-con-icon"
            onClick={handleGitGubClick}
          />
          <FaXTwitter
            size={20}
            className="intr-con-icon"
            onClick={handleTwitterClick}
          />
          <FaInstagram
            size={20}
            className="intr-con-icon"
            onClick={handleInstagramClick}
          />
          <SiLeetcode
            size={20}
            className="intr-con-icon"
            onClick={handleLeetCodeClick}
          />
          <img
            src={DevToLogo}
            alt="dev-to"
            className="intr-con-icon intr-dev-to-logo"
            onClick={handleDevToClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
