const { makeStyles } = require("@material-ui/core");

const UsersInfoStyle = makeStyles({
  Container: {
    padding: "30px",
    height: "80vh",
  },
  UsersInfoContainer: {
    textAlign: "center",
    height: "40px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#F5F6FA",
    borderRadius: "10px",
  },

  usersInfo: {
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "10px",
  },

  userInfo: {
    marginTop: "20px",
  },

  RemoveBtn: {
    backgroundColor: "red",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "red",
      boxShadow: "none",
    },
    "& img": {
      width: " 35%",
    },
  },

  text: {
    fontSize: "12px",
  },

  BackBtn: {
    marginBottom: "10px",
  },
});

export default UsersInfoStyle;
