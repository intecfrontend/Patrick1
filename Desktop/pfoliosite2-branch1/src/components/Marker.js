import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";
import "../styles/button.css";
// import {linkedin-square} from '@fortawesome/free-solid-svg-icons'
import {
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
   
                <FaMapMarkerAlt
                  className="fa
                                    fa-map-markermap"
                  aria-hidden="true"
                  
                >     <div id="map">s</div>
                </FaMapMarkerAlt>
             );
}

export default Footer;
