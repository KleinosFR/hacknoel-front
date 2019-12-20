import React from "react";
import Admin from "./Admin";
import { Row, Col, TextInput, Button, Icon } from "react-materialize";
import Container from "react-materialize/lib/Container";

export default function LoginAdmin() {
  return (
    <>
      <Container style={{ marginTop: "250px" }}>
        <TextInput label="First Name" />

        <TextInput label="Password" password />

        <Row style={{ textAlign: "center" }}>
          <Button node="button" type="submit" waves="light">
            Submit
            <Icon right>send</Icon>
          </Button>
        </Row>
      </Container>
    </>
  );
}
