import React from "react";
import "../styles/About.css";
import "../styles/Experiences.css";
import me from "../images/Benedikt.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function Aboutme() {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="mepiccont">
              <img className="mepicwrap shadow-about" src={me} alt="me" />
            </div>
            <div id="mepic-overlay"></div>

            <h2 className="heading">About Me</h2>
          </div>
          <div className="col-md-8">
            <p  className="inbetween  graish">
              Result driven creative thinker since 1989 putting the user first,
              understanding the importance of balancing those needs with
              business requirements and development capabilities.
              Self-disciplined and reliable distance worker. Flexible,
              resourceful and pragmatic with first class analytical and
              problem-solving skills.
              <br />
              <br />
              This mindset offered me the chance to work for multinationals such
              as Volvo, RBS (Royal Bank of Scotland), the Gibraltar Government
              to mention just a few. Since July 2019 I am a React instructor at
              Intec Brussels. Making complex this simple made me an appreciated
              job-generator for my students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
