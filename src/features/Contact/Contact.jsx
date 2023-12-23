import React from "react";
import "./Contact.css";
import content from "../../content/content";

const Contact = () => {
  const { ContactContent } = content;
  return (
    <div className="about-me-div" id="about">
      <div className="about-content-div">
        <div className="abt-header-div">
          <div className="abt-title-div">
            <h2 className="abt-title">Contact</h2>
            <hr className="abt-title-hr"></hr>
          </div>
          <div className="abt-subtitle-div">
            <p className="abt-subtitle">{ContactContent.contactDescription}</p>
          </div>{" "}
        </div>
        <div className="">
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
