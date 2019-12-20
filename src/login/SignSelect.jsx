import React, { useState } from "react";
import { Button, Icon, Row, Col } from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";

import SigninForm from "./SignInForm";
import SignupForm from "./SignupForm";

function SignSelect() {
    const [signUp, setSignUp] = useState(false);

    return (
        <>
            <Row style={{ textAlign: "center", marginTop: "15px" }}>
                <Col s={6} classname="center-align">
                    <Button
                        style={{
                            margin: "5px"
                        }}
                        waves="light"
                        onClick={() => setSignUp(false)}
                    >
                        Sign In
                        <Icon left>
                            <FontAwesomeIcon icon={faSignInAlt} />
                        </Icon>
                    </Button>
                </Col>
                <Col s={6} classname="center-align">
                    <Button
                        style={{
                            margin: "5px"
                        }}
                        node="button"
                        waves="light"
                        onClick={() => setSignUp(true)}
                    >
                        Sign Up
                        <Icon left>
                            <FontAwesomeIcon icon={faUserPlus} />
                        </Icon>
                    </Button>
                </Col>
            </Row>
            <Row>{signUp ? <SignupForm /> : <SigninForm />}</Row>
        </>
    );
}

export default SignSelect;
