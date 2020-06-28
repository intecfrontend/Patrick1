import React, { useState }  from "react";
import "./button.css";
import CreateIcon from "@material-ui/icons/Create";

const Button = () => {
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  return (
        <button className="btn-warning myshadowbut minibutton" >
          <CreateIcon className="CreateIcon" />
          Schrijf je in
        </button>
  )
}
export default Button
