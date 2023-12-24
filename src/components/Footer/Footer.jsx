import React from "react";
import "./Footer.css";
import content from "../../content/content";
import DevToLogo from "../../assets/Images/Png/dev-to-white.png";
import Social from "../Social/Social";

const Footer = () => {
  const { FooterContent } = content;
  
  return (
    <div className="footer-div">
      <div className="footer-contact-div">
        <div className="footer-contact-part">
          <p className="footer-name">Renuka Kadari</p>
          <p className="footer-descri">{FooterContent.footerDescription}</p>
        </div>
        <div className="footer-contact-part">
          <p className="footer-name">SOCIAL</p>
        <Social DevToLogo = {DevToLogo} color='#fff'/>
        </div>
      </div>
      <div className="footer-cp-line">
        <hr className="footer-hr-line"></hr>{" "}
        <p className="cp-text">© Copyright 2024. Made by Renuka Kadari</p>
      </div>
    </div>
  );
};

export default Footer;
