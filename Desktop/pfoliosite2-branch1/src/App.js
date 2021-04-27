import "./App.css";
import "./styles/About.css";
import { motion } from "framer-motion";
import Lead from "./components/Lead";
import About from "./components/Aboutme";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import { Button } from "@material-ui/core";
import MailMe from "./components/Emailme";
import Footer from "./components/Footer";
import Map from "./components/Map";
import Side from "./components/Socialside";
import Navbar2 from "./components/Navbar2";
import "./styles/NavBar2.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App">
      <ScrollToTop
        smooth
        color="gray"
      />
      <Navbar2 />
      <Side />
      <div className="containersection">
        <Lead id="lead" className="section" />
        <About id="about"  className="section" />
        <Timeline id="timeline"  className="section" />
        <Works id="works"  className="section" />
        <Skills id="ski"  className="section" id="Skills__section" />
        <MailMe id="mme"  className="section" />
        <Footer id="foo"  className="section" />
      </div>
    </div>
  );
}

export default App;
