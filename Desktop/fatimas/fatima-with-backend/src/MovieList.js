import React, { useState, useContext } from "react";
import Movie from "./Course";
import frontend1 from "./frontend1.jpg";
import "./movie.css";

import { OpleidingContext } from "./OpleidingContext";

// UseContext is de lift en OpleidingContext is de persoon die erin zit

const MovieList = () => {
  const [movies, setMovies] = useContext(OpleidingContext);

  return (
    <div  className="cardcont">
      <span  className="cardwrap">
        {movies.map((movie) => (
          <Movie
            img={movie.img}
            titel={movie.titel}
            ondertitel={movie.ondertitel}
            key={movie.id}
          />
        ))}
      </span>
    </div>
  );
};

export default MovieList;
