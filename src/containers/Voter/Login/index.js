import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {loginVoter} from "../actions"
import {
  TextField,
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";


const Login = (props) => {
  const [aadhar_num, setAadharNum] = useState("");
  const [phone_num, setPhoneNum] = useState("");
  const [loginDisabled, setLoginDisable] = useState(true);

  useEffect(() => {
    if (aadhar_num.trim() && phone_num.trim()) {
      setLoginDisable(false);
    } else {
      setLoginDisable(true);
    }
  }, [aadhar_num, phone_num]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.loginVoter({ aadhar_num, phone_num });
  };

  useEffect(() => {
    if (props.loginStage) props.history.push("/otp");
  });

  return (
    <div className="container mt-4 mx-auto text-center" id="recaptcha-container">
      <Typography variant="h4">
        Welcome to The chunaav: The advanced and secure voting system
      </Typography>
      <Card variant="elevation" className="mt-4">
        <CardContent>
          <Typography variant="h5">
            Thanks for being a responsible citizen <span role="img">🙏</span>
          </Typography>
          <form
            noValidate
            autoComplete="off"
            className="mt-4"
            onSubmit={handleSubmit}
          >
            <div>
              <TextField
                required
                type="number"
                id="outlined-basic"
                label="Aadhar number"
                variant="outlined"
                onChange={(e) => setAadharNum(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <TextField
                required
                id="outlined-password-input"
                label="Enter Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                onChange={(e) => setPhoneNum(e.target.value)}
              />
            </div>
            <CardActions className="justify-content-center">
              <Button
                id='sign-in-button'
                variant="outlined"
                color="primary"
                type="submit"
                className="mt-4"
                disabled={loginDisabled}
              >
                LOGIN
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loginStage: state.voter.loginStage,
});

const mapDispatchToProps = {
  loginVoter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
