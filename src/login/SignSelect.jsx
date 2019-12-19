import React, { useState } from "react";
import { Button, Icon, Container, Row, Col } from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";

import SigninForm from "./SignInForm";
import SignupForm from "./SignupForm";

function SignSelect() {
    const [signUp, setSignUp] = useState(false);

    return (
        <>
            <Row classname="center-align">
                <Col s={6} classname="center-align">
                    <Button
                        style={{
                            marginRight: "5px"
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
                <Col s={6}>
                    <Button
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
