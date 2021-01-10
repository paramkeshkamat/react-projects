import React, { useContext } from "react";
import { AppContext } from "../context";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import "../styles/Modal.css";

const Modal = () => {
  const { isModalOpen, closeModal } = useContext(AppContext);
  return (
    <div className={`${isModalOpen ? "Modal show-modal" : "Modal"}`}>
      <div className="modal-container">
        <button className="close-btn" onClick={closeModal}>
          <CloseRoundedIcon style={{ color: "red" }} />
        </button>
        <h1>Modal Content</h1>
      </div>
    </div>
  );
};

export default Modal;
