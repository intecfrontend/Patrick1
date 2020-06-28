import React from "react";
import "./ButtonSide.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import PlaceIcon from "@material-ui/icons/Place";

class ButtonSide extends React.Component {
  render() {
    return (
      <div className="icon-bar">
        <a className="tooltip-ex twitter" href="#">
          <i className="fa fa-map-marker"></i>
          <span className="tooltip-ex-text tooltip-ex-right">
            Rouppeplein 16,
            <br /> 1000 Brussel
          </span>
          <PlaceIcon />
        </a>

        <a className="tooltip-ex google" href="#">
          <i className="fa fa-envelope"></i>
          <span className="tooltip-ex-text tooltip-ex-right">
            info@intecbrussel.be
          </span>{" "}
          <EmailIcon />
        </a>

        <a className="tooltip-ex linkedin" href="#">
          <i className="fa fa-phone"></i>
          <span className="tooltip-ex-text tooltip-ex-right">
            02 411 29 07{" "}
          </span>{" "}
          <CallIcon />
        </a>

        <a
          className="tooltip-ex youtube"
          href="https://www.youtube.com/watch?v=hy6KtzDffu8"
          target="_blank"
        >
          <i className="fa fa-youtube"></i>
          <span className="tooltip-ex-text tooltip-ex-right">klik mij! </span>{" "}
          <YouTubeIcon />
        </a>

        <a
          className="tooltip-ex facebook"
          href="https://www.facebook.com/intecbrussel.be/"
          target="_blank"
        >
          <i className="fa fa-facebook"></i>
          <span className="tooltip-ex-text tooltip-ex-right">klik mij! </span>
          <div icon={["fab", "facebook-f"]} />
          <FacebookIcon />
        </a>
      </div>
    );
  }
}

export default ButtonSide;
