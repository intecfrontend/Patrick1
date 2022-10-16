import Btn from "./importedtxt";
import React, { useState } from 'react';
import './App.css';

function App(btnclass) {
  const [word, setWord] = useState('Parent')

  return (
    <div className="App">

      I am in the App.
      <h6>{word}</h6>

      <Btn changeWord={word => setWord(word)} className={`${btnclass}`} btnclass={"btngreen"} btntxt={"click to send mail"} ></Btn>


    </div >
  );
}

export default App;
