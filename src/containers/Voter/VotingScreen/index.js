import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import VoterInfo from "./VoterInfo";
import Candidates from "./Candidates";

import { fetchVotingScreen, voterSession, castVote } from "../actions";

const VotingScreen = (props) => {
  useEffect(() => {
    const { ward_num, city } = props.voter;
    props.fetchVotingScreen({ ward_num, city });
  }, []);

  setTimeout(() => {
    localStorage.removeItem("voter_token");
    props.voterSession();
    props.history.push("/");
  }, 50000);

  const [selectedCandidate, setSelectedCandidate] = useState([]);

  const handleOnChange = (e) => {
    setSelectedCandidate(selectedCandidate.concat(e.target.value));
  };
  const handleSubmit = () => {
    props.castVote(selectedCandidate);
    localStorage.removeItem("voter_token");
    props.voterSession();
    props.history.push("/thankU");
  };

  return (
    <div className="container">
      <VoterInfo />
      <Candidates
        candidates={props.candidatesData}
        handleOnChange={handleOnChange}
      />
      <Button
        variant="contained"
        color="primary"
        className="btn-lg btn-block fixed-bottom mt-4"
        disableElevation
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    voter: state.voter.details,
    candidatesData: state.voter.screen,
  };
};

const mapDispatchToProps = {
  fetchVotingScreen,
  voterSession,
  castVote,
};

export default connect(mapStateToProps, mapDispatchToProps)(VotingScreen);
