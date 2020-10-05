import { makeStyles } from "@material-ui/core/styles";

//css style the slide bar
export const NavBarStyles = makeStyles({
  NavBarSection: {
    "& nav": {
      display: "flex",
    },
  },

  logo: {
    width: "40%",
    marginTop: "8px",

    "& img": {
      width: "35%",
    },
  },

  nav_menu: {
    width: "60%",
    display: "flex",
    justifyContent: "flex-end",

    "& ul": {
      display: "flex",
      listStyle: "none",
      justifyContent: "right",
      textAlign: "center",
      marginTop: "15px",

      "& li": {
        paddingRight: "30px",
        marginTop: "5px",
      },
    },
  },

  menuSliderContainer: {
    width: "100vw",
    background: "#000",
    height: "30rem",
    color: "#fff",
    fontSize: " 1.5em",
  },

  sliderText: {
    textAlign: "center",
    paddingBottom: "15px",
  },

  sliderList: {
    paddingTop: "80px",
  },
  logOutBtn: {
    cursor: "pointer",
  },

  LogIn: {
    backgroundColor: "#3F90FC",
    boxShadow: "none",
    marginRight: "20px",
    marginTop: "-5px",
    height: "40px",
    color: "#fff",

    "&:hover": {
      backgroundColor: "#3F90FC",
      boxShadow: "none",
    },
  },

  Admin: {
    backgroundColor: "#434141",
    boxShadow: "none",
    marginTop: "-5px",
    height: "40px",
    color: "#fff",

    "&:hover": {
      backgroundColor: "#434141",
      boxShadow: "none",
    },
  },

  mobile: {
    display: "none",
  },

  userName: {
    border: "1px solid black",
    padding: "10px",
    marginRight: "20px",
    marginBottom: "20px",
    marginTop: "-7px",
  },
});
