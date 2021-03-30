import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/NabBar.css";

function NavB() {
  return (
    <div className="navbarcont">
      <nav
        id="navbarround"
        className="shadow navbar navbar-expand-lg navbar-light bg-light"
      >
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a
                className=" 
            nav-link"
                href="#"
              >
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Experience
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link" href="#">
                Skills
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link" href="#">
                Mail Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavB;
