import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  TextField,
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";

import { verifyOTP, resendOTP, removeError } from "../actions";

const OTP = (props) => {
  const [otp, setOtp] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [resendOTPBtn, setResendOTPBtn] = useState(true);

  useEffect(() => {
    if (otp.trim() && otp.length === 5) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [otp]);

  const handleVerify = (e) => {
    setResendOTPBtn(false);
    e.preventDefault();
    props.verifyOTP({ id: props.voter._id, OTP: otp });
  };

  useEffect(() => {
    if (props.verified) {
      props.history.push("/screen");
    }
  });

  const handleResendOTP = () => {
    if (props.ResendOTP === 2) {
      setResendOTPBtn(true);
      setBtnDisabled(true);
    }
    props.resendOTP(props.voter._id);
  };
  return (
    <div className="container text-center mt-4">
      {props.showError ? (
        <div className="alert alert-danger" role="alert">
          {props.message}
        </div>
      ) : null}

      <Typography variant="h5" className="mb-4">
        Welcome to The chunaav: The advanced and secure voting system
      </Typography>
      <Card variant="elevation" className="mt-4">
        <CardContent>
          <Typography variant="h6" className="text-muted">
            Enter the OTP (One-Time-Password)
          </Typography>
          <form
            noValidate
            autoComplete="off"
            className="mt-4"
            onSubmit={handleVerify}
          >
            <div>
              <TextField
                required
                type="number"
                id="outlined-basic"
                label="Enter OTP"
                variant="outlined"
                className="btn-lg"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <div className="mt-2 text-muted">
              <Button disabled={resendOTPBtn} onClick={handleResendOTP}>
                Resend-OTP
              </Button>
            </div>
            <CardActions className="justify-content-center">
              <Button
                variant="outlined"
                color="primary"
                type="submit"
                className="mt-4"
                disabled={btnDisabled}
              >
                VERIFY
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    verified: state.voter.OTPVerify,
    voter: state.voter.details,
    ResendOTP: state.resendOTP,
    showError: state.voter.error,
    message: state.voter.errorMsg,
  };
};

const mapDispatchToProps = {
  verifyOTP,
  resendOTP,
  removeError,
};

export default connect(mapStateToProps, mapDispatchToProps)(OTP);
