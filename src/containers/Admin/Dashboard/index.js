import React, { useState } from "react";
import { connect } from "react-redux";
import ButtonAppBar from "./navbar";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const Dashboard = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logoutAdmin = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("admin_time");
    props.history.push("/admin/login");
  };
  return (
    <div>
      <ButtonAppBar />
      <div className="text-right mr-4 my-4">
        <Button variant="contained" color="secondary" onClick={handleClickOpen}>
          LOGOUT
        </Button>
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
      {open ? (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {`Logout  from ${props.adminData.username} ⚠?`}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you want to logout from the system 🤔?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={logoutAdmin} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    adminData: state.admin.data,
  };
};


export default connect(mapStateToProps)(Dashboard);
