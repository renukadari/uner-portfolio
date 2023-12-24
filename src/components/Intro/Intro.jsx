import React from "react";
import "./Intro.css";
import DevToLogo from "../../assets/Images/Png/dev-to.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";
import content from "../../content/content.js";
import Social from "../Social/Social.jsx";

const Intro = () => {
  const { introContent } = content;

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
        <Social DevToLogo={DevToLogo}  />
      </div>
    </div>
  );
};

export default Intro;
