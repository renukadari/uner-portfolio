import React, { useRef, useState } from "react";
import "./ProjectTemplate.css";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";

const ProjectTemplate = ({
  ProjecTitle,
  ProjectDescription,
  handleLiveLink1,
  ProjectVideo,
  ToolsUsed,
  ProjectOverview,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);
  const handleProjectOverview = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  return (
    <div>
      <hr className="prj-hr-line"></hr>
      <div className="prj-vi-de-div">
        <div className="vide-prj-card">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            className="video-div"
            onMouseEnter={handleButtonClick}
          >
            <source src={ProjectVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="prj-deatils-div">
          <div className="prj-name">{ProjecTitle}</div>
          <div className="prj-info">{ProjectDescription}</div>
          <div className="tools-title">Tools Used</div>
          <div className="my-skills-div my-prj-tools">
            {ToolsUsed.map((skill, index) => (
              <div className="my-skill prj-tool">{skill}</div>
            ))}
          </div>

          <button onClick={handleLiveLink1} className="live-link-btn">
            Live Link
          </button>
        </div>
      </div>
      <div className="accordion prj-accordion-div">
        <div className="prj-accordion-text" onClick={handleProjectOverview}>
          Project Overview
          {isOpen ? (
            <div className="mx-2">
              <FaAnglesUp size={20} />
            </div>
          ) : (
            <div className="mx-2">
              <FaAnglesDown size={20} />
            </div>
          )}
        </div>
        {isOpen && (
          <div className="prj-info prj-info-accordion">{ProjectOverview}</div>
        )}
      </div>
    </div>
  );
};

export default ProjectTemplate;
