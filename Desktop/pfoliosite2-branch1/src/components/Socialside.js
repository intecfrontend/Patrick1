import {
  FaPhone,
  FaChevronUp,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaGithub,
  FaMinus,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";
import Whatsapp from "../images/Whatsapp.svg";
import "../styles/Socialside.css";
import React, { useState, useEffect } from "react";
import { debounce } from "./helpers";

function Socialside() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);
  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos < currentScrollPos &&
        currentScrollPos - prevScrollPos > 10) ||
        currentScrollPos > 3500
    );
    //bij naar bovenscrollen: toon navbar in bovenste 100 pixels hoogte homesectie van top en 30px van de bovenste rand
    console.log("currentScrollPos  " + currentScrollPos);
    console.log("prevScrollPos  " + prevScrollPos);
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const footerStyles = {
    position: "fixed",
    height: "100vh",
    width: "100%",
    textAlign: "center",
    transition: "top 0.6s"
  };

  // const [show, setShow] = useState[false, false];
  const [show, setShow] = useState(false);
  const [showt, setShowt] = useState(false);
  const sideStyle = {
    left: visible ? 0 : -30,
    transition: "all 1s ease-in"
  };
  return (
    <div
      className="toolbarcont"
      style={{ left: visible ? "0" : "-30px" }}
      style={sideStyle}
    >
      <ul className="toolbar cf">
        <li>
          <a href="https://github.com/" target="_blank">
            <FaGithub className="fa fa-github"></FaGithub>
          </a>
        </li>
        <li className="uitschuiverli" onMouseEnter={() => setShow(!show)}>
          <a target="_blank">
            <FaEnvelope
              className="fa envelopeicon
                                    fa-envelope"
            ></FaEnvelope>
          </a>
          {show ? (
            <div className="uitschuiverstyle">B.Lantsoght@gmail.com</div>
          ) : null}
        </li>

        <li>
          <a href="https://web.whatsapp.com/" target="_blank">
            <img className="whatsapplogo" src={Whatsapp} alt="Whatsapp" />
            <div id="whatsapp"></div>
          </a>
        </li>
        <li className="uitschuiverli" onMouseEnter={() => setShowt(!showt)}>
          <a target="_blank">
            <FaPhone className="fa envelopeicon fa-envelope"></FaPhone>
            <div id="phone"></div>
          </a>
          {showt ? (
            <div id="uitschuiverphone" className="uitschuiverstyle">
              0499 388 227
            </div>
          ) : null}
        </li>
        <li>
          <a
            href="https://www.google.com/maps/place/Soldatenstraat+63,+1082+Sint-Agatha-Berchem/@50.8617692,4.2612568,13z/data=!4m5!3m4!1s0x47c3c1451357d329:0xdd7c4127352d0fa8!8m2!3d50.8617675!4d4.2962759"
            target="_blank"
          >
            <FaMapMarkerAlt
              className="fa
                                    fa-map-marker"
            >
              <div id="map">s</div>
            </FaMapMarkerAlt>
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/benedikt-lantsoght-02481319/"
            target="_blank"
          >
            <FaLinkedin
              className="fa
                                    fa-linkedin"
            ></FaLinkedin>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socialside;
