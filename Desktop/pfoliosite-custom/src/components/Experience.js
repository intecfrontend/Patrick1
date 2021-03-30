import React from "react";
import "../styles/Experience.css";
import 'react-timelines/lib/css/style.css'

function Experience() {
  return (
    <div className="background-alt">
      <h2  id="experience" className="heading">Experience</h2>
      <div id="experience-timeline">
        <div data-date="July 2019 – present date">
          <h3>Web Dev Instructor </h3>
          <h4>A React love affair</h4>
          <p>
            Teaching adults to become a web developer. Being their companion and
            motivation to obtain this highly appreciated skill.
          </p>
        </div>

        <div data-date="September 2017 – July 2018">
          <h3>Full-time web dev student</h3>
          <h4>Full Stack Course @ Syntra Tour & Taxis</h4>
          <p>
            As my end of the year project, I made a program for the UZB (Jette)
            allowing them to show and adapt the price of their treatment
            importing it from an excel file. <br /> <br />
            The project was awarded with 98% by an independent jury @ Syntra. After the 10 month studies I looked and found a job as a web developer.
It took one year but, I took advantage of myfree time to self-study with Youtube and Udemy.
          </p>
        </div>

        <div data-date="October 2012 – September 2017">
          <h3>First steps towards web development</h3>
          <h4>Freelance Graphic Designer</h4>
          <p>
            Working in Brussels and studying code @ Syntra Evening courses and
            on my own. The market asked for less printing and more websites.
            This was a time where I had to adapt myself becoming a Web
            Developer.
          </p>
        </div>

        <div data-date="September 1996 – September 2012">
          <h3>Graphic Designer </h3>
          <h4>ArteGrafia Print & Design Centre</h4>
          <p>
            Pioneer in the print-on-demand business in Marbella. Providing
            advertising (from businesscard to billboard) material mainly for the
            booming real-estate market on the Costa Del Sol.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
