import React, { useState, useEffect } from "react";
import "./styles1/Firstjob.css";
import "./styles1/Thirdjob.css";
import "./styles1/Experience.css";
import ckb from "./images/cookbook.jpg";
import "bootstrap/dist/css/bootstrap.css";

function Thirdjob() {
  const [show, setShow] = useState(false);

  return (
    <div className="project-centerthd">
      <div className="row bodyprim project">
        <div className="col-lg-3  col-md-12 intecadwrapper">
          <img className="shadow intecad intecbook" src={ckb} />
        </div>
        <div className="col-lg-9 col-md-12 project-info">
          <p className="works__txt">
            <h3 className="works__subheading">React & API</h3>Food for the
            brain! <br />
            If you want to limit the amount of calories before making the
            recipe. <br /> <strong>Have a nice meal! </strong>
            <br />I have made an application for it.
            <div className="works__fat"></div>
            <a target="_blank" className="project-view">
              View App
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Thirdjob;
