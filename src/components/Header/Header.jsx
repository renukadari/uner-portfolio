import React, { useState } from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import renu from "../../assets/Images/jpeg/renuka-photo.jpg";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import ResumePdf from "../../assets/pdfs/RenukaFrontend.pdf";
import { MdOutlineMenuOpen } from "react-icons/md";
import Sidebar from "../SideBar/SideBar";

// This is header component
const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  };

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
        <div>
          {" "}
          <MdOutlineMenuOpen className="menu-icon" size={30} onClick={toggleSideBar}/>

        </div>
        {isSideBarOpen && (
          <Sidebar isOpen={isSideBarOpen} onClose={closeSideBar} scrollToTop={scrollToTop} />
        )}
        <div className={`header-nav-items-div ${isSideBarOpen ? 'column' : ''}`}>
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
          <ScrollLink
            to="projects"
            className="header-nav-item"
            spy={true}
            smooth={true}
            duration={500}
          >
            {" "}
            Projects
          </ScrollLink>

          <a
            href={ResumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="header-nav-item"
          >
            Resume
          </a>
          <ScrollLink
            to="contact"
            className="header-nav-item"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </ScrollLink>
        </div>
      </div>
    </>
  );
};

export default Header;
