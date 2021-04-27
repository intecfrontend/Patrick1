import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import "../styles/Experiences.css";
import pc from "../images/percent.jpg";
import { ScrollTo } from "react-scroll-to";

function SecondExp() {
  const [show, setShow] = useState(false);

  return (
    <div className="bodysec">
      <div className="timeline-title">
        <span id="badgedark" className="badge">
          Web Dev Student
        </span>
      </div>
      <h6 className="Exp_subtit">Full Time @ Syntra</h6>
      <div>
        <div className="inbetween  graish" id="text">
          As my end of the year project, I made a program for the UZB (Jette)
          allowing them to show and adapt the price of their treatment importing
          it from an excel file. The project was awarded with 98% by an
          independent jury @ Syntra. As my end of the year project, I made a
          program for the UZB (Jette) allowing them to show and adapt the price
          of their treatment importing it from an excel file. <br /> <br />
          The project was awarded with 98% by an independent jury @ Syntra.
          After the 10 month studies I looked and found a job as a web
          developer. It took one year but, I took advantage of my free time to
          self-study with Youtube and Udemy.
        </div>{" "}
        {show ? (
          <div className="percentpicwrap">
            <img className="percentpic " src={pc} alt="percentattest" />
          </div>
        ) : null}
        <p id="darkerTLS" className="timeline-subtitle">
          Sept 2017 - July 2018 - July 2019
        </p>{" "}
        <div className="e6cont ">
          <ScrollTo>
            {({ scroll }) => (
              <div
                className="effect6"
                onClick={() => scroll({ x: 0, y: 1900, smooth: true })}
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
    </div>
  );
}

export default SecondExp;
