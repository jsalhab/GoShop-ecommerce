import React, { useEffect, useRef } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Modal.scss";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const node = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  const handleClick = (event) => {
    // ref = { node };
    // if (node.current.contains(event.target)) {
    //   handleClose();
    //   return;
    // }
  };

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <button onClick={handleClose} className="close-button">
          <FontAwesomeIcon icon={faTimes} className="info-icon" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
