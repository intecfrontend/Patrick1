import React, { useState, useEffect } from "react";
import "./styles1/Firstjob.css";
import "./styles1/Experience.css";
import pf from "./images/thissite.jpg";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-modal";
import min from "./images/specialimages/Faminner.jpg";
import plus from "./images/specialimages/Faplusser.jpg";
import nav from "./images/specialimages/scronav.jpg";
import mail from "./images/specialimages/emailme.jpg";
import smile from "./images/specialimages/smile.jpg";
import usv from "./images/specialimages/uitschuiver.jpg";

import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function Firstjob() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="project-centerthd">
      <div className="row bodyprim project">
        <div className="col-lg-4  col-md-12 projectimagewrapper">
          <img className="shadow  project-image" src={pf} />
        </div>
        <div className="col-lg-8 col-md-12 project-info">
          <div className="col-lg-12 col-md-12  Modal__buttcont">
            <div
              onClick={() => setModalIsOpen(true)}
              className="effect6  Modal__butt"
            >
              <FaPlus></FaPlus>
            </div>
          </div>

          <p className="works__txt">
            <h3 className="works__subheading">About this PortFolio</h3>I have
            been aiming for a minimalistic webpage maximising the (js) effects.
            <div className="works__fat">
              <strong>
                Kaizen-minded and therefore passionate and burnout free.
              </strong>
            </div>
            Designed pages inspire and generate confidence <br /> even if the
            competition sells better quality customers tend to have confidence
            in the nicest looking site. <br />
            Design generates profit. <br />
            <div div className="project-view">
              <Modal
                style={{
                  overlay: {
                    background: "rgba(15, 16, 24, 0.2)",
                    width: "100vw ",
                    backdropFilter: "blur(5px)"
                  },
                  content: {
                    width: "80vw ",
                    marginLeft: "5%",
                    marginRight: "5%",
                    padding: "5vw",
                    background: "rgba(255, 255, 255, 0.9)"
                  }
                }}
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
              >
                <div className="Modal__item">
                  <div className="works__fat ">
                    <div id="firstModalTitel" className="Modal__cont">
                      <strong>The full option site </strong>
                      <div>
                        Made with the framework I love, React, using as much
                        libraries as I can. Buttons changing thanks to Ternary
                        Expressions.
                      </div>
                    </div>
                  </div>
                  <img
                    id="plus"
                    className="modalimg__opschuif mepicwrap shadow-about"
                    src={plus}
                    alt="me"
                  />
                  <img
                    className="modalimg__opschuif mepicwrap shadow-about"
                    id="min"
                    src={min}
                    alt="me"
                  />
                </div>

                <div className="Modal__item">
                  <img
                    className="modalimg__opschuif mepicwrap shadow-about"
                    src={nav}
                    alt="me"
                  />
                  <div className="works__fat ">
                    <div className="Modal__cont">
                      <strong>Scrolling up or scrolling down </strong>
                      <div>
                        I believe, if you are scrolling towards the end, you are
                        interested, the navbar appears. If you are scrolling in
                        the other direction, you know where you are going, no
                        navbar.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Modal__item">
                  <img
                    className="modalimg__opschuif mepicwrap shadow-about"
                    src={smile}
                    alt="me"
                  />
                  <div className="works__fat ">
                    <div className="Modal__cont">
                      <strong>Well taught details </strong>
                      <div>
                        A smile in the background, a soft shadow, a thin white
                        border, you must have noticed...
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Modal__item">
                  <img
                    className="modalimg__opschuif mepicwrap shadow-about"
                    src={usv}
                    alt="me"
                  />
                  <div className="works__fat ">
                    <div className="Modal__cont">
                      <strong>A side bar </strong>
                      <div>
                        Usefull information coded in that way you have the time
                        to copy and paste.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Modal__item">
                  <img
                    className="modalimg__opschuif mepicwrap shadow-about"
                    src={mail}
                    alt="me"
                  />
                  <div className="works__fat ">
                    <div className="Modal__cont">
                      <strong>Normal is for others </strong>
                      <div>
                        Thanks to the Material UI library customised to the
                        colors of this site.
                      </div>
                    </div>
                  </div>
                </div>
                <h2 data-aos="fade-up" id="Modalheading" className="heading">
                  Walking the extra Mile...
                </h2>
                <div className="Modal__buttcont">
                  <div
                    onClick={() => setModalIsOpen(false)}
                    className="effect6 Modal__butt"
                  >
                    <FaMinus></FaMinus>
                  </div>
                </div>
              </Modal>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Firstjob;
