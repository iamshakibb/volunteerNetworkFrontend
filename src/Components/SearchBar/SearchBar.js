import { Button, Container, makeStyles, TextField, Typography } from "@material-ui/core";
import React from "react";

const SearchBarStyle = makeStyles((theme) => ({
  SearchContainer: {
    textAlign: "center",
    marginTop: "100px",
    marginBottom: "100px",
  },

  Heading: {
    marginBottom: "30px",
    textTransform: "uppercase",
  },

  SearchInput: {
    width: "400px",

    "& input": {
      height: "20px",
    },
  },

  SearchBtn: {
    width: "100px",
    height: "58px",
    marginTop: "15px",
    marginLeft: "-35px",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
    boxShadow: "none",
    backgroundColor: "#3F90FC",
    color: "#fff",

    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#3F90FC",
    },
  },
}));

function SearchBar() {
  const classes = SearchBarStyle();
  return (
    <Container>
      <div className={`${classes.SearchContainer}`}>
        <Typography variant="h4" gutterBottom className={`${classes.Heading}`}>
          I grow by helping people in need.
        </Typography>
        <TextField className={`${classes.SearchInput}`} label="Search" margin="normal" variant="outlined" />
        <Button className={`${classes.SearchBtn}`} variant="contained">
          Search
        </Button>
      </div>
    </Container>
  );
}

export default SearchBar;
