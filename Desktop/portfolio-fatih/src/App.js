import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import "./App.css";

function App() {
  return (
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/" element={<AboutMe />} />
            </Routes>
          </BrowserRouter>
        </div>
  );
}

export default App;
