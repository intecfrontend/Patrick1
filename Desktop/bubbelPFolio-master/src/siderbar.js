import React, { useState } from "react";
import "./exceptionalstyles.css";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

const Hamburger = styled.div`
  position: absolute;
  cursor: pointer;
  justify-content: start;
  align-items: center;
  display: flex;
  width: 120px;
  height: 40px;
  border-radius: 4px;
  background: rgb(1, 134, 203);
  left: 2%;
  margin-top: 2%;
  transform: translate() (-50%, -5%);
  z-index: 20;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;
const Hamwrap = styled.div`
  position: relative;
  height: 100px;
`;
const Nav = styled.div`
  position: relative;
`;
const Line = styled.div`
  background: white;
  width: 30px;
  height: 4px;
  border-radius: 8px;
  margin: 5px 15px 5px 15px;
`;

const TextMenu = styled.div`
  font-family: "roboto";
  color: white;
`;

const SidebarLink = styled.a`
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #e31837;
    font-weight: bold;
    transition: 0.2s ease-in-out;
    transform: scale(1.3);
  }
`;
const CloseIcon = styled(FaTimes)`
  color: #000;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
    transform: scale(1.3);
  }
`;
const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  display: grid;
  align-items: center;
  top: 0;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: 0.3s ease-in-out;
  /* right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")}; */
  box-shadow: rgba(60, 64, 67, 0.3) 0px 10px 20px 0px,
    rgba(60, 64, 67, 0.15) 0px 20px 30px 2px;
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const SidebarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e31837;
  padding: 16px 64px;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    transition: 0.2s ease-in-out;
    background: #fff;
  }
`;
function Siderbar() {
  const [Open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!Open);
  };
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");

  function toggleClass() {
    navLinks.classList.toggle("Open");
    links.forEach(link => {
      link.classList.toggle("fade");
    });
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Nav>
      <Hamwrap>
        <Hamburger onClick={handleToggle} class="hamburger">
          <div>
            <Line></Line>
            <Line></Line>
            <Line></Line>
          </div>
          <TextMenu>Menu</TextMenu>
        </Hamburger>
      </Hamwrap>
      <SidebarContainer>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <div toggle={toggle} />
        {/* <div isOpen={isOpen} toggle={toggle} /> */}

        <SidebarLink href="#">Home</SidebarLink>
        <SidebarLink href="#">About Me</SidebarLink>
        <SidebarLink href="#">Projects</SidebarLink>
        <SidebarWrapper>
          <SidebarLink id="contactwhite" href="#">
            Contact
          </SidebarLink>
        </SidebarWrapper>
      </SidebarContainer>
    </Nav>
  );
}

export default Siderbar;
