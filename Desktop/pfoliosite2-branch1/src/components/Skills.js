import React, { useEffect } from "react";
import "../styles/Skills.css";
// import Scrollcorrector from "./Scrollc";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="Skillscontainer">
      {/* <Scrollcorrector /> */}
      <div>
        <h2 data-aos="fade-up" id="skills" class="heading">
          Skills
        </h2>

        <ul className="SkillsUl">
          <li>Grid</li>
          <li>Flexbox</li>
          <li>SASS</li>
          <li>CSS</li>
          <li>Bootstrap</li>{" "}
        </ul>
        <ul className="SkillsUl">
          <li> Styled Components (React) </li>
          <li> UI/UX libraries - Material design </li>
        </ul>

        <ul className="SkillsUl">
          <li className="Skillsimp">JavaScript</li>
          <li>JQuery</li>
          <li className="Skillsimp">React </li>
          <li> Context</li>
          <li>Framer - Motion</li>
          <li>Node.js</li>
        </ul>

        <ul className="SkillsUl">
          <li>PHP/MySQL</li>
          <li>Firebase</li>
          <li> Sanity.io (still learning) </li>
        </ul>

        <ul className="SkillsUl">
          <li className="Skillsimp">Git</li>
          <li>Teams</li>
          <li>Indesign</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
        </ul>

        <ul className="SkillsUl">
          <li>Fluent in NL-FR-EN-ES-DE</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
