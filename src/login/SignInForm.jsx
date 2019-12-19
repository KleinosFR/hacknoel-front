import React from "react";
import { Button, Container, Row, Icon } from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useHistory } from "react-router-dom";

function LoginForm() {
    const handleSignGithub = e => {
        e.preventDefault();
        console.log("github method");
    };

    const handleSignGoogle = e => {
        e.preventDefault();
        console.log("google method");
    };

    return (
        <Container>
            <Row>
                <form>
                    <Row>
                        <Button onClick={handleSignGithub}>
                            <Icon left>
                                <FontAwesomeIcon icon={faGithub} />
                            </Icon>
                            Sign in with Gihub
                        </Button>
                    </Row>
                    <Row>
                        <Button onClick={handleSignGoogle}>
                            <Icon left>
                                <FontAwesomeIcon icon={faGoogle} />
                            </Icon>
                            Sign in with Google
                        </Button>
                    </Row>
                </form>
            </Row>
        </Container>
    );
}

export default LoginForm;
