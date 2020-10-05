import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const VolunteersActivities = makeStyles({
  activistContainer: {
    paddingBottom: "40px",
  },
  img: {
    "& img": {
      width: "100%",
    },
  },

  heading: {
    marginTop: "-20px",
    padding: "10px",
    textAlign: "center",
    fontSize: "20px",
    height: "80px",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
});

function VolunteersActivist() {
  const classes = VolunteersActivities();
  const [activities, setActivities] = useState();

  useEffect(() => {
    axios.get("https://volunteernetworkbyreact.herokuapp.com/getVolunteersActivities").then((res) => setActivities(res.data));
  }, []);

  const color = ["#FFBD3E", "#FF7044", "#3F90FC", "#421FCF"];

  const randomNumGen = () => {
    const randomColor = Math.floor(Math.random() * color.length);
    return randomColor;
  };
  return (
    <Container className={classes.activistContainer}>
      <Grid container spacing={2}>
        {!activities
          ? null
          : activities.map((activity, index) => (
              <Grid item md={3} key={activity._id}>
                {/* `/register/${activity.heading}` */}
                <Link to={{ pathname: `/register/${activity.heading}`, search: `?sort=${activity.img}` }}>
                  <Grid container>
                    <Grid item xs={12} className={classes.img}>
                      <img src={activity.img} alt="activist Img" />
                    </Grid>
                    <Grid item xs={12} style={{ backgroundColor: color[randomNumGen() + 0] }} className={`${classes.heading} `}>
                      <Typography variant="h6" gutterBottom>
                        {activity.heading}
                      </Typography>
                    </Grid>
                  </Grid>
                </Link>
              </Grid>
            ))}
      </Grid>
    </Container>
  );
}

export default VolunteersActivist;
