import React, { useContext } from "react";
import { ModelContext } from "../Context/ModelContext";

export default props => {
  const { setCurrentModel } = useContext(ModelContext);

  const openModel = () => setCurrentModel({ name: "ContactsModal" });
  return (
    <div>
      <button onClick={openModel, console.log("IwasClicked")}>Open Modal</button>
    </div>
  );
};