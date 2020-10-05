import { makeStyles } from "@material-ui/core";

export const FromStyle = makeStyles({
  FormContainer: {
    padding: "30px 20px",
  },

  Heading: {
    marginBottom: "15px",
  },

  FromInput: {
    textAlign: "center",
  },

  input: {
    marginBottom: "20px",
    width: "80%",
  },
  RegistrationBtn: {
    width: "80%",
    padding: "10px",
    color: "#fff",
    backgroundColor: "#3F90FC",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#3F90FC",
      boxShadow: "none",
    },
  },

  errorMessage: {
    color: "salmon",
  },
});
