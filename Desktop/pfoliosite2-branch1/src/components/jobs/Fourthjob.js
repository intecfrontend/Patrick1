import React, { useState, useEffect } from "react";
import "./styles1/Firstjob.css";
import "./styles1/Experience.css";
import "./styles1/Thirdjob.css";
import intecad from "./images/ALL16.gif";
import intecdr from "./images/voordeur.jpg";
import "bootstrap/dist/css/bootstrap.css";

function Fourthjob() {
  const [show, setShow] = useState(false);

  return (
    <div className="project-centerthd">
      <div className="row bodyprim project">
        <div className="col-lg-6  col-md-12 intecadwrapper">
          <img className="shadow intecad" src={intecad} />
          <img className="shadow intecad intecdoor" src={intecdr} />
        </div>
        <div className="col-lg-6 col-md-12 project-info">
          <p className="works__txt">
            <h3 className="works__subheading">Advertising for Intec</h3>Besides
            being an instrctor <br />I offered my graphic skills where needed.
            <div className="works__fat">
              <strong>
                Providing a professional image <br />
                and content to the company I work for.
              </strong>
            </div>
            The logo on the door or an ad on linkedin, <br />
            just better and different. <br />
            <div className="project-view"></div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Fourthjob;
