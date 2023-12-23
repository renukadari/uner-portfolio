import React from "react";
import "./Projects.css";
import ProjectTemplate from "./ProjectTemplate";
import content from "../../content/content";
import HeartyHelperVideo from "../../assets/videos/hearty-helper.mp4";
import TechCurveVideo from "../../assets/videos/TechCurveVideo.mp4";
import ConqtVideo from "../../assets/videos/ConqtVideo.mp4";

const Projects = () => {
  const { projectContent } = content;
  const ToolsUsedPf = [
    "HTML",
    "CSS",
    "Bootstrap",
    "React",
    "javaScript",
    "Git",
    "Netlify",
  ];
  const ToolsUsedHH = [
    "HTML",
    "CSS",
    "React",
    "javaScript",
    "React",
    "bootstrap",
    "Websocket",
    "npm",
    "Redux",
    "APIs",
    "Git",
    "GitHub",
    "State Management",
  ];
  const ToolsUsedTc = [
    "HTML",
    "CSS",
    "javaScript",
    "Figma",
    "UI/UX",
    "Bootstrap",
    "Content Curation",
    "Content Research",
    "Git",
  ];
  const ToolsUsedCt = [
    "HTML",
    "CSS",
    "Content Curation",
    "Content Research",
    "Bootstrap",
    "Content Curation",
    "Content Research",
    "Git",
  ];
  const handleLiveLinkHh = () => {
    window.open("https://heartyhelper.co/");
  };
  const handleLiveLinkTc = () => {
    window.open("https://techcurve.co/");
  };
  return (
    <div className="projects-div" id="projects">
      <div>
        <h1 className="prjct-title">Projects - Past Work.</h1>
      </div>
      <ProjectTemplate
        ProjecTitle=" Project:1 Uner Portfolio"
        ProjectDescription={projectContent.prjdescrp}
        ProjectVideo={HeartyHelperVideo}
        ToolsUsed={ToolsUsedPf}
        ProjectOverview={projectContent.prjdescr1}
        handleLiveLink1={handleLiveLinkHh}
      />
      <ProjectTemplate
        ProjecTitle=" Project:2 Hearty Helper"
        ProjectDescription={projectContent.prjdescr1}
        ProjectVideo={HeartyHelperVideo}
        ToolsUsed={ToolsUsedHH}
        ProjectOverview={projectContent.prjdescr1}
        handleLiveLink1={handleLiveLinkHh}
      />
      <ProjectTemplate
        ProjecTitle=" Project:3 Tech Curve"
        ProjectDescription={projectContent.prjdescr1}
        ProjectVideo={TechCurveVideo}
        ToolsUsed={ToolsUsedTc}
        ProjectOverview={projectContent.prjdescr1}
        handleLiveLink1={handleLiveLinkTc}
      />
      <ProjectTemplate
        ProjecTitle=" Project:4 Conqt"
        ProjectDescription={projectContent.prjdescr3}
        ProjectVideo={ConqtVideo}
        ToolsUsed={ToolsUsedCt}
        ProjectOverview={projectContent.prjdescr1}
        handleLiveLink1={handleLiveLinkTc}
      />
    </div>
  );
};

export default Projects;
