import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";
import "../styles/button.css";import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";
import { debounce } from "./helpers";
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
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 phone col-sm-4">
          <FaPhone className="fa fa-phone" aria-hidden="true"></FaPhone> 0499
          388 227
        </div>
        <div className="col-xs-12 top col-sm-4">
          <FaChevronUp onClick={() => scroll.scrollToTop()} id="to-top">
            <i className="fa fa-chevron-up" aria-hidden="true"></i>
          </FaChevronUp>
        </div>
        
        <div className="col-xs-12 social col-sm-4">
          <ul>
            <li>
              <a href="https://github.com/" target="_blank">
                <FaGithub
                  className="fa fa-github"
                  aria-hidden="true"
                ></FaGithub>
              </a>
            </li>
            <li>
              <a href="https://github.com/" target="_blank">
                <FaMapMarkerAlt
                  className="fa
                                    fa-map-marker"
                  aria-hidden="true"
                  
                >    
                <div id="map">s</div>
                </FaMapMarkerAlt>
              </a>
            </li>
            <li>
              <a href="https://github.com/" target="_blank">
                <FaEnvelope
                  className="fa
                                    fa-envelope"
                  aria-hidden="true"
                ></FaEnvelope>
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
                  aria-hidden="true"
                ></FaLinkedin>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
