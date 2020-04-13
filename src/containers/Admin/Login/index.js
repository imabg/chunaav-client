import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { adminLogin } from "./action";
import {
  TextField,
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";

const AdminLogin = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginDisabled, setLoginDisable] = useState(true);

  useEffect(() => {
    if (username.trim() && password.trim()) {
      setLoginDisable(false);
    } else {
      setLoginDisable(true);
    }
  }, [username, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sending the ADMIN_LOGIN_REQUEST
    props.adminLogin({ username, password });
  };

  useEffect(() => {
    if (props.isLogin) props.history.push("/admin/dashboard");
  });

  return (
    <div className="container mt-4 mx-auto text-center">
      <Typography variant="h4">
        Admin Panel <span role="img">👮</span>
      </Typography>
      <Card variant="elevation" className="mt-4">
        <CardContent>
          <Typography variant="h5">
            Please login to continue <span role="img">🙏</span>
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
                type="text"
                id="outlined-basic"
                label="Enter Username"
                variant="outlined"
                onChange={(e) => setUserName(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <CardActions className="justify-content-center">
              <Button
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
  isLogin: state.admin.isLogin,
});

const mapDispatchToProps = {
  adminLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
