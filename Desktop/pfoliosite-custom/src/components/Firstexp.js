import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import "../styles/Experiences.css";
import { ScrollTo } from "react-scroll-to";

function FirstExp() {
  const [show, setShow] = useState(false);

  return (
    <div className="bodyprim">
      <div className="timeline-title">
        <ScrollTo>
          {({ scroll }) => (
            <div
              className="effect5"
              onClick={() => scroll({ x: 0, y: 1360, smooth: true })}
            >
              <div onClick={() => setShow(!show)}>
                <span id="badgedark" className="badge">
                  Web Dev Instructor
                </span>
              </div>
            </div>
          )}
        </ScrollTo>
      </div>
      <h6>A React love affair</h6>
      <div>
        <div className="inbetween  graish" id="text">
          Teaching adults to become a web developer. Being their companion and
          motivation to obtain this highly appreciated skill. The course has
          been developed by myself and is React-orientated.
        </div>
        {!show ? (
          <div className="programme3 ">
            Click "+" to see the full programme.
          </div>
        ) : null}
        {show ? (
          <div className="programme">
            {" "}
            <h6 className="">Programme</h6>
            <ul>
              {" "}
              <li className="hr"></li>
              <li>GIT</li>
              <li>Teams</li>
              <li>Setting up VS code & extentions</li>
              <li className="hr"></li>
              <li>CSS/SASS</li>
              <li>Grid/FlexBox</li>
              <li>Bootstrap</li>
              <li className="hr"></li>
              <li>PHP/Mysql</li>
              <li>Firebase</li>
              <li className="hr"></li>
              <li>
                Photoshop <span className="graish"> - Pixlr.com</span>
              </li>
              <li>
                Illustrator
                <span className="graish"> - Vectr.com</span>
              </li>
              <li className="hr"></li>
              <li> JQuery</li>
              <li> Javascript</li> <li> Node</li>
              <li>REACT</li>
              <li>React & Contextxt</li>
              <li>REACT Framer-Motion</li>
              <li>
                Ui/ux design libraries
                <span className="graish"> - Material design</span>
              </li>
              <li className="hr"></li>
            </ul>{" "}
          </div>
        ) : null}

        <div className="inbetween graish">
          {" "}
          Having a graphice designer background myself obliges my students to
          have a sexy result, it is mainly a Front-End Course and I am proud
          when students find a job during or soon after my course.
          <br />
          <br />
          Being able to speak 5 languages fluently is highly appreciated.
        </div>

        {show ? (
          <div className="programme2">
            <h6>Time-off</h6>
            <ul className="programme">
              <li className="hr"></li>
              <li> Headless CMS Sanity.io.</li>
              <li>
                Tutorials <span className="graish"> - Youtube - Udemy</span>
              </li>
              <li> KAIZEN in coding</li> <li className="hr"></li>
            </ul>
          </div>
        ) : null}
      </div>
      <p className="timeline-subtitle">July 2019 - present day</p>
      <div className="e6cont ">
        <ScrollTo>
          {({ scroll }) => (
            <div
              className="effect6"
              onClick={() =>
                scroll({
                  x: 0,
                  y: 1660,
                  smooth: true
                })
              }
            >
              <div onClick={() => setShow(!show)} className="effect6 ">
                {!show ? <FaPlus></FaPlus> : <FaMinus></FaMinus>}
                {!show ? console.log("Faplus") : null}
              </div>
            </div>
          )}
        </ScrollTo>
      </div>
    </div>
  );
}

export default FirstExp;
