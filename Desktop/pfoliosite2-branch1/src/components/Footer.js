import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";
import "../styles/button.css";
import Map from "./Map";
// import {linkedin-square} from '@fortawesome/free-solid-svg-icons'
import {
  FaPhone,
  FaChevronUp,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

function Footer() {
  const [showmap, setShowmap] = useState(true);  
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 address col-sm-4">
          <strong>Benedikt Lantsoght,</strong> Soldatenstraat 63, <br/>1082 St Ag. Berchem - Brussel
        </div>
        <div className="col-xs-12 top col-sm-4">
          <FaChevronUp id="to-top">
            <i className="fa fa-chevron-up" aria-hidden="true"></i>
          </FaChevronUp>
        </div>

        <div className="col-xs-12  address col-sm-4">

          <strong>RR: 670301.2636-8,</strong> <br/>Fintro: BIC/SWIFT: GEBABEBB <br/>BE76143090907895


        </div>


      </div>
    </div>
  );
}

export default Footer;
