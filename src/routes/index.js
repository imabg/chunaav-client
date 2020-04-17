import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoutes";
import PrivateRouteVoter from "./PrivateRouteVoter"

import AdminLogin from "../containers/Admin/Login";
import Dashboard from "../containers/Admin/Dashboard";
import Voter from "../containers/Admin/Dashboard/voter"
import Candidate from "../containers/Admin/Dashboard/candidate"

// Voter Routes
import VoterLogin from "../containers/Voter/Login"
import OTP from "../containers/Voter/OTP"
import VotingScreen from "../containers/Voter/VotingScreen"
import ThankU from "../containers/Voter/ThankU"

// NoMatch -> 404
import NoMatch from "../components/NoMatch";

const CustomRoutes = () => {
  return (
    <Switch>
      <Route path="/admin/login" exact component={AdminLogin} />
      <PrivateRoute path="/admin/dashboard" exact component={Dashboard} />
      <PrivateRoute path="/admin/voters" exact component={Voter} />
      <PrivateRoute path="/admin/candidates" exact component={Candidate} />
      <Route path="/" exact component={VoterLogin} />
      <PrivateRouteVoter path="/otp" exact component={OTP} />
      <PrivateRouteVoter path="/screen" exact component={VotingScreen} />
      <PrivateRouteVoter path="/thankU" exact component={ThankU} /> 
      <Route component={NoMatch} />
    </Switch>
  );
};

export default CustomRoutes;
