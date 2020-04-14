import React, { useState } from "react";
import {
  Button,
  TextField,
  Card,
  Typography,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { connect } from "react-redux";

import { fetchVoterInfo } from "../action";
import ButtonAppBar from "../navbar";

import CustomModal from "../../../../components/modal";
import CustomForm from "../../../../components/form";

const Voter = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalLabel, setModalLabel] = useState("");
  // FETCH Voter
  const [btnType, setbtnType] = useState("");
  const [aadharNum, setAadharNum] = useState("");
  const [error, setError] = useState(false);

  // ADD new Voter
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ward, setWard] = useState("");
  const [city, setCity] = useState("");

  // Image
  const [file, setFile] = useState(null);

  const closeModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const fetchVoterDetails = () => {
    setModalLabel("Voter Info");
    setbtnType("fetch");
    setModalIsOpen(true);
  };

  const handleClose = () => {
    if (aadharNum.length !== 12 && !aadharNum.trim()) {
      setError(true);
      setModalIsOpen(true);
    } else {
      props.fetchVoterInfo(aadharNum);
      setModalIsOpen(false);
      setAadharNum("");
    }
  };

  const addNewVoter = () => {
    setModalLabel("Add Voter");
    setbtnType("add voter");
    setModalIsOpen(true);
  };

  const saveNewVoter = () => {
    if (
      !name.trim() ||
      !fname.trim() ||
      !phone.trim() ||
      !ward.trim() ||
      !city.trim()
    ) {
      setError(true);
      setModalIsOpen(true);
    } else {
      setModalIsOpen(false);
    }
  };

  return (
    <>
      <ButtonAppBar />
      <div className="container mt-4">
        <div className="text-center">
          <Button
            variant="outlined"
            color="primary"
            onClick={fetchVoterDetails}
          >
            Voter
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="ml-4"
            onClick={addNewVoter}
          >
            ADD Voter
          </Button>
        </div>
        {true ? (
          <div>
            <div className="text-right mt-4">
              <Button variant="outlined" color="primary">
                UPDATE Voter
              </Button>
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                className="ml-4"
              >
                DELETE Voter
              </Button>
            </div>
            <div className="container mt-4">
              <Typography variant="h4" component="h3">
                Voter details:{" "}
              </Typography>
              <Card>
                <CardActionArea>
                  <CardMedia
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </div>
        ) : null}

        {modalIsOpen ? (
          <CustomModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel={modalLabel}
            heading={modalLabel}
          >
            <CustomForm>
              {btnType === "fetch" ? (
                <>
                  <TextField
                    id="outlined-basic"
                    label="Aadhar number"
                    variant="outlined"
                    type="number"
                    onChange={(e) => {
                      setError(false);
                      setAadharNum(e.target.value);
                    }}
                    error={error}
                    helperText={error ? "Enter a valid aadhar number" : ""}
                  />
                  <br />
                  <div className="mt-4">
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleClose}
                    >
                      Fetch Voter details
                    </Button>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <div className="mt-4">
                    <form>
                      <label>
                        Voter Image:
                        <input
                          type="file"
                          name="myImage"
                          accept="image/*"
                          onChange={(e) => {
                            setFile(e.target.value);
                          }}
                        />
                      </label>
                    </form>
                  </div>
                  <div className="mt-4">
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      type="text"
                      required
                      onChange={(e) => {
                        setError(false);
                        setName(e.target.value);
                      }}
                      error={error}
                      helperText={error ? "Name is required" : ""}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Father name"
                      variant="outlined"
                      type="text"
                      className="ml-4"
                      required
                      onChange={(e) => {
                        setError(false);
                        setFname(e.target.value);
                      }}
                      error={error}
                      helperText={error ? "Father name is required" : ""}
                    />
                  </div>
                  <div className="mt-4">
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      type="email"
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
                      onChange={(e) => {
                        setError(false);
                        setAadharNum(e.target.value);
                      }}
                      error={error}
                      helperText={error ? "Aadhar number is required" : ""}
                    />
                  </div>
                  <div className="mt-4">
                    <TextField
                      id="outlined-basic"
                      label="Phone number"
                      variant="outlined"
                      type="number"
                      required
                      onChange={(e) => {
                        setError(false);
                        setPhone(e.target.value);
                      }}
                      error={error}
                      helperText={error ? "Phone number is required" : ""}
                    />
                    <TextField
                      id="outlined-basic"
                      label="City"
                      variant="outlined"
                      type="text"
                      className="ml-4"
                      required
                      onChange={(e) => {
                        setError(false);
                        setCity(e.target.value);
                      }}
                      error={error}
                      helperText={error ? "City is required" : ""}
                    />
                  </div>
                  <div className="mt-4">
                    <TextField
                      id="outlined-basic"
                      label="Ward number"
                      variant="outlined"
                      type="number"
                      required
                      onChange={(e) => {
                        setError(false);
                        setWard(e.target.value);
                      }}
                      error={error}
                      helperText={error ? "Ward number is required" : ""}
                    />
                  </div>
                  <div className="mt-4">
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={saveNewVoter}
                    >
                      ADD NEW VOTER
                    </Button>
                  </div>
                </div>
              )}
            </CustomForm>
          </CustomModal>
        ) : null}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    voter: state.dashboard.voter,
  };
};

const mapDispatchToProps = {
  fetchVoterInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Voter);
