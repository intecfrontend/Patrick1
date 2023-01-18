import React, { Component } from 'react'
import "./Btn.css"
import translate from "../../i18nProvider/translate";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export class EventBind extends Component {
  constructor(props) {
    super(props)

    this.state = {
      addClass: false
    }
  }
  toggle() {
    this.setState({ addClass: !this.state.addClass });
    console.log(this)
  }
  render() {
    let boxClass = ["box"];
    if (this.state.addClass) {
      boxClass.push('green');
    }

    return (
      <div>

        <button onClick={this.toggle.bind(this)}>language menu</button>

        <FormControl >

          <RadioGroup id="FormControl"
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="eng"
            name="radio-buttons-group"
          >


            <div className="">


              <FormControlLabel duration={1000} id="FormControlLabel" value="eng" control={
                <div className={boxClass.join(' ')} onClick={this.toggle.bind(this)}>{this.state.addClass ? "English " : ""}
                </div>
              } label={translate('language')} onClick={this.props.eng} />

              <FormControlLabel duration={1000} id="FormControlLabel" value="dutch" control={
                <div className={boxClass.join(' ')} onClick={this.toggle.bind(this)}>{this.state.addClass ? "Nederlands " : ""}
                </div>
              } label={translate('language2')} onClick={this.props.dutch} />


            </div>


          </RadioGroup>

        </FormControl>
            </div>

        );
  }
}
        export default EventBind