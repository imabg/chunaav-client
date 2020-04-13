import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoutes";

import AdminLogin from "../containers/Admin/Login";

const CustomRoutes = () => {
  return (
    <Switch>
      {/* <PrivateRoute path="/admin/login" exact component={AdminLogin} /> */}
      <Route path="/admin/login" exact component={AdminLogin} />
    </Switch>
  );
};

export default CustomRoutes;
