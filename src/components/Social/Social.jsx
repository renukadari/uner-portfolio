import React from 'react';
import "./Social.css";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Social = ({DevToLogo, color}) => {
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
<div className="intr-ct-con-div" style={{color: color || '#000'}}>
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
        </div>  )
}

export default Social;