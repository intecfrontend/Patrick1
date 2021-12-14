import React from "react";
import "./PfItem.css";
import globe from "./imgPf/bigglobe.png";
import cat from "./imgPf/Cat.png";

function PfItem() {
  return (
    <div>
      <img id="globe" className="imgcont" src={globe} alt="globe" />
      <img className="imgcont" src={cat} alt="cat" />
    </div>
  );
}

export default PfItem;
