// Sidebar.js
import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import ResumePdf from "../../assets/pdfs/RenukaDeveloper.pdf";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ isOpen, onClose, scrollToTop }) => (
  <div className={`sidebar ${isOpen ? "open" : ""}`}>
    <IoClose className="close-side-bar-icon" size={25} onClick={onClose} />

    <Link to="/" className="sidebar-item" onClick={scrollToTop}>
      Home
    </Link>
    <ScrollLink
      to="about"
      className="sidebar-item"
      spy={true}
      smooth={true}
      duration={500}
      onClick={onClose}
    >
      About
    </ScrollLink>
    <ScrollLink
      to="projects"
      className="sidebar-item"
      spy={true}
      smooth={true}
      duration={500}
      onClick={onClose}
    >
      Projects
    </ScrollLink>
    <a
      href={ResumePdf}
      target="_blank"
      rel="noopener noreferrer"
      className="sidebar-item"
      onClick={onClose}
    >
      Resume
    </a>
    <ScrollLink
      to="contact"
      className="sidebar-item"
      spy={true}
      smooth={true}
      duration={500}
      onClick={onClose}
    >
      Contact
    </ScrollLink>
  </div>
);

export default Sidebar;
