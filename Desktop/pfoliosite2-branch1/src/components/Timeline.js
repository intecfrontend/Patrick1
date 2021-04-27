import React, { useState, useEffect } from "react";
import "../styles/Timeline.css";
import me from "../images/class.jpg";
import st from "../images/syntra.png";
import gd from "./jobs/images/Graphic.jpg";

import FirstExperience from "./Firstexp";
import SecondExperience from "./SecondExp";
import ThirdExperience from "./ThirdExp";
import Aos from "aos";
import "aos/dist/aos.css";

function Timeline() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [show, setShow] = useState(false);

  return (
    <div className="containerbg">
      <div id="experience" className="background-alt">
        <h2 data-aos="fade-up" className="heading">
          Experience
        </h2>
        <p> please hover the images & use the buttons</p>
        <div className="container">
          <div className="timeline">
            <div className="timeline-container">
              <div className="hovercontainer">
                <img className="classpicwrap shadow-about" src={me} alt="me" />
              </div>
              <FirstExperience></FirstExperience>
            </div>

            <div className="timeline-container">
              <div className="hovercontainer">
                <img
                  className="classpicwrap shadow-about"
                  src={st}
                  alt="syntralogo"
                />
              </div>
              <SecondExperience></SecondExperience>
            </div>
            <div className="timeline-container success">
              <div className="timeline-icon">
                <i className="far fa-grin-tears"></i>
              </div>
              <div className="timeline-container">
              <div className="hovercontainer">
                <img
                  className="classpicwrap shadow-about"
                  src={gd}
                  alt="syntralogo"
                />
              </div>
              <ThirdExperience></ThirdExperience>
            </div>
            <div className="timeline-container success">
              <div className="timeline-icon">
                <i className="far fa-grin-tears"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}

export default Timeline;
