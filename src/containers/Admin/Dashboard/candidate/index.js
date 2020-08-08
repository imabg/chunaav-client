import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { connect } from "react-redux";

import {
  fetchCandidateInfo,
  addCandidate,
  updateCandidate,
  deleteCandidate,
} from "../action";

import ButtonAppBar from "../navbar";

import CustomModal from "../../../../components/modal";
import CustomForm from "../../../../components/form";

import CnfrmDialog from "./CnfrmDialog";
import CandidateDetails from "./CandidateDetails";
const Candidate = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalLabel, setModalLabel] = useState("");
  // FETCH Candidatel
  const [btnType, setbtnType] = useState("Add");
  const [aadhar_num, setAadharNum] = useState("");
  const [disableBtn, setDisabledBtn] = useState(true);

  // ADD new Candidate
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState(null);
  const [phone_num, setPhone] = useState("");
  const [ward_num, setWard] = useState("");
  const [city, setCity] = useState("");
  const [position, setPosition] = useState("");

  // Image
  const [image, setFile] = useState(null);

  // Dialog
  const [open, setOpen] = React.useState(false);

  const handleDialogOpen = () => {
    if (props.candidate.name) {
      setOpen(true);
    }
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const fetchCandidateDetails = () => {
    setModalLabel("Candidate Info");
    setbtnType("fetch");
    setModalIsOpen(true);
  };

  // FETCH Candidate details
  const handleClose = () => {
    props.fetchCandidateInfo(aadhar_num);
    setModalIsOpen(false);
    setAadharNum("");
  };

  const addNewCandidate = () => {
    setModalLabel("Add Candidate");
    setbtnType("Add");
    setModalIsOpen(true);
  };

  const uploadImage = (e) => {
    const imageName = e.target.value;
    const param = e.target.files[0];
    let reader = new FormData();
    reader.append("file", param, imageName);
    setFile(param);
  };

  const saveNewCandidate = () => {
    let candidate;
    //! Need to be refactor
    if (email !== null) {
      candidate = {
        name,
        aadhar_num,
        fname,
        phone_num,
        ward_num,
        email,
        city,
        position,
      };
    } else {
      candidate = {
        name,
        aadhar_num,
        fname,
        phone_num,
        ward_num,
        city,
        position,
      };
    }
    const img = image;
    props.addCandidate({ candidate, img });
    setModalIsOpen(false);
    setName("");
    setFname("");
    setEmail("");
    setAadharNum("");
    setPhone("");
    setCity("");
    setWard("");
    setPosition("")
  };

  const handleUpdateBtn = () => {
    if (props.candidate.name) {
      setbtnType("update");
      setModalIsOpen(true);
      setModalLabel("Update Candidate");
      setName(props.candidate.name);
      setFname(props.candidate.fname);
      setEmail(props.candidate.email);
      setAadharNum(props.candidate.aadhar_num);
      setPhone(props.candidate.phone_num);
      setCity(props.candidate.city);
      setWard(props.candidate.ward_num); 
      setDisabledBtn(false);
    }
  };

  const handleUpdateCandidate = () => {
    const candidate = {
      name,
      aadhar_num,
      fname,
      email,
      phone_num,
      ward_num,
      city,
    };

    const img = image;
    const id = props.candidate._id;
    props.updateCandidate({ candidate, id });
    setModalIsOpen(false);
  };

  const deleteCandidateHandler = () => {
    // First confirm from the admin
    const id = props.candidate._id;
    props.deleteCandidate(id);
    handleDialogClose();
  };

  return (
    <>
      <ButtonAppBar />
      <div className="container mt-4">
        <div className="text-center">
          <Button
            variant="outlined"
            color="primary"
            onClick={fetchCandidateDetails}
          >
            Candidate Info
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="ml-4"
            onClick={addNewCandidate}
          >
            ADD Candidate
          </Button>
        </div>
        {props.candidate.name ? (
          <CandidateDetails
            handleUpdateBtn={handleUpdateBtn}
            handleDialogOpen={handleDialogOpen}
          />
        ) : null}

        {modalIsOpen ? (
          <CustomModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            heading={modalLabel}
          >
            <CustomForm>
              {btnType === "fetch" ? (
                <>
                  <br />
                  <TextField
                    id="outlined-basic"
                    label="Aadhar number"
                    variant="outlined"
                    type="number"
                    onChange={(e) => {
                      setAadharNum(e.target.value);
                      setDisabledBtn(false);
                    }}
                    helperText="Aadhar number must be of length 12"
                  />
                  <br />
                  <div className="mt-4">
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleClose}
                      disabled={disableBtn}
                    >
                      Fetch Candidate details
                    </Button>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <div className="mt-4">
                    <label>
                      Candidate Image:
                      <input
                        type="file"
                        name="file"
                        accept="image/*"
                        onChange={(e) => {
                          uploadImage(e);
                        }}
                      />
                    </label>
                  </div>
                  <div className="mt-4">
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      type="text"
                      value={name}
                      required
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Father name"
                      variant="outlined"
                      type="text"
                      className="ml-4"
                      required
                      value={fname}
                      onChange={(e) => {
                        setFname(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mt-4">
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Aadhar number"
                      variant="outlined"
                      type="number"
                      className="ml-4"
                      required
                      value={aadhar_num}
                      onChange={(e) => {
                        setAadharNum(e.target.value);
                      }}
                      helperText="Aadhar number must be of length 12"
                    />
                  </div>
                  <div className="mt-4">
                    <TextField
                      id="outlined-basic"
                      label="Phone number"
                      variant="outlined"
                      type="number"
                      required
                      value={phone_num}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="City"
                      variant="outlined"
                      type="text"
                      className="ml-4"
                      required
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mt-4">
                    <TextField
                      id="outlined-basic"
                      label="Ward number"
                      variant="outlined"
                      type="number"
                      required
                      value={ward_num}
                      onChange={(e) => {
                        setWard(e.target.value);
                        // TODO: proper field checking
                        setDisabledBtn(false);
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Position"
                      variant="outlined"
                      type="text"
                      className="ml-4"
                      required
                      value={position}
                      onChange={(e) => {
                        setPosition(e.target.value);
                        setDisabledBtn(false);
                      }}
                    />
                  </div>
                  <div className="mt-4">
                    <Button
                      variant="outlined"
                      color="primary"
                      disabled={disableBtn}
                      onClick={
                        btnType === "Add"
                          ? saveNewCandidate
                          : handleUpdateCandidate
                      }
                    >
                      {btnType === "Add"
                        ? "Add new Candidate"
                        : "Update Candidate"}
                    </Button>
                  </div>
                </div>
              )}
            </CustomForm>
          </CustomModal>
        ) : null}
        {open ? (
          <CnfrmDialog
            open={open}
            handleDialogClose={handleDialogClose}
            deleteCandidateHandler={deleteCandidateHandler}
          />
        ) : null}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    candidate: state.dashboard.candidate,
  };
};

const mapDispatchToProps = {
  fetchCandidateInfo,
  addCandidate,
  updateCandidate,
  deleteCandidate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Candidate);
