// https://www.youtube.com/watch?v=35lXWvCuM8o&t=497s

import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/CourseList";
import ButtonSide from "./components/ButtonSide";
import "bootstrap/dist/css/bootstrap.css";
import { Modal } from "./components/Modal/Modal";

function App() {
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  return (
    <div className="App">

      <MovieList />      <Modal show={show} close={closeModalHandler} />

      <ButtonSide />
    </div>
  );
}

export default App;
