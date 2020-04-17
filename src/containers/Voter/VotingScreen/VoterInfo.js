import React from "react";
import { connect } from "react-redux";

const VoterInfo = (props) => {
  return (
    <div className="alert alert-primary  mt-4" role="alert">
      <div className="text-center">
        <strong>Welome,</strong>
        <span className="mx-2">{props.voter.name} 🙏</span>
        <br />
        <span className="mx-2">
          Aadhar number:{" "}
          <span className="text-dark">{props.voter.aadhar_num}</span>
        </span>
      </div>
      <div className="text-left">
        <span className="mx-2">
          City: <span className="text-dark">{props.voter.city}</span>
        </span>
        <span className="mx-2">
          Ward number: <span className="text-dark">{props.voter.ward_num}</span>
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    voter: state.voter.details,
  };
};

export default connect(mapStateToProps)(VoterInfo);
