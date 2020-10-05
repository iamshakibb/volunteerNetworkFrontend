import { Button, Container, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import SingleLogo from "../SingleLogo/SingleLogo";
import { useHistory } from "react-router-dom";
import AdminLoginStyle from "./AdminLoginStyle";
import { UserInfoContext } from "../../App";

function AdminLogin() {
  const classes = AdminLoginStyle();
  let history = useHistory();
  const user = useContext(UserInfoContext);
  const { userInfo, setUserInfo } = user;
  let [userName, setUserName] = useState("");
  let [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const InputValue = (e) => {
    if (e.target.name === "user") {
      setUserName(e.target.value);
    } else if (e.target.name === "pass") {
      setPass(e.target.value);
    }
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    const AdminDashBoard = "/dashboard/admin";
    if (userName === "Admin" && pass === "Admin") {
      const newUser = { ...userInfo, isAdminLogin: true };
      setUserInfo(newUser);
      history.push(AdminDashBoard);
    } else if (userName !== "Admin") {
      const newUser = { ...userInfo, isAdminLogin: false };
      setUserInfo(newUser);
      setError("Your User or pass is wrong");
      history.push();
    } else if (pass !== "Admin") {
      const newUser = { ...userInfo, isAdminLogin: false };
      setUserInfo(newUser);
      setError("Your User or pass is wrong");
      history.push();
    }
  };
  return (
    <Container>
      <SingleLogo />
      <Grid container alignItems="center" justify="center">
        <Grid item xs={10}>
          <Paper component="div" className={classes.AdminLoginContainer}>
            <Grid container alignItems="center" justify="center">
              <Grid item xs={10}>
                <Typography variant="h6" className={classes.Error} gutterBottom>
                  {error}
                </Typography>
              </Grid>
              <Grid item xs={10} className={classes.PassHint}>
                <Typography variant="h5" gutterBottom>
                  Pass Hint
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  User:Admin
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Pass:Admin
                </Typography>
              </Grid>
              <form onSubmit={handleAdminLogin}>
                <Grid container alignItems="center" justify="center">
                  <Grid item xs={10}>
                    <TextField onBlur={InputValue} className={classes.input} required id="standard-UserName-input" variant="outlined" label="user Name" name="user" type="text" />
                    <TextField
                      onBlur={InputValue}
                      className={classes.input}
                      required
                      id="standard-Password-input"
                      variant="outlined"
                      label="Password"
                      name="pass"
                      type="password"
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <Button type="submit" className={classes.AdminLoginBtn}>
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AdminLogin;
