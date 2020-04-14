import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoutes";

import AdminLogin from "../containers/Admin/Login";
import Dashboard from "../containers/Admin/Dashboard";
import Voter from "../containers/Admin/Dashboard/voter"

const CustomRoutes = () => {
  return (
    <Switch>
      <PrivateRoute path="/admin/dashboard" exact component={Dashboard} />
      <PrivateRoute path="/admin/voters" exact component={Voter} />
      <Route path="/admin/login" exact component={AdminLogin} />
    </Switch>
  );
};

export default CustomRoutes;
