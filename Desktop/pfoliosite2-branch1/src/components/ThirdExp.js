import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import "../styles/Experiences.css";
import pc from "../images/percent.jpg";
import flags from "./jobs/images/flags.jpg";

import { ScrollTo } from "react-scroll-to";

function ThirdExp() {
  const [show, setShow] = useState(false);

  return (
    <div className="bodysec">
      <div className="timeline-title">
        <span id="badgedark" className="badge">
          Graphic Designer
        </span>
      </div>
      <h6 className="Exp_subtit">Freelance</h6>
      <div>
        <div className="inbetween  graish" id="text">
          Having finished my studies with honors, at St Luc Tournai. I started
          my career working as a freelancer mainly for Eurologos as a graphic
          designer. Being multilingual and computerminded was a great asset. The
          experience obtained how to design and the Adobe Creative Suite
          knowledge obtained in my international carreer are still today an
          asset few people have.</div>
          <img className="flags" src={flags} alt="flags" />
          <div className="inbetween  graish" id="text">My eagerness to learn <br />
          resulted in becoming a true multilingual and obtaining a growing software knowledge making me
          the web professional I am today.
        </div>
        {show ? (
          <div className="percentpicwrap">
            <img className="percentpic " src={pc} alt="percentattest" />
          </div>
        ) : null}
        <p id="darkerTLS" className="timeline-subtitle">
          July 1989 - July 2019
        </p>
        
        </div>
      </div>
  );
}

export default ThirdExp;
