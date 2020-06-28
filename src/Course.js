import React, { useState } from "react";
import Button from "./components/button.js";
import Exit from "./components/exit.js";
import Card from "react-bootstrap/Card";
import info from "./imgflder/info.png";

import CreateIcon from "@material-ui/icons/Create";

import "./movie.css";
import "./components/button.css";

const Course = ({ img, titel, ondertitel }) => {

  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  return  (
    <div className="carddiv">

      <Card className="cardclass myshadow1 ">
        <div className="courseimgover">
          <img className="info" src={info} alt="" />
        </div>
        <Card.Img
          className="courseimg"
          variant="top"
          src={require(`./imgflder/${img}`)}
        />
        <Card.Body>
          <Card.Title
            // className="aanptekst" onDoubleClick={this.changeEditMode}
            id={`${titel}`}
          >
            {titel}
          </Card.Title>
          <Card.Text className="cardText">{ondertitel}</Card.Text>
        </Card.Body>
        <div>      { show ? <div onClick={closeModalHandler} className="back-drop"></div> : null }
        <button onClick={() => setShow(true)} className="btn-openModal">Open Modal</button>

        <Button/> 
        </div>



        <Exit />
        <span className="categoriestreep categorierood"></span>
      </Card>
    </div>
  );
};

export default Course;
