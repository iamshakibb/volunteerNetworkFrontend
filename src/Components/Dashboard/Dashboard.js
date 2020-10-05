import { Button, Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import SingleLogo from "../SingleLogo/SingleLogo";
import DashBoardStyle from "./DashboardStyle";

function Dashboard() {
  const classes = DashBoardStyle();
  return (
    <Container>
      <SingleLogo />
      <Grid container justify="center" alignItems="center">
        <Grid item xs={10}>
          <Paper component="div" className={classes.DashboardContainer}>
            <Grid container spacing={2} justify="center" alignItems="center">
              <Grid item xs={5} className={classes.DashboardBtnContainer}>
                <Link to="/addEvent/dashboard">
                  <Button>
                    <Paper component="div" className={classes.DashboardBtn}>
                      <Grid container>
                        <Grid item xs={12}>
                          <img src="https://i.ibb.co/Z8gTTQL/plus-1.png" alt="plus-1" />
                        </Grid>
                        <Grid item xs={12}>
                          <h4>Add Event</h4>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={5} className={classes.DashboardBtnContainer}>
                <Link to="/usersInfo/dashboard">
                  <Button>
                    <Paper component="div" className={classes.DashboardBtn}>
                      <Grid container>
                        <Grid item xs={12}>
                          <img src="https://i.ibb.co/Hgf4Btr/users-alt-1.png" alt="users-alt-1" />
                        </Grid>
                        <Grid item xs={12}>
                          <h4>User</h4>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
