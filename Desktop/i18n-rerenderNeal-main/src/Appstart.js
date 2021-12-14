import "./start.css";
import React, { useState, useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Page1 from "./LanguageComponents/page1"
import Page2 from "./LanguageComponents/page2"
import Page3 from "./LanguageComponents/page3"

function App() {
  const [en, setEng] = useState({ display: "block" });
  const [nl, setNl] = useState({ display: "none" });
  const [fr, setFr] = useState({ display: "none" });
  const [state, setState] = useState(false);

  let logoRef = useRef(null);
  let textRef = useRef(null);
  let nlflagRef = useRef(null);
  let frflagRef = useRef(null);
  let enflagRef = useRef(null);
  let flagsRef = useRef(null);
  // const handleExpand = () => {
  //   TweenMax.to(nlflagRef, 0.2, {
  //     width: "125%",
  //     height: "142.5%",
  //     borderRadius: "8px",

  //     ease: Power3.easeOut
  //   });
  //   setState(true);
  // };

  // const handleShrink = () => {
  //   TweenMax.to(nlflagRef, 0.2, {
  //     width: "20%",
  //     height: "50%",
  //     ease: Power3.easeOut,
  //     borderRadius: "3px"
  //   });
  //   setState(false);
  // };

  useEffect(() => {
    TweenMax.to(logoRef, 2, {
      transform: "translateY(0vw)",
      ease: "bounce",
      // https://greensock.com/docs/v2/Easing
    });
    TweenMax.to(logoRef, 2, {
      autoAlpha: 1,
    });
    // https://www.youtube.com/watch?v=_-YfoAzIDzw&t=7s
    TweenMax.to(textRef, 0.5, {
      transform: "translateY(0vw)",
      autoAlpha: 1,
      ease: "bounce",
    });
    // https://www.youtube.com/watch?v=whk76VMOlp0
    TweenMax.to(flagsRef, 1.5, {
      autoAlpha: 1,
    });
    TweenMax.staggerFrom(
      [enflagRef, nlflagRef, frflagRef],
      1.5,
      {
        opacity: 0,
        y: 140,
        ease: Power3.easeOut,
      },
      0.2
    );
  }, []);

  return (
    <div className="App flex"><Router>
        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="page1" element={<Page1 />} />
          <Route exact path="page2" element={<Page2 />} />
          <Route exact path="page3" element={<Page3 />} />
        </Routes>
        <div className="list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="page1">Page 1</Link></li>
            <li><Link to="page2">Page 2</Link></li>
            <li><Link to="page3">Page 3</Link></li>
          </ul>
        </div>
      </Router>
      <div className="content flex">
        <img
          className="neallogo"
          alt="logo"
          ref={(el) => {
            logoRef = el;
          }}
          src="img/logo.png"
        />
        <h4
          ref={(el) => {
            textRef = el;
          }}>
          <span className="en" style={en}>
            Let's work!
          </span>
          <span className="nl" style={nl}>
            Laten we werken!
          </span>
          <span className="fr" style={fr}>
            Allons-y!
          </span>
        </h4>
        <p>
          <span className="en" style={en}>
            Choose your language.
          </span>
          <span className="nl" style={nl}>
            Kies je taal.
          </span>
          <span className="fr" style={fr}>
            Choisissez vorte langue
          </span>
        </p>
        <div
          ref={(el) => {
            flagsRef = el;
          }}
          className="lang flex flags">
          <div className="flagwrapper">
            <img
              ref={(el) => {
                enflagRef = el;
              }}
              id="enflag"
              src="img/united-kingdom.svg"
              alt="flag"
              onMouseEnter={() => [
                setState(true),
                TweenMax.to(enflagRef, 0.2, {
                  width: "auto",
                  height: "65%",
                  marginLeft: "-20px",
                  transition: "all 0.2s",
                  objectFit: "Cover",
                  borderRadius: "3px",
                  ease: Power3.easeOut,
                }),
              ]}
              onMouseLeave={() => [
                setState(false),
                TweenMax.to(enflagRef, 0.2, {
                  width: "auto",
                  height: "50%",
                  marginLeft: "0px",
                  ease: Power3.easeOut,
                  borderRadius: "3px",
                }),
              ]}
            />
          </div>
          <div className="flagwrapper">
            <img
              ref={(el) => {
                nlflagRef = el;
              }}
              id="nlflag"
              alt="flag"
              src="img/nl.svg"
              onMouseEnter={() => [
                setEng({ display: "none" }),
                setNl({ display: "block" }),
                setState(true),
                TweenMax.to(nlflagRef, 0.2, {
                  width: "auto",
                  height: "65%",
                  transition: "height 0.2s",
                  objectFit: "Cover",
                  borderRadius: "3px",
                  ease: Power3.easeOut,
                }),
              ]}
              onMouseLeave={() => [
                setNl({ display: "none" }),
                setEng({ display: "block" }),
                setState(false),
                TweenMax.to(nlflagRef, 0.2, {
                  width: "auto",
                  height: "50%",
                  ease: Power3.easeOut,
                  borderRadius: "3px",
                }),
              ]}
            />
          </div>{" "}
          <div className="flagwrapper">
            <img
              ref={(el) => {
                frflagRef = el;
              }}
              id="frflag"
              alt="flag"
              src="img/france.svg"
              onMouseEnter={() => [
                setFr({ display: "block" }),
                setEng({ display: "none" }),
                setState(true),
                TweenMax.to(frflagRef, 0.2, {
                  width: "auto",
                  height: "65%",
                  marginRight: "-20px",

                  transition: "all 0.2s",
                  objectFit: "Cover",
                  borderRadius: "3px",
                  ease: Power3.easeOut,
                }),
              ]}
              onMouseLeave={() => [
                setEng({ display: "block" }),
                setFr({ display: "none" }),
                setState(false),
                TweenMax.to(frflagRef, 0.2, {
                  width: "auto",
                  height: "50%",
                  marginRight: "0px",
                  ease: Power3.easeOut,
                  borderRadius: "3px",
                }),
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
// https://www.youtube.com/watch?v=ySXy9BFu9LQ
export default App;
