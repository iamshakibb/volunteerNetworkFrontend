import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const SingleLogoStyle = makeStyles({
  SingleLogo: {
    marginTop: "20px",
    marginBottom: "20px",
    textAlign: "center",
    "& img": {
      width: "15%",
    },
  },
});

function SingleLogo() {
  const classes = SingleLogoStyle();
  return (
    <div className={classes.SingleLogo}>
      <Link to="/">
        <img src="https://i.ibb.co/QmRc640/Group-1329.png" alt="LOGO" />
      </Link>
    </div>
  );
}

export default SingleLogo;
