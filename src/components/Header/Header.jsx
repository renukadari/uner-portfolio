import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import renu from "../../assets/Images/renuka-photo.jpg";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import ResumePdf from "../../assets/pdfs/RenukaFrontend.pdf";

// This is header component
const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  };
  console.log('ResumePdf:', ResumePdf);

  return (
    <>
      <div className="header-div">
        <div className="header-brand-div">
          <img src={renu} alt="renuka" className="renu-hp-img" />
          <Link to="/" className="header-brand-name" onClick={scrollToTop}>
            {" "}
            Renuka Kadari
          </Link>
        </div>
        <div className="header-nav-items-div">
          <Link to="/" className="header-nav-item" onClick={scrollToTop}>
            Home
          </Link>
          <ScrollLink
            to="about"
            className="header-nav-item"
            spy={true}
            smooth={true}
            duration={500}
          >
            {" "}
            About
          </ScrollLink>
          <Link to="/" className="header-nav-item">
            Projects
          </Link>
         
          <a
            href={ResumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="header-nav-item"
          >
            Resume
          </a>
          <Link to="/" className="header-nav-item">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
