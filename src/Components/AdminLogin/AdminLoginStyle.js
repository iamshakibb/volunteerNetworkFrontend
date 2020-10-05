const { makeStyles } = require("@material-ui/core");

const AdminLoginStyle = makeStyles({
  AdminLoginContainer: {
    padding: "30px",
  },
  PassHint: {
    border: "2px solid green",
    padding: "10px",
    marginBottom: "20px",
    "& h5": {
      color: "green",
    },
  },

  input: {
    width: "100%",
    marginBottom: "20px",
  },
  AdminLoginBtn: {
    backgroundColor: "#3F90FC",
    color: "#fff",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#3F90FC",
      boxShadow: "none",
    },
  },

  Error: {
    color: "salmon",
  },
});
export default AdminLoginStyle;
