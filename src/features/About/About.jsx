import React from "react";
import "./About.css";
import content from "../../content/content.js";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";

const About = () => {
  const { aboutContent } = content;
  const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "React.js", "JSX",
    "Git",
    "Github",
    "Responsive Design",
    "Figma",
    "Redux",
    "React-Router",
    "Axios",
    "RESTful APIs",
    "Webpack",
    "Babel",
    "Material-UI", "Debugging","Code Splitting", 
    "Performance Optimization ", "State and Props Mangement"
  ];

  return (
    <>
      <div className="about-me-div" id="about">
        <div className="about-content-div">
          <div className="abt-header-div">
            <div className="abt-title-div">
              <h2 className="abt-title">{aboutContent.aboutTitle}</h2>
              <hr className="abt-title-hr"></hr>
            </div>
            <div className="abt-subtitle-div">
              <p className="abt-subtitle">{aboutContent.aboutSubTitle}</p>
            </div>{" "}
          </div>
          <div className="abt-me-con-detail-div">
            <div className="abt-me-desc-div">
              <div className="con-tag-title-div">
                <p className="con-tag-title">Get to know me!</p>
              </div>
              <div className="abt-con-desc">
                <p className="abt-con-desc">{aboutContent.aboutText1}</p>
                <p className="abt-con-desc">{aboutContent.aboutText2}</p>
                <p className="abt-con-desc">{aboutContent.aboutText3}</p>
              </div>
              <div contact-btn-div>
                <p className="abt-con-desc mb3">
                  Lets Continue To Projects
                  <ScrollLink
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <FaArrowRightLong
                      size={20}
                      className="intr-about-me-icon"
                      color="#545454"
                    />
                  </ScrollLink>{" "}
                </p>
              </div>
            </div>

            <div className="abt-me-skils-div">
              <div className="con-tag-title-div">
                <p className="con-tag-title">My Skills</p>
              </div>
              <div className="my-skills-div">
                {skillsData.map((skill, index) => (
                  <div className="my-skill">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
