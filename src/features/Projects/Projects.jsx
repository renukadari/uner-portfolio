import React from "react";
import "./Projects.css";
import ProjectTemplate from "./ProjectTemplate";
import content from "../../content/content";
import PortfolioVideo from "../../assets/videos/renukaPortfolioVideo.mp4";
import HeartyHelperVideo from "../../assets/videos/hearty-helper.mp4";
import TechCurveVideo from "../../assets/videos/TechCurveVideo.mp4";
import ConqtVideo from "../../assets/videos/ConqtVideo.mp4";
import ProjectPortfolio from "./ProjectPortfolio";

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
    "Authentication",
    "Multilingual Support",
    "Responsive Design",
    "Post Management",
    "Filtering and Sorting",
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
  const handleLiveLinkPo = () => {
    window.open("https://renukakadarideveloper.netlify.app/");
  };
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
        ProjecTitle=" Project:1 Portfolio"
        ProjectDescription={projectContent.prjdescrpPo}
        ProjectVideo={PortfolioVideo}
        ToolsUsed={ToolsUsedPf}
        ProjectOverview={
          <>
            <p>
              {projectContent.prjPortfolioOv1}
              {projectContent.prjPortfolioOv2}
            </p>
            <p>{projectContent.prjPortfolioOv3}</p>
            <p>{projectContent.prjPortfolioOv4}</p>
          </>
        }
        handleLiveLink1={handleLiveLinkPo}
      />
      {/* <ProjectPortfolio
        ProjecTitle=" Project:1 Portfolio"
        ProjectDescription={projectContent.prjdescrpPo}
        ToolsUsed={ToolsUsedPf}
        ProjectOverview={
          <>
            <p>
              {projectContent.prjPortfolioOv1}
              {projectContent.prjPortfolioOv2}
            </p>
            <p>{projectContent.prjPortfolioOv3}</p>
            <p>{projectContent.prjPortfolioOv4}</p>
          </>
        }
        handleLiveLink1={handleLiveLinkPo}
      /> */}

      <ProjectTemplate
        ProjecTitle=" Project:2 Hearty Helper"
        ProjectDescription={projectContent.prjdescrpHh}
        ProjectVideo={HeartyHelperVideo}
        ToolsUsed={ToolsUsedHH}
        ProjectOverview={
          <>
            <p>
              {projectContent.prjDescriptionHh1}
              {projectContent.prjDescriptionHh2}
            </p>
            <p>{projectContent.prjDescriptionHh3}</p>
            <p>{projectContent.prjDescriptionHh4}</p>
          </>
        }
        handleLiveLink1={handleLiveLinkHh}
      />
      <ProjectTemplate
        ProjecTitle=" Project:3 Tech Curve"
        ProjectDescription={projectContent.prjdescrpTc}
        ProjectVideo={TechCurveVideo}
        ToolsUsed={ToolsUsedTc}
        ProjectOverview={
          <>
            <p>{projectContent.prjDescriptionTc1}</p>
            <p>{projectContent.prjDescriptionTc2}</p>
          </>
        }
        handleLiveLink1={handleLiveLinkTc}
      />
      <ProjectTemplate
        ProjecTitle=" Project:4 Conqt"
        ProjectDescription={projectContent.prjdescrpCt}
        ProjectVideo={ConqtVideo}
        ToolsUsed={ToolsUsedCt}
        ProjectOverview={
          <>
            <p>{projectContent.prjDescriptionCt1}</p>
            <p>{projectContent.prjDescriptionCt2}</p>
            <p>{projectContent.prjDescriptionCt3}</p>
          </>
        }
        handleLiveLink1={handleLiveLinkTc}
      />
    </div>
  );
};

export default Projects;
