import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Eerste kennismaking" />{" "}
            <TextField
              placeholder="Je emailadres graag"
              label="GSM"
              onChange={handleChange("GSM")}
              defaultValue={values.GSM}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Je rijksregisternummer achter op je ID-kaart?"
              label="RR-nummer"
              onChange={handleChange("rrnummer")}
              defaultValue={values.rrnummer}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Je stad + postcode graag."
              label="Stad"
              onChange={handleChange("city")}
              defaultValue={values.city}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Straat en nummer(s)."
              label="Straat"
              onChange={handleChange("straat")}
              defaultValue={values.straat}
              margin="normal"
              fullWidth
            />
            <br />
            <Button color="secondary" variant="contained" onClick={this.back}>
              vorige stap
            </Button>
            <Button color="primary" variant="contained" onClick={this.continue}>
              volgende stap
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
