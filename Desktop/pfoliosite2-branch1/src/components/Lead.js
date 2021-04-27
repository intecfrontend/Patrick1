import React from "react";
import Whatsapp from "../images/Whatsapp.svg";
import Test from "../images/cv.png";
import "../styles/lead.css";
import "../styles/button.css";
import cv from '../images/cv-ben-nl.pdf';

import Chevron from "../images/chevdown1.png";
import "../App.css"
export default function Lead() {
  return (
    <div>
      <div id="lead" 
 className="section">
        <div id="lead-content">
          <h1 data-aos="fade-up">Benedikt Lantsoght</h1>
          <h2 data-aos="zoom-up" data-aos-delay="1500" data-aos-duration="4500">
            React Developer
          </h2>

          <a href={cv} download className="btn-rounded-white">
            {/* <img src={Test} alt="test"/> */}
            Download Resume
          </a>
        </div>

        <div id="lead-overlay"></div>

        <div id="lead-down">
          <img src={Chevron} alt="chevron" className="scroll" />
          <h3></h3>
        </div>
      </div>
    </div>
  );
}
