import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SingleLogo from "../SingleLogo/SingleLogo";
import UsersInfoStyle from "./UsersInfoStyle.js/UsersInfoStyle";

function UsersInfo() {
  const [usersInfo, setUsersInfo] = useState();
  useEffect(() => {
    axios.get("https://volunteernetworkbyreact.herokuapp.com/usersActivities").then((res) => {
      setUsersInfo(res.data);
    });
  }, [usersInfo]);

  //   to remove item
  const RemoveBtn = (id) => {
    if (id) {
      const restUser = usersInfo.filter((user) => user._id !== id);
      setUsersInfo(restUser);
      axios.delete(`https://volunteernetworkbyreact.herokuapp.com/delete/UserActivities/${id}`);
    }
  };
  const classes = UsersInfoStyle();
  return (
    <Container>
      <SingleLogo />
      <Paper component="div" className={classes.Container}>
        <Grid container>
          <Grid item xs={12}>
            <Link to="/dashboard/admin">
              <Button className={classes.BackBtn} variant="contained" color="secondary">
                Back
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Paper component="div" className={classes.UsersInfoContainer}>
          <Grid container>
            <Grid item xs={2}>
              Name
            </Grid>
            <Grid item xs={3}>
              Email
            </Grid>
            <Grid item xs={2}>
              Date
            </Grid>
            <Grid item xs={3}>
              Volunteer List
            </Grid>
            <Grid item xs={2}>
              Delete
            </Grid>
          </Grid>
        </Paper>
        <Grid container className={classes.usersInfo}>
          {!usersInfo ? (
            <Grid container alignItems="center" justify="center">
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <img style={{ width: "200px" }} src="https://media.giphy.com/media/VseXvvxwowwCc/giphy.gif" />
              </Grid>
            </Grid>
          ) : (
            usersInfo.map((userInfo) => (
              <>
                <Grid container className={classes.userInfo} key={userInfo._id}>
                  <Grid item xs={2}>
                    <Typography variant="subtitle1" className={classes.text} gutterBottom>
                      {userInfo.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="subtitle1" className={classes.text} gutterBottom>
                      {userInfo.email}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="subtitle1" className={classes.text} gutterBottom>
                      {userInfo.date}
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    {userInfo.heading}
                    <Typography variant="subtitle1" className={classes.text} gutterBottom>
                      {userInfo.heading}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Button onClick={(id) => RemoveBtn(userInfo._id)} className={classes.RemoveBtn}>
                      <img src="https://i.ibb.co/ZBQPvNW/trash-2-9.png" alt="trash-2-9" />
                    </Button>
                  </Grid>
                </Grid>
              </>
            ))
          )}
        </Grid>
      </Paper>
    </Container>
  );
}

export default UsersInfo;
