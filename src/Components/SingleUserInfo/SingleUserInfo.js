import { Button, Container, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserInfoContext } from "../../App";
import SingleLogo from "../SingleLogo/SingleLogo";

const SingleUserInfoStyle = makeStyles({
  userActivity: {
    marginBottom: "20px",
    height: "200px",
    "& h5": {
      fontSize: "18px",
      fontWeight: "900",
    },
  },
  userInfoContainer: {
    padding: "20px",
  },
  userImgContainer: {
    padding: "10px",
  },

  removeBtn: {
    backgroundColor: "red",
    color: "#fff",
    boxShadow: "none",

    "&:hover": {
      backgroundColor: "red",
      boxShadow: "none",
    },
  },
});

function SingleUserInfo() {
  const classes = SingleUserInfoStyle();
  const [userInfos, setUserInfos] = useState();
  const user = useContext(UserInfoContext);
  const { userInfo } = user;
  const email = userInfo.email;

  // to load the user data
  useEffect(() => {
    axios.get("https://volunteernetworkbyreact.herokuapp.com/getUserActivities?email=" + email).then((res) => setUserInfos(res.data));
  }, [userInfos]);

  //   to remove item
  const RemoveBtn = (id) => {
    if (id) {
      const restUser = userInfos.filter((user) => user._id !== id);
      setUserInfos(restUser);
      axios.delete(`https://volunteernetworkbyreact.herokuapp.com/delete/UserActivities/${id}`);
    }
  };
  return (
    <Container>
      <SingleLogo />
      <Grid container>
        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center" justify="center">
            {!userInfos ? (
              <Grid container alignItems="center" justify="center">
                <Grid item xs={12} style={{ textAlign: "center" }}>
                  <img style={{ width: "200px" }} src="https://media.giphy.com/media/VseXvvxwowwCc/giphy.gif" />
                </Grid>
              </Grid>
            ) : (
              userInfos.map((userInfo) => (
                <Grid item xs={5} key={userInfo._id}>
                  <Paper component="div" className={classes.userActivity}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Grid container>
                          <Grid item xs={4} className={classes.userImgContainer}>
                            <img style={{ width: "100%" }} src={userInfo.img} alt="img" />
                          </Grid>
                          <Grid item xs={8} className={classes.userInfoContainer}>
                            <Typography variant="h5" gutterBottom>
                              {userInfo.heading}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                              Email :{userInfo.email}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                              Date :{userInfo.date}
                            </Typography>
                            <Button onClick={() => RemoveBtn(userInfo._id)} className={classes.removeBtn}>
                              Remove
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SingleUserInfo;
