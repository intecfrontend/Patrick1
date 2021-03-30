import React from "react";

import "../styles/lead.css";
import "../styles/button.css";
import Navbar from "./NavBar";

import Chevron from "../images/chevdown1.png";

export default function Lead() {
  return (
    <div id="lead">
      <div id="lead-content">
        <h1>Benedikt Lantsoght</h1>
        <h2>React Developer</h2>
        <a href="#" className="btn-rounded-white">
          Download Resume
         {/* < Navbar/> */}
        </a>
      </div>

      <div id="lead-overlay"></div>
         
      <div id="lead-down">
          <img src={Chevron} alt="chevron" className="scroll" />
          <h3>     
          </h3>
          <i faStyle="amazon" />
      </div>
    </div>
  );
}
