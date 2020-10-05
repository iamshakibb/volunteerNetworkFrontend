import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserInfoContext } from "../../App";
import { FromStyle } from "./FormStyle";

function Form({ heading, img }) {
  const classes = FromStyle();
  const user = useContext(UserInfoContext);
  const { userInfo } = user;
  const history = useHistory();
  let [dateValue, setDateValue] = useState("");
  let [descriptionValue, setDescriptionValue] = useState("");

  // state of error message
  const [errorMessage, setErrorMessage] = useState("");

  // get Date value
  const getDateValue = (e) => {
    setErrorMessage("");
    const value = e.target.value;
    setDateValue(value);
  };
  // get description value
  const getDescriptionValue = (e) => {
    setErrorMessage("");
    const value = e.target.value;
    setDescriptionValue(value);
  };

  //setting userActivities to send the user activity
  const userActivities = {
    email: userInfo.email,
    name: userInfo.name,
    date: dateValue,
    description: descriptionValue,
    heading: heading,
    img: img,
  };

  //go to the user info and submit the user info
  const gotoUserInfo = (e) => {
    e.preventDefault();
    const bookPath = `/info?email=` + userInfo.email;
    if (descriptionValue.length !== 0 && dateValue.length !== 0) {
      axios.post("https://volunteernetworkbyreact.herokuapp.com/sendUserActivities", userActivities);
      history.push(bookPath);
    } else if (descriptionValue.length === 0) {
      setErrorMessage("You didn't fill the form properly");
      history.push();
    } else if (dateValue.length === 0) {
      setErrorMessage("You didn't fill the form properly");
      history.push();
    }
  };
  return (
    <div>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={6}>
          <Paper component="div" className={classes.FormContainer}>
            <Grid container alignItems="center" justify="center">
              <Grid item xs={9}>
                <Typography variant="h6" className={classes.Heading} gutterBottom>
                  Register as a Volunteer
                </Typography>
                <Typography variant="subtitle1" className={classes.errorMessage} gutterBottom>
                  {errorMessage}
                </Typography>
              </Grid>
            </Grid>
            <form>
              <Grid container className={classes.FromInput} alignItems="center" justify="center">
                <Grid item xs={12}>
                  <TextField className={classes.input} value={userInfo.name} id="standard-FullName-input" variant="outlined" label="Full Name" type="text" />
                </Grid>
                <Grid item xs={12}>
                  <TextField className={classes.input} value={userInfo.email} id="standard-Email-input" variant="outlined" label="Email" type="Email" />
                </Grid>
                <Grid item xs={12}>
                  <TextField className={classes.input} onBlur={getDateValue} required format="dd/MM/yyyy" id="standard-Date-input" variant="outlined" type="Date" />
                </Grid>
                <Grid item xs={12}>
                  <TextField className={classes.input} onBlur={getDescriptionValue} required id="standard-Description-input" variant="outlined" label="Description" type="text" />
                </Grid>
                <Grid item xs={12}>
                  <TextField className={classes.input} value={heading} required id="standard-VolunteersActivist-input" variant="outlined" label="Volunteers Activist" type="text" />
                </Grid>
                <Grid item xs={12}>
                  <Button onClick={gotoUserInfo} variant="contained" type="submit" className={classes.RegistrationBtn}>
                    Registration
                  </Button>
                </Grid>
              </Grid>
              <Button></Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Form;
