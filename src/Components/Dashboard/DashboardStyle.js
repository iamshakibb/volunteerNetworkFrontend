const { makeStyles } = require("@material-ui/core");

const DashBoardStyle = makeStyles({
  DashboardContainer: {
    height: "300px",
  },

  DashboardBtnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50px",
  },

  DashboardBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "150px",
    height: "150px",
    border: "2px solid gray",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
    },
  },
});

export default DashBoardStyle;
