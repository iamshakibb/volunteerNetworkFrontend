import { Container } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import { UserInfoContext } from "../../App";
import Form from "../Form/Form";
import SingleLogo from "../SingleLogo/SingleLogo";

function Register() {
  const { heading } = useParams();
  const imgQuery = window.location.search;
  const img = imgQuery.slice(6);
  return (
    <Container>
      <SingleLogo />
      <Form heading={heading} img={img} />
    </Container>
  );
}

export default Register;
