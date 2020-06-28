import React from "react";
import "./button.css";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

class Exit extends React.Component {
  render() {
    return (
      <a href="#">
          <CloseRoundedIcon className="exit" />
      </a>
    );
  }
}

export default Exit;
