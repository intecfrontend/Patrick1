import React, { useContext } from "react";
import { OpleidingContext } from "./OpleidingContext";
// class Movie extends Component {

const Nav = () => {
  const [movies, setMovies] = useContext(OpleidingContext);
  return (
    <div className="navwrap">
      <p className="navdiv"></p>
      <p className="navp">{movies.length} geplande opleidingen: </p>
    </div>
  );
};

export default Nav;
