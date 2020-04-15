import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoutes";

import AdminLogin from "../containers/Admin/Login";
import Dashboard from "../containers/Admin/Dashboard";
import Voter from "../containers/Admin/Dashboard/voter"
import Candidate from "../containers/Admin/Dashboard/candidate"

const CustomRoutes = () => {
  return (
    <Switch>
      <PrivateRoute path="/admin/dashboard" exact component={Dashboard} />
      <PrivateRoute path="/admin/voters" exact component={Voter} />
      <PrivateRoute path="/admin/candidates" exact component={Candidate} />
      <Route path="/admin/login" exact component={AdminLogin} />
    </Switch>
  );
};

export default CustomRoutes;
