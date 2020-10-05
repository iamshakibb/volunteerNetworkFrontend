const { makeStyles } = require("@material-ui/core");

export const LoginStyle = makeStyles({
  LoginBtnContainer: {
    width: "570px",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  error: {
    color: "salmon",
  },

  Heading: {
    textAlign: "center",
    marginBottom: "20px",
  },

  LoginBtn: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    border: "1px solid #C7C7C7",
    borderRadius: "20px",
  },
});
