import React from "react";
import Modal from "react-modal";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const CustomModal = (props) => {
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        ariaHideApp={false}
        onRequestClose={props.closeModal}
        style={customStyles}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick
      >
        <div>{props.heading}</div>
        {props.children}
      </Modal>
    </div>
  );
};

export default CustomModal;
