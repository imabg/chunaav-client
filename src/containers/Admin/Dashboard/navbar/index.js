import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <Link to="/admin/dashboard" className="text-white">Admin Dashboard </Link>👮
          </Typography>
          <Link to="/admin/voters" className="ml-4 text-white">
            VOTER
          </Link>
          <Link to="/admin/candidate" className="ml-4 text-white">
            CANDIDATE
          </Link>
          <Link to="/admin/result" className="ml-4 text-white">
            Result
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
