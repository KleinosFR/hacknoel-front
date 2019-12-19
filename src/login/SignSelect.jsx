import React, { useState } from "react";
import { Button, Icon, Container, Row } from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";

import SigninForm from "./SignInForm";

function SignSelect() {
    const [signUp, setSignUp] = useState(false);

    return (
        <Container>
            <Row>
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
            </Row>
            <Row>{signUp ? <div>Sign UP</div> : <SigninForm />}</Row>
        </Container>
    );
}

export default SignSelect;
