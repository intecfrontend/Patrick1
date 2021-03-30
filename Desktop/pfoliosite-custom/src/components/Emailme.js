import React, { useState } from "react";
import axios from "axios-react";
import "../styles/Emailme.css";
import { ThemeProvider, Button, TextField } from "@material-ui/core";

import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import styled from "styled-components";
import { FaRegHandPointRight } from "react-icons/fa";
const styles = {
  button: {
    background: "#3498db",
    color: "white",
    border: "white solid 1px",
    height: 48,
    width: 100,
    boxShadow: "0 3px 5px 2px rgba(25, 25, 25, .3)"
  }
};

function Mailme(props) {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });

  const ValidationTextField = withStyles({
    root: {
      "& input:valid + fieldset": {
        borderWidth: 2
      },
      "& input:invalid + fieldset": {
        borderColor: "red",
        borderWidth: 2
      },
      "& input:valid:focus + fieldset": {
        borderLeftWidth: 6,
        padding: "4px !important" // override inline-style
      }
    }
  })(TextField);
  // focusgreen
  const theme = createMuiTheme({
    palette: {
      primary: green
    }
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/YOUR_FORM_ID",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <div id="smile-overlaycont">
      <div id="Mailmebg" className="emailcont"></div>
      <div id="smile-overlay">
        <h2 id="Mailme" class="heading">
          Mail Me
        </h2>

        <form id="form" onSubmit={handleOnSubmit} noValidate autoComplete="off">
          <div className="TextFieldcont">
            <div className="TextFlexer TextFieldwrap">
              <ThemeProvider theme={theme}>
                <TextField
                  className="standardform"
                  id="standard-basic"
                  label="Your email-address:"
                  style={{ width: "40vw" }}
                />{" "}
                <TextField
                  className="standardform"
                  id="standard-basic"
                  label="Let's meet on..."
                  style={{
                    width: "25vw"
                  }}
                />
              </ThemeProvider>
            </div>{" "}
            <div className="TextFlexer TextFieldwrap2">
            <ThemeProvider theme={theme}><TextField
                className="standardform customstandardformMSG"
                id="outlined-basic"
                label="Your Message:"
                variant="outlined"
                multiline
                rows={4}
              /></ThemeProvider>
            </div>{" "}
            <div className="TextFlexer TextFldinner">
              <Button
                type="submit"
                disabled={serverState.submitting}
                className={props.classes.button}
              >
                {props.children ? props.children : "Send"}
              </Button>
            </div>
          </div>

          {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : ""}>
              {serverState.status.msg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default withStyles(styles)(Mailme);
