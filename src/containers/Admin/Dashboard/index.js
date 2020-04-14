import React from "react";
import { connect } from "react-redux";
import ButtonAppBar from "./navbar";

import { Button } from "@material-ui/core";

const Dashboard = (props) => {
  return (
    <div>
      <ButtonAppBar />
      <div className="alert alert-danger mt-2 text-center" role="alert">
        ⚠ Don't refresh the Page
      </div>
      <div className="jumbotron container mt-2">
        <h1 className="display-4">Welcome,{props.adminData.username} 🌲</h1>
        <p className="lead">
          Login Date: {props.adminData.loginDate}
          <br />
          Login Time: {props.adminData.loginTime}
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <Button variant="outlined" color="primary">
          Result
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    adminData: state.admin.data,
  };
};

// const mapDispatchToProps = {
//   adminDetails,
// };

export default connect(mapStateToProps)(Dashboard);
