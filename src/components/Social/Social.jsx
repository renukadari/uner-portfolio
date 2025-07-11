import React from 'react';
import "./Social.css";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


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
      const handleEmailClick = () => {
  window.location.href = "mailto:renukadari27@gmail.com";
};

  return (
<div className="intr-ct-con-div" style={{color: color || '#000'}}>
          <TiSocialLinkedin
            size={25}
            className="intr-con-icon"
            onClick={handleLinkedInClick}
            title='LinkedIn'
          />
          <FaGithub
            size={20}
            className="intr-con-icon"
            onClick={handleGitGubClick}
            title='GitHub'
          />
          <FaXTwitter
            size={20}
            className="intr-con-icon"
            onClick={handleTwitterClick}
            title='Twitter'
          />
          <MdEmail
  size={20}
  className="intr-con-icon"
  onClick={handleEmailClick}
    title="Send Email"

/>

          <FaInstagram
            size={20}
            className="intr-con-icon"
            onClick={handleInstagramClick}
            title='Instagram'
          />
          <SiLeetcode
            size={20}
            className="intr-con-icon"
            onClick={handleLeetCodeClick}
            title='LeetCode'
          />
          <img
            src={DevToLogo}
            alt="dev-to"
            className="intr-con-icon intr-dev-to-logo"
            onClick={handleDevToClick}
            title='Dev.to'
          />
        </div>  )
}

export default Social;