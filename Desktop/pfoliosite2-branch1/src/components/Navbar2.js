import React, { Component, useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { FaPhone } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";
import "../styles/NavBar2.css";
import { debounce } from "./helpers";

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos < currentScrollPos &&
        currentScrollPos - prevScrollPos > 30) ||
        currentScrollPos < 300
    );
    //bij naar bovenscrollen: toon navbar in bovenste 100 pixels hoogte homesectie van top en 30px van de bovenste rand
    console.log("currentScrollPos  " + currentScrollPos);
    console.log("prevScrollPos  " + prevScrollPos);
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);
  const navStyle = {
    top: visible ? 0 : -68,
    transition: "all 0.5s ease-in"
  };
  return (
    <div className="App">
      <ReactBootStrap.Navbar
        style={{ top: visible ? "0" : "-68px" }}
        style={navStyle}
        collapseOnSelect
        expand="md"
        variant="dark"
        className="navbarcont"
      >
        <div onClick={() => scroll.scrollToTop()}>
          <ReactBootStrap.Navbar.Brand className="phoneLink">
            <FaPhone className="fa fa-phone" aria-hidden="true"></FaPhone> 0499
            388 227
          </ReactBootStrap.Navbar.Brand>
        </div>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <Link
              className="c-main__contact"
              smooth={true}
              duration={1000}
              to="about"
            >
              <ReactBootStrap.Nav.Link id="aboutLink">
                About Me
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link
              activeClass="activefocus"
              smooth={true}
              duration={1000}
              to="experience"
            >
              <ReactBootStrap.Nav.Link>Experience</ReactBootStrap.Nav.Link>
            </Link>
            <Link
              activeClass="activefocus"
              smooth={true}
              duration={1000}
              offset={-116}
              to="works"
            >
              <ReactBootStrap.Nav.Link>Portfolio</ReactBootStrap.Nav.Link>
            </Link>
            <Link
              activeClass="activefocus"
              smooth={true}
              duration={1000}
              to="skills"
              offset={-186}
            >
              <ReactBootStrap.Nav.Link>Skills</ReactBootStrap.Nav.Link>
            </Link>
          </ReactBootStrap.Nav>

          <ReactBootStrap.Nav>
            <Link
              activeClass="activefocus"
              smooth={true}
              duration={1000}
              to="Mailme"
              offset={-70}
            >
              <ReactBootStrap.Nav.Link>Mail Me</ReactBootStrap.Nav.Link>
            </Link>

            <Link
              activeClass="activefocus"
              smooth={true}
              duration={1000}
              to="Footer"
            >
              <ReactBootStrap.Nav.Link eventKey={2}>
                Contact Me
              </ReactBootStrap.Nav.Link>
            </Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
};

export default NavBar;
