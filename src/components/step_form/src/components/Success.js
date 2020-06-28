import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import "../index.css";
import smile from "./smile.gif";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Success" />
            <span className="successwrapper">
              <span>
                <h1 className="successtitle">TOF!</h1>
                <p className="successubtitle">
                  Hou je email (en spam) in de gaten!
                </p>
              </span>
              <img src={smile} alt="sent" className="successimage" />
            </span>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;

{
  /* <style>
.succestitle .successubtitle {
  text-align: center;
  width: 100%;
  background: lime
}
</style> */
}
