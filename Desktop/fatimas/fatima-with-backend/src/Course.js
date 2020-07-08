import React, { useState } from "react";
import Button from "./components/button.js";
import Exit from "./components/exit.js";
import Card from "react-bootstrap/Card";
import Modal from "react-modal";
import { ModelContext } from "./Context/ModelContext";

import "./movie.css";
import "./components/button.css";

const Course = ({ img, titel, ondertitel }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="carddiv">
      <Card className="cardclass myshadow1 ">
        <Card.Img variant="top" src={require(`./imgflder/${img}`)} />
        <Card.Body>
          <Card.Title
            // className="aanptekst" onDoubleClick={this.changeEditMode}
            id={`${titel}`}
          >
            {titel}
          </Card.Title>
          <Card.Text className="cardText">{ondertitel}</Card.Text>
        </Card.Body>
        {/* <button onClick={() => setModalIsOpen(true), console.log("clicked")} className="button" >butt</button> */}



        {/* componentDidMount() {
        console.log('Component mounted.. Loading data...')

            })
    } */}
    <Button onClick={() => setModalIsOpen(true), console.log("clicked in course")} className="button" />

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <h2>hi</h2>
          <div>
            <button onClick={() => setModalIsOpen(false)}>close</button>
          </div>
        </Modal>

        <Exit />
        <span className="categoriestreep categorierood"></span>
      </Card>
    </div>
  );
};

export default Course;
