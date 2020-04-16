import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const CnfrmDialog = (props) => {
  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you really want to delete the voter?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Remove candiate from election 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleDialogClose} color="primary">
            Disagree
          </Button>
          <Button onClick={props.deleteCandidateHandler} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CnfrmDialog;
