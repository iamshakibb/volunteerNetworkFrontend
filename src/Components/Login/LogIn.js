import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import SingleLogo from "../SingleLogo/SingleLogo";
import { LoginStyle } from "./LoginStyle";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../Firebase/FirebaseConfig";
import { UserInfoContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

const firebaseInit = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};

firebaseInit();
function LogIn() {
  const classes = LoginStyle();
  const user = useContext(UserInfoContext);
  const { userInfo, setUserInfo } = user;
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const newUser = { ...userInfo };
        newUser.signupError = "";
        setUserInfo(newUser);
        const { displayName, email } = result.user;
        const info = {
          isLogin: true,
          name: displayName,
          email: email,
        };
        setUserInfo(info);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle Errors here.
        const errorMessage = error.message;
        const info = {
          isLogin: false,
        };

        setUserInfo(info);
        setUserInfo({ ...userInfo, signupError: errorMessage });
      });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const newUser = { ...userInfo };
        newUser.signupError = "";
        setUserInfo(newUser);
        const { displayName, email } = user;
        const info = {
          isLogin: true,
          name: displayName,
          email: email,
        };
        setUserInfo(info);
      }
    });
  }, []);
  return (
    <Container>
      <SingleLogo />
      <Grid container alignItems="center" justify="center">
        <Grid item xs={6}>
          <Paper component="div" className={classes.LoginBtnContainer}>
            <Grid container alignItems="center" justify="center">
              <Grid item xs={10}>
                <Typography variant="h6" className={classes.error} gutterBottom>
                  {userInfo.signupError}
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h4" className={classes.Heading} gutterBottom>
                  Login With
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Button
                  className={classes.LoginBtn}
                  onClick={() => {
                    handleGoogleLogin();
                  }}
                >
                  <img src="https://i.ibb.co/jRKzCQ5/Group-573.png" alt="Login LOGO" />
                  <span>Continue with Google</span>
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LogIn;
