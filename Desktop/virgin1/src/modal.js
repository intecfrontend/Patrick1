import React from "react";

function Modal(props) {
  return (
    <div className="modal d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
