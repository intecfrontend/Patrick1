import React, { useState, useEffect } from "react";
import "../styles/Works.css";
import "../styles/Experience.css";
import "../styles/Emailme.css";
import "../styles/Works.css";
import Fourthjob from "./jobs/Fourthjob";
import Secondjob from "./jobs/Secondjob";
import Thirdjob from "./jobs/Thirdjob";
import Aos from "aos";
import "aos/dist/aos.css";

function Works() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="Parallax">
      <div id="boud-overlay">
        <h2 data-aos="fade-up" id="works" class="heading">
          Works
        </h2>
        <Secondjob />
        <Thirdjob />
        <Fourthjob />

        {/* <Firstjob /> */}
      </div>
      {/* smile-overlay */}
    </div>
  );
}

export default Works;
